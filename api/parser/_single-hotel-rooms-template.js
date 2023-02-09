const fs =require('fs');
const path = require("path");

const _hotelParseObj = {
    _HeroSliderWithBookingForm_Hero_oder_0_row_0_col_0: {

    },
    _Carousel_Template3_order_1_row_0_col_0: {

    },
    _Tabs_Template1_order_2_row_0_col_0: {

    },
    _Commons_Text_order_3_row_0_col_0: {

    },
    _Commons_Text_order_3_row_0_col_1: {

    },
    _ImageList_Template1_order_3_row_1_col_0:{

    }

}

let linkPost = {
    "pathname": "/hotels-in-santorini/dreams-luxury-suites/rooms/dream-1",
    "api": "/pages/room/room1",
    "text": "Explore"
}

const hotelParser = (data,link,label) => {

    const hotelLink = link.split("/", 3).join('/')

    _hotelParseObj._menu = {
        "menu": [
            {
                link: hotelLink,
                label: "hotel",
                active: false
            },
            {
                link: `${link}`,
                label: "rooms",
                active: true
            },
            {
                link: `${hotelLink}/location`,
                label: "location",
                active: false
            },
            {
                link: `${hotelLink}/facilities`,
                label: `facilities`,
                active: false
            },
        ]
    }

    _hotelParseObj._HeroSliderWithBookingForm_Hero_oder_0_row_0_col_0 = {
        "items": data.slider_gallery ? data.slider_gallery.map(item => item.url.toString().replace('https://greece-hotel.info/admins/aquavistahotels/wp-content/uploads','https://code.rateparity.com/aquavistahotels.com')) : [],
        "heading": data.intro_text
    }

    _hotelParseObj._Carousel_Template3_order_2_row_0_col_0 = {
        "items": data.select_rooms.map(item => {
            // console.log(item)
            item.acf.image = item.acf.image.toString().replace('https://greece-hotel.info/admins/aquavistahotels/wp-content/uploads','https://code.rateparity.com/aquavistahotels.com')

            return {
                link:{
                    "pathname": `${link}${item.slug}`,
                    "api": "/pages/room/room1",
                    "text": "Explore"
                },
                ...item.acf,
                description: item.acf.excerpt,
                amenities: item.acf.amenities_with_icons
            }
        })
    }
    _hotelParseObj._Carousel_Template3_order_3_row_0_col_0 = {
        "items": data.select_offers.map(item => {
            item.acf.image = item.acf.image.toString().replace('https://greece-hotel.info/admins/aquavistahotels/wp-content/uploads','https://code.rateparity.com/aquavistahotels.com')

            return {
                link: {
                    "pathname": `/special-offers`,
                    "api": "/pages/room/room1",
                    "text": "Explore"
                },
                ...item.acf,
            }
        })
    }

    _hotelParseObj._Commons_Text_order_1_row_0_col_0 = {
        text: data.welcome_promo_title
    }
    _hotelParseObj._Commons_Text_order_1_row_0_col_1 = {
        text: data.welcome_promo_description
    }

    _hotelParseObj.SEO = {
        "title": data.seo_title,
        "description": data.seo_description,
        "keywords": ""
    }

    _hotelParseObj.breadcrumbs = {
        items: [
            {
                link: '/',
                label: "Aqua Vista"
            },
            {
                link: `/${link.split('/')[1]}`,
                label: link.split('/')[1].replace('-',' ').replace('-',' ')
            },
            {
                link: `/${link.split('/')[1]}/${link.split('/')[2]}`,
                label: link.split('/')[2].replace('-',' ').replace('-',' ').replace('-',' ').replace('-',' ').replace('-',' ').replace('-',' ').replace('-',' ').replace('-',' ')
            },
            {
                link: '',
                label: label
            }
        ]
    }

    return _hotelParseObj
}

const hotelData = (parsed) => {
    return {
        "idbName": "/pages/dreams-luxury-suites-rooms",
        "schema": "schema-hotel-rooms",
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
                "rows": [
                    {
                        "css": {
                            "padding": "80px 0 0 0",
                            "border": "0",
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
                "fluid": true,
                "css": {
                    "border": "0",
                    "backgroundColor": "#FFFFFF"
                },
                "rows": [
                    {
                        "css": {},
                        "columns": {
                            "sizes": [
                                "col-md-12 no-transform"
                            ]
                        }
                    }
                ]
            },
            "rows": [
                {
                    "columns": [
                        {
                            ...parsed._menu,
                            "link": {
                                "pathname": "/dreams-luxury-suites",
                                "api": "/pages/room/room1"
                            },
                            "css": {
                                "element": "div",
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
                            "padding": "280px 0 0 0",
                            "border": "0"
                        },
                        "columns": {
                            "sizes": [
                                "col-md-12 animation--up"
                            ]
                        }
                    },
                    {
                        "css": {
                            "padding": "0",
                            "border": "0"
                        },
                        "columns": {
                            "sizes": [
                                "col-md-6 animation--up",
                                "col-md-6 animation--up"
                            ]
                        }
                    },
                    {
                        "css": {
                            "padding": "0 0 0 0",
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
                            ...parsed._Commons_Text_order_1_row_0_col_0,
                            "css": {
                                "element": "div",
                                "class": "title-case-primary text-uppercase text-center animation--up",
                                "color": "primary-dark",
                                "maxWidth": "512px",
                                "margin": "0 auto",
                                "padding": "0 0 0 0"
                            }
                        }
                    ]
                },
                {
                    "columns": [
                        {},
                        {
                            "maxWidth": "367px",
                            "color": "#04456D",
                            "padding": "40px",
                            "margin": "0 auto"
                        }
                    ]
                },
                {
                    "columns": [
                        {
                            ...parsed._Commons_Text_order_1_row_0_col_1,
                            "css": {
                                "element": "div",
                                "class": "main-text-body animation--up",
                                "color": "primary-black",
                                "margin": "0 auto",
                                "padding": "0 0 0 0"
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
                            ...parsed._Carousel_Template3_order_2_row_0_col_0,
                            "css": {
                                "title": {
                                    "element": "div",
                                    "class": "title-case-secondary animation--up",
                                    "color": "primary-dark"
                                },
                                "description": {
                                    "element": "div",
                                    "class": "secondary-post-text animation--up",
                                    "color": "primary-black"
                                },
                                "amenities": {
                                    "element": "div",
                                    "class": "promo-small-text animation--up",
                                    "color": "primary-black"
                                },
                                "link": {
                                    "element": "button",
                                    "class": "button-fill animation--up",
                                    "color": "primary-dark"
                                }
                            }
                        }
                    ]
                }
            ]
        },
        "5": {
            "wrapper": {
                "fluid": false,
                "css": {
                    "border": "0",
                    "backgroundColor": "#FFFFFF",
                    ...(parsed._Carousel_Template3_order_3_row_0_col_0.items.length === 0 && { "display": "none" })
                },
                "rows": [
                    {
                        "css": {
                            "padding": "0",
                            "border": "0"
                        },
                        "columns": {
                            "sizes": [
                                "col-md-12 animation--up"
                            ]
                        }
                    },
                    {
                        "css": {
                            "padding": "0",
                            "border": "0"
                        },
                        "columns": {
                            "sizes": [
                                "col-md-6 animation--up",
                                "col-md-6 animation--up"
                            ]
                        }
                    },
                    {
                        "css": {
                            "padding": "0 0 80px 0",
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
                            "text": "special offer",
                            "css": {
                                "element": "div",
                                "class": "title-case-primary text-uppercase text-center animation--up",
                                "color": "primary-dark",
                                "maxWidth": "250px",
                                "margin": "0 auto",
                                "padding": "0 0 0 0"
                            }
                        }
                    ]
                },
                {
                    "columns": [
                        {},
                        {
                            "maxWidth": "250px",
                            "color": "#04456D",
                            "padding": "40px",
                            "margin": "0 auto"
                        }
                    ]
                },
                {
                    "columns": [
                        {
                            ...parsed._Carousel_Template3_order_3_row_0_col_0,
                            "css": {
                                "element": "div",
                                "class": "post-text-body",
                                "color": "primary-white"
                            }
                        }
                    ]
                }
            ]
        },
    }

}


const _singleHotelRoomTemplate = (data,link,label) => {

    const breakpoint = /aquavistahotels/
    const splitted = link.split(breakpoint)

    const parsedData = hotelParser(data,splitted[1],label)
    const hotel = hotelData(parsedData)

    const jsonPath = path.join(__dirname, '../../', '/public/hotels/acquavista/data');

    const dir = `${jsonPath}/pages${splitted[1]}`;
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, {
            recursive: true
        });
    }

    fs.writeFile(`${dir.slice(0, dir.lastIndexOf('/'))}.json`, JSON.stringify(hotel), 'utf8', (err) => {
        console.log("change data output FINISH")
        return (err) ? console.log(err) : console.log("The file pages was saved!");
    })
    return hotel
}

module.exports = {
    _singleHotelRoomTemplate: _singleHotelRoomTemplate
}