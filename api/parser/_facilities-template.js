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
    "pathname": "/accommodation/room1",
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
                link: `${hotelLink}/rooms`,
                label: "rooms",
                active: false
            },
            {
                link: `${hotelLink}/location`,
                label: "location",
                active: false
            },
            {
                link: `${link}`,
                label: "facilities",
                active: true
            },
        ]
    }


    _hotelParseObj._HeroSliderWithBookingForm_Hero_oder_0_row_0_col_0 = {
        "items": data.slider_gallery.map(item => {
            return{
                "src":item.url.toString().replace('https://greece-hotel.info/admins/aquavistahotels/wp-content/uploads','https://code.rateparity.com/aquavistahotels.com'),
                "alt": 'alt hotel image'
            }
        }),
        "heading": data.intro_text
    }


    _hotelParseObj._Commons_Text_order_1_row_0_col_0 = {
       "text": data.text
    }

    _hotelParseObj._Commons_Text_order_1_row_0_col_1 = {
        "text": data.description
    }

    _hotelParseObj._Tabs_Template1_order_2_row_0_col_0 = {
        "items": data.tabs
    }

    _hotelParseObj._Tabs_Template1_order_2_row_0_col_0_image = data.image

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
        "idbName": `/pages/facilities`,
        "schema": 'schema-facilities',
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
                                "col-md-12 no-transform white-links  "
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
        "2": {
            "wrapper": {
                "fluid": true,
                "class": "position-relative opacity-bg",
                "css": {
                    "border": "0",
                    "backgroundColor": "#FFFFFF",
                    "backgroundImage": `url(${parsed._Tabs_Template1_order_2_row_0_col_0_image})`,
                    "backgroundSize": "cover",
                    "backgroundPosition": "center",
                    "padding": "80px 0 60px 0"
                },
                "rows": [
                    {
                        "css": {
                            "padding": "80px 0 60px 0",
                            "border": "0",
                            "maxWidth": "1440px",
                            "margin": "0 auto"
                        },
                        "columns": {
                            "sizes": [
                                "col-md-12  animation--up",
                                "col-md-12  animation--up"
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
                                "class": "title-case-primary text-uppercase text-center my-4",
                                "color": "primary-white"
                            }
                        },
                        {
                            ...parsed._Commons_Text_order_1_row_0_col_1,
                            "css": {
                                "element": "div",
                                "class": "main-text-body text-center",
                                "color": "primary-white"
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
                "class": "d-none d-md-block",
                "rows": [
                    {
                        "css": {
                            "padding": "80px 0 0 0",
                            "border": "0",
                        },
                        "columns": {
                            "sizes": [
                                "col-md-12  animation--up"
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
        "4": {
            "wrapper": {
                "fluid": false,
                "css": {
                    "border": "0",
                    "backgroundColor": "#FFFFFF",
                    "padding": "80px 0 60px 0"
                },
                "rows": [
                    {
                        "css": {
                            "padding": "0 0 60px 0",
                            "border": "0",
                            "maxWidth": "1440px",
                            "margin": "0 auto"
                        },
                        "columns": {
                            "sizes": [
                                "col-md-12  animation--up"
                            ]
                        }
                    }
                ]
            },
            "rows": [
                {
                    "columns": [
                        {
                            ...parsed._Tabs_Template1_order_2_row_0_col_0,
                            "css": {
                                "title": {
                                    "element": "div",
                                    "class": "promo-text-primary animation--up",
                                    "color": "primary-dark"
                                },
                                "description": {
                                    "element": "div",
                                    "class": "promo-heading-text animation--up",
                                    "color": "primary-black"
                                }
                            }
                        }
                    ]
                }
            ]
        },
        "5": {
            "wrapper": {
                "fluid": true,
                "css": {
                    "border": "0",
                    "backgroundColor": "#04456D"
                },
                "rows": [
                    {
                        "css": {
                            "padding": "80px 0 60px 0",
                            "border": "0",
                            "maxWidth": "1440px",
                            "margin": "0 auto"
                        },
                        "columns": {
                            "sizes": [
                                "col-md-12  animation--up"
                            ]
                        }
                    }
                ]
            },
            "rows": [
                {
                    "columns": [
                        {
                            "text": "MORE HOTELS",
                            "link": {
                                "pathname": "/dreams-luxury-suites",
                                "api": "/pages/room/room1"
                            },
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
                }
            ]
        }
    }

}


const _facilitiesTemplate = (data,link,label) => {

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
    _facilitiesTemplate: _facilitiesTemplate
}