const request = require('request');
const confs = require('./config.js')
const {_homepageTemplate} = require('./parser/_homepage-template');
const {_specialOffersTemplate} = require('./parser/_special-offers-template');
const {_destinationsTemplate} = require('./parser/_destinations-template');
const {_hotelsTemplate} = require('./parser/_hotels-template');
const {_singleHotelTemplate} = require('./parser/_single-hotel-template');
const {_singleHotelRoomTemplate} = require('./parser/_single-hotel-rooms-template');
const {_singlePostTypeRoomTemplate} = require('./parser/_post-type-room-template');
const {_locationTemplate} = require('./parser/_location-template');
const {_facilitiesTemplate} = require('./parser/_facilities-template');
const {_destinationGuideTemplate} = require('./parser/_destination-guide-template');
const {_destinationGuideLocationTemplate} = require('./parser/_destination-guide-location-template');
const {_singlePostTemplate} = require('./parser/_single-post-template');
const {_blogTemplate} = require('./parser/_blog-template');
const {_exhibitionTemplate} = require('./parser/_exchibition-template');
const {_contactTemplate} = require('./parser/_contact-template');
const {_defaultTemplate} = require('./parser/_default-template')
const fs = require("fs");
const path = require("path");
getData(confs.LANG)

const hotelsOccupancy = {}
async function getData(langs){

    console.log(langs)
    for (const lang of langs) {

        const WPusername = confs.WP_USER,
            WPpassword = confs.WP_PASS,
            WPpages = "https://" + confs.WP_SOURCE + "/wp-json/wp/v2/pages?_embed&per_page=100",
            WPpages2 = "https://" + confs.WP_SOURCE + "/wp-json/wp/v2/pages?_embed&per_page=100&offset=100",
            WProoms = "https://" + confs.WP_SOURCE + "/wp-json/wp/v2/rooms?_embed&filter[orderby]=date&order=desc&per_page=100",
            WProoms2 = "https://" + confs.WP_SOURCE + "/wp-json/wp/v2/rooms?_embed&filter[orderby]=date&order=desc&per_page=100&offset=100",
            WPsightseeings = "https://" + confs.WP_SOURCE + "/wp-json/wp/v2/sightseeings?_embed&filter[orderby]=date&order=desc&per_page=100",
            WPblog = "https://" + confs.WP_SOURCE + "/wp-json/wp/v2/blog?_embed&filter[orderby]=date&order=desc&per_page=100",
            WPHotels = "https://" + confs.WP_SOURCE + "/wp-json/wp/v2/hotelss?_embed&filter[orderby]=date&order=desc&per_page=100",
            WPOffers = "https://" + confs.WP_SOURCE + "/wp-json/wp/v2/special_offers?_embed&filter[orderby]=date&order=desc&per_page=100",
            WPExhibitions = "https://" + confs.WP_SOURCE + "/wp-json/wp/v2/exhibitions?_embed&filter[orderby]=date&order=desc&per_page=100",
            WPtaxHotels = "https://" + confs.WP_SOURCE + "/wp-json/wp/v2/all-terms?term=hotelstax",
            WPtaxHotelsType = "https://" + confs.WP_SOURCE + "/wp-json/wp/v2/all-terms?term=hotel_type",
            WPtaxLocation = "https://" + confs.WP_SOURCE + "/wp-json/wp/v2/all-terms?term=location",
            WPtypeOfSightseeings = "https://" + confs.WP_SOURCE + "/wp-json/wp/v2/all-terms?term=type_of_sightseeings",
            WPauth = "Basic " + new Buffer(WPusername + ":" + WPpassword).toString("base64")

        const headers = {
            "Authorization" : WPauth,
            "Content-Type" : "application/json",
            "Access-Control-Allow-Origin": "*",
            "Accept": "application/json"
        }

        async function GET_WORDPRESS_DATA() {

            const WPPAGES = {
                url : WPpages,
                method: "GET",
                headers: headers
            }

            const [pages, hotels, rooms, sightseeings, blog, hotel_taxonomies, offers, pages2, rooms2, exhibitions] = await Promise.all([_request(WPPAGES),_request(WPHotels), _request(WProoms),_request(WPsightseeings),_request(WPblog),_request(WPtaxHotels), _request(WPOffers), _request(WPpages2),_request(WProoms2),_request(WPExhibitions)])

            const Pages = pages.concat(pages2)
            const Rooms = rooms.concat(rooms2)

            hotels.map(item => {
                if(!item.acf || !item.acf.occupancy){
                    return
                }
                hotelsOccupancy[item.slug] = {...item.acf.occupancy[0],book_now: item.acf.book_now, title:item.acf.title}
            })

            const [destinationMap] = Pages.filter(item=> item.template === 'templates/page_type_destinations.php')

            Pages.map(function(item){

                const [taxHotel] = hotel_taxonomies.filter(function(tax){
                    return tax.term_id === item.hotelstax[0]
                })

                const moreRooms = Rooms.filter(function (room){
                    if(taxHotel){
                        return room.hotelstax[0] === taxHotel.term_id
                    }

                })

                const moreOffers = offers.filter(function (offer){
                    if(taxHotel) {
                        return offer.hotelstax[0] === taxHotel.term_id
                    }
                })

                switch(item.template) {

                    case '':

                        _defaultTemplate(item.acf,item.link,item)
                        break;

                    case 'templates/homepage.php':

                        _homepageTemplate(item.acf)
                        break;
                    case 'templates/page_type_special-offers.php':

                        _specialOffersTemplate(item.acf)
                        break;
                    case 'templates/page_type_destinations.php':

                        item.acf.select_destination.map(item => {

                            item.hotels = item.hotels.map(hhotel => {
                                const Hotels = hotels.filter(function (hitem){
                                    return hitem.id === hhotel.hotel.ID
                                })
                                return Hotels
                            })

                            return item

                        })

                        _destinationsTemplate(item.acf)
                        break;
                    case 'templates/page_type_hotels.php':

                        item.acf.select_hotels_from_page.map(item => {
                            item.select_hotel_from_page = hotels.filter(function (hitem){
                                return hitem.id === item.select_hotel_from_page.ID
                            })
                            return item
                        })
                         let DestinationMap = destinationMap

                         const dests = DestinationMap.acf.select_destination.map(item => {

                            item.hotelss = item.hotels.map(hhotel => {
                                const Hotels = hotels.filter(function (hitem){
                                    return hitem.id === hhotel.hotel.ID
                                })
                                return Hotels
                            })

                            return item
                        })

                        const Item = item
                        Item.acf.destinationData = dests

                        _hotelsTemplate(Item.acf,item.slug,item.title.rendered.toLowerCase())
                        break;
                    case 'templates/page_type_hotel.php':

                        const [hotel] = hotels.filter(function (hotel){
                            return hotel.hotelstax[0] === taxHotel.term_id
                        })

                        item.acf.select_rooms = moreRooms
                        item.acf.select_offers = moreOffers
                        item.acf.single_select_hotel = hotel

                        item.acf.hotelType = item.acf.single_select_hotel.hotel_type[0]

                        if(hotel.acf.select_more_hotels){
                            const moreHotels = hotels.filter(function (hitem){
                                if(item.acf.single_select_hotel.acf.select_more_hotels[1]){
                                    return hitem.id === item.acf.single_select_hotel.acf.select_more_hotels[0].select_more_hotel.ID || hitem.id === item.acf.single_select_hotel.acf.select_more_hotels[1].select_more_hotel.ID
                                }
                                if(item.acf.single_select_hotel.acf.select_more_hotels[0]){
                                    return hitem.id === item.acf.single_select_hotel.acf.select_more_hotels[0].select_more_hotel.ID
                                }
                                return false
                            })
                            item.acf.select_more_hotels = moreHotels
                        }

                        _singleHotelTemplate(item.acf,item.link,item.title.rendered.toLowerCase())
                        break;
                    case 'templates/page_type_room.php':

                        item.acf.select_offers = moreOffers
                        item.acf.select_rooms = moreRooms
                        _singleHotelRoomTemplate(item.acf,item.link,item.title.rendered.toLowerCase())
                        break;
                    case 'templates/page_type_location.php':

                        _locationTemplate(item.acf,item.link,item.title.rendered.toLowerCase())
                        break;
                    case 'templates/page_type_facilities.php':

                        _facilitiesTemplate(item.acf,item.link,item.title.rendered.toLowerCase())
                        break;
                    case 'templates/location.php':

                        _destinationGuideTemplate(item.acf)
                        break;
                    case 'templates/page_type_location_sightseeings.php':

                        _destinationGuideLocationTemplate(item.acf,item.slug)
                        break;
                    case 'templates/page_type_blog.php':

                        _blogTemplate(item.acf)
                        break;
                    case 'templates/contact.php':

                        _contactTemplate(item.acf)
                        break;

                    case 'templates/exhibitions.php':

                        _exhibitionTemplate(item.acf)
                        break;

                    default:
                        console.log("PAGE NOT FOUND")
                }

            })

            Rooms.map(function(item){

                const [taxHotel] = hotel_taxonomies.filter(function(tax){
                    return tax.term_id === item.hotelstax[0]
                })

                const moreRooms = Rooms.filter(function (room){
                 
                    return room.hotelstax[0] === taxHotel.term_id && item.id !== room.id
                })

                _singlePostTypeRoomTemplate(item.acf,moreRooms,item.id,item.link,taxHotel, item, item.title.rendered.toLowerCase())
                return item
            })

            sightseeings.map(function(item){
                _singlePostTemplate(item.acf,sightseeings,item.id,'sightseeings')
                return item
            })

            blog.map(function(item){
                _singlePostTemplate(item.acf,blog,item.id,'blog',item.title.rendered.toLowerCase())
                return item
            })

            exhibitions.map(function(item){
                _singlePostTemplate(item.acf,exhibitions,item.id,'exhibitions',item.title.rendered.toLowerCase())
                return item
            })

            const jsonPath = path.join(__dirname, '../', '/public/hotels/acquavista/data');

            fs.writeFile(`${jsonPath}/occupancy.json`, JSON.stringify(hotelsOccupancy), 'utf8', (err) => {
                console.log("change data output FINISH Occupancy")
                return (err) ? console.log(err) : console.log("The file pages was saved!");
            })
        }

        await GET_WORDPRESS_DATA(lang)
    }

    return

}

async function _request(url) {

    return new Promise((resolve, reject) => {
        request( url , function(error, response, body){
            if (!error && response.statusCode === 200) {
                return resolve(JSON.parse(body))
            }else{
                console.log(error)
                return error
            }
        });
    });
}

module.exports = getData