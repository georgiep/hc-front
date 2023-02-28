const fs =require('fs');
const path = require("path");

const _hotelsParseObj = {
    _HeroSliderWithBookingForm_Hero_oder_0_row_0_col_0: {

    },
    _ShowHotels_Template1_order_1_row_0_col_0: {

    },
    _Commons_Text_order_2_row_0_col_0: {

    },
    _Commons_Text_order_2_row_0_col_1: {

    },

}

let linkPost = {
    "pathname": "/hotels-in-santorini/dreams-luxury-suites",
    "api": "/pages/room/room1",
    "text": "Explore"
}

const hotelsParser = (data,slug,pageName) => {

    _hotelsParseObj._HeroSliderWithBookingForm_Hero_oder_0_row_0_col_0 = {
        "items": data.slider_gallery.map(item => {
            return{
                "src":item.url.toString().replace('https://greece-hotel.info/admins/aquavistahotels/wp-content/uploads','https://code.rateparity.com/aquavistahotels.com'),
                "alt": 'alt hotel image'
            }
        }),
        "heading": data.intro_text
    }


    _hotelsParseObj._ShowHotels_Template1_order_1_row_0_col_0 = {
        "items": data.select_hotels_from_page.map(item => {
            let HOTEL = {}
            item.select_hotel_from_page[0].acf.image = {
                src: item.select_hotel_from_page[0].acf.image.toString().replace('https://greece-hotel.info/admins/aquavistahotels/wp-content/uploads','https://code.rateparity.com/aquavistahotels.com'),
                alt: 'image alt'
            }

            item.select_hotel_from_page[0].acf.amenities_with_icon = item.select_hotel_from_page[0].acf.amenities_with_icon.map(item=> {
                item.icon = item.icon.toString().replace('https://greece-hotel.info/admins/aquavistahotels/wp-content/uploads','https://code.rateparity.com/aquavistahotels.com')
                return item
            })

            HOTEL.image = item.select_hotel_from_page[0].acf.image
            HOTEL.lat = item.select_hotel_from_page[0].acf.lat
            HOTEL.lng = item.select_hotel_from_page[0].acf.lng
            HOTEL.title = item.select_hotel_from_page[0].acf.title

            console.log(item.select_hotel_from_page[0].acf)
            return {
                link: {
                    "pathname": `/${slug}/${item.select_hotel_from_page[0].slug}`,
                    "api": "/pages/room/room1",
                    "text": "Explore"
                },
                ...HOTEL,
                description: item.select_hotel_from_page[0].acf.excerpt,
                amenities: item.select_hotel_from_page[0].acf.amenities_with_icon,
                hotelType: item.select_hotel_from_page[0].hotel_type
            }
        })
    }
    _hotelsParseObj._Commons_Text_order_2_row_0_col_0 = {
        text: data.heading
    }
    _hotelsParseObj._Commons_Text_order_2_row_0_col_1 = {
        text: data.description
    }

    _hotelsParseObj.SEO = {
        "title": data.seo_title,
        "description": data.seo_description,
        "keywords": ""
    }

    const [destination] = data.destinationData.filter(item=>{
        return item.destination.post_name === slug.split('-')[2]
    })

    _hotelsParseObj.Maps = {
        items: destination.hotelss.map(item => {

            let HOTEL = {}
            HOTEL.lat = item[0].acf.lat
            HOTEL.lng = item[0].acf.lng
            HOTEL.title = item[0].acf.title
            return {
                ...HOTEL,
                link:{
                    "pathname":  `/${slug}/${item[0].slug}`,
                    "api": "/pages/room/room1",
                    "text": "Explore"
                }
            }
            // return {
            //     ...item[0].acf,
            //     link:{
            //         "pathname":  `/${slug}/${item[0].slug}`,
            //         "api": "/pages/room/room1",
            //         "text": "Explore"
            //     }
            // }
        }),
        modal: {
            event: 'map',
            component: 'mapMulti'
        },
        "css": {
            "element": "div",
            "class": "post-text-body",
            "color": "primary-white",
            "top": {
                "element": "div",
                "class": "title-case-primary text-uppercase text-center",
                "color": "primary-white"
            },
            "marker": {
                "element": "div",
                "class": "post-text-body",
                "color": "primary-dark"
            }
        }
    }

    _hotelsParseObj.breadcrumbs = {
        items: [
            {
                link: '/',
                label: "Aqua Vista"
            },
            {
                link: '',
                label: pageName
            }
        ]
    }
    // console.log(_hotelsParseObj.Maps)
    return _hotelsParseObj
}

const hotelsData = (parsed) => {

    return {
        "idbName": "/pages/hotels",
        "schema": "schema-hotels",
        "SEO": {...parsed.SEO},
        "0": {
            "wrapper": {
                "fluid": true,
                "css": {
                    "border": "0",
                    "backgroundColor": "#FFFFFF"
                },
                "rows": [
                    {
                        "css": {
                            "padding": "0",
                            "border": "0"
                        },
                        "columns": {
                            "sizes": [
                                "col-md-12"
                            ]
                        }
                    }
                ]
            },
            "rows": [
                {
                    "columns": [
                        {
                            ...parsed._HeroSliderWithBookingForm_Hero_oder_0_row_0_col_0,
                            "css": {
                                "heading": {
                                    "element": "div",
                                    "class": "title-case-hero text-uppercase",
                                    "color": "primary-white"
                                }
                            }
                        }
                    ]
                }
            ]
        },
        "1": {
            "wrapper": {
                "fluid": false,
                "css": {
                    "border": "0",
                    "backgroundColor": "#FFFFFF"
                },
                "class": "d-none d-md-block",
                "rows": [
                    {
                        "css": {
                            "padding": "80px 0 40px 0",
                            "border": "0"
                        },
                        "columns": {
                            "sizes": [
                                "col-md-12 animation--up"
                            ]
                        }
                    }
                ]
            },
            "rows": [
                {
                    "columns": [
                        {
                            ...parsed.breadcrumbs,
                            "css": {
                                "element": "div",
                                "class": "secondary-post-text",
                                "color": "primary-dark",
                            }
                        }
                    ]
                }
            ]
        },
        "2": {
            "wrapper": {
                "fluid": false,
                "css": {
                    "border": "0",
                    "backgroundColor": "#FFFFFF"
                },
                "rows": [
                    {
                        "css": {
                            "padding": "22px 0 0 0",
                            "border": "0"
                        },
                        "columns": {
                            "sizes": [
                                "col-md-12 animation--up"
                            ]
                        }
                    }
                ]
            },
            "rows": [
                {
                    "columns": [
                        {
                            ...parsed._ShowHotels_Template1_order_1_row_0_col_0,
                            "css": {
                                "title": {
                                    "element": "div",
                                    "class": "title-case-secondary",
                                    "color": "primary-dark"
                                },
                                "description": {
                                    "element": "div",
                                    "class": "secondary-post-text",
                                    "color": "primary-black"
                                },
                                "amenities": {
                                    "element": "div",
                                    "class": "promo-small-text",
                                    "color": "primary-black"
                                },
                                "link": {
                                    "element": "button",
                                    "class": "button-dark",
                                    "color": "primary-dark"
                                }
                            }
                        }
                    ]
                }
            ]
        },
        "3": {
            "wrapper": {
                "fluid": false,
                "css": {
                    "border": "0",
                    "backgroundColor": "#FFFFFF"
                },
                "rows": [
                    {
                        "css": {
                            "padding": "0 0 80px 0",
                            "border": "0"
                        },
                        "columns": {
                            "sizes": [
                                "col-md-12 animation--up",
                                "col-md-12 animation--up",
                            ]
                        }
                    }
                ]
            },
            "rows": [
                {
                    "columns": [
                        {
                            ...parsed._Commons_Text_order_2_row_0_col_0,
                            "css": {
                                "element": "div",
                                "class": "title-case-primary text-uppercase text-center animation--up",
                                "color": "primary-dark"
                            }
                        },
                        {
                            ...parsed._Commons_Text_order_2_row_0_col_1,
                            "css": {
                                "element": "div",
                                "class": "main-text-body text-center animation--up",
                                "color": "primary-black"
                            }
                        }
                    ]
                }
            ]
        },
        "4": {
            "wrapper": {
                "fluid": false,
                "css": {
                    "border": "0",
                    "backgroundColor": "#FFFFFF"
                },
                "rows": [
                    {
                        "css": {
                            "padding": "0",
                            "border": "0"
                        },
                        "columns": {
                            "sizes": [
                                "col-md-12"
                            ]
                        }
                    }
                ]
            },
            "rows": [
                {
                    "columns": [
                        {
                            ...parsed.Maps
                        }
                    ]
                }
            ]
        }
    }
}


const _hotelsTemplate = (data,slug,pageName) => {

    const parsedData = hotelsParser(data,slug,pageName)
    const hotels = hotelsData(parsedData)
    const jsonPath = path.join(__dirname, '../../', '/public/hotels/acquavista/data');
    fs.writeFile(`${jsonPath}/pages/${slug}.json`, JSON.stringify(hotels), 'utf8', (err) => {
        console.log("change data output FINISH")
        return (err) ? console.log(err) : console.log("The file pages was saved!");
    })
    return hotels
}

module.exports = {
    _hotelsTemplate: _hotelsTemplate
}