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

const hotelParser = (data,link,allData) => {

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
        "text": data.text || null
    }

    _hotelParseObj._Commons_Text_order_1_row_0_col_1 = {
        "text": data.description
    }

    _hotelParseObj._Tabs_Template1_order_2_row_0_col_0 = {
        "items": data.tabs,
        "heading": data.heading_tab || null
    }

    _hotelParseObj.imageList = {
        "items": data.image_list,
        "heading": data.image_heading
    }

    _hotelParseObj.SEO = {
        "title": data.seo_title,
        "description": data.seo_description,
        "keywords": ""
    }

    _hotelParseObj._openPopUp_0 = {
        "items": [],
        modal: {
            event: 'map',
            component: 'form'
        },
        link: {pathname: '/special-offers', api: ''}
    }


    _hotelParseObj.breadcrumbs = {
        items: [
            {
                link: '/',
                label: "AQUA VISTA HOTELS"
            },
            {
                link: '',
                label: allData.title.rendered.toLowerCase()
            }
        ]
    }

    _hotelParseObj.fullWidth = data.fullwidth


    return _hotelParseObj
}

const hotelData = (parsed) => {
    return {
        "idbName": `/pages/facilities`,
        "schema": 'schema-default',
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
                "fluid": parsed.fullWidth,
                "css": {
                    "border": "0",
                    "backgroundColor": "#FFFFFF"
                },
                "rows": [
                    {
                        "css": {
                            "padding": "40px 0 0 0",
                            "border": "0",
                            ...(!parsed._Commons_Text_order_1_row_0_col_0.text  && { "display": "none" })
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
                            "border": "0",
                            ...(!parsed._Commons_Text_order_1_row_0_col_0.text && { "display": "none" })
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
                            "padding": "0 0 40px 0",
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
                                "class": "title-case-primary text-uppercase text-left text-sm-center",
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
                                "class": "main-text-body",
                                "color": "primary-black",
                                "margin": "0 auto",
                                "padding": "0 0 0 0"
                            }
                        }
                    ]
                }
            ]
        },
        "3": {
            "wrapper": {
                "fluid": true,
                "css": {
                    "border": "0",
                    "backgroundColor": "#FFFFFF",
                    "padding": "80px 0 60px 0"
                },
                "rows": [
                    {
                        "css": {
                            "padding": "0 0 0 0",
                            "border": "0",
                            "maxWidth": "1440px",
                            "margin": "0 auto"
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
                            ...parsed._Tabs_Template1_order_2_row_0_col_0,
                            "css": {
                                "title": {
                                    "element": "div",
                                    "class": "promo-text-primary",
                                    "color": "primary-dark"
                                },
                                "description": {
                                    "element": "div",
                                    "class": "promo-heading-text",
                                    "color": "primary-black"
                                },
                                "heading": {
                                    "element": "div",
                                    "class": "heading-text-menu",
                                    "color": "primary-dark"
                                }
                            }
                        }
                    ]
                }
            ]
        },
        "4": {
            "wrapper": {
                "fluid": true,
                "css": {
                    "border": "0",
                    "backgroundColor": "#FFFFFF",
                    "padding": "0 0 60px 0"
                },
                "rows": [
                    {
                        "css": {
                            "padding": "0 0 0 0",
                            "border": "0",
                            "maxWidth": "1440px",
                            "margin": "0 auto"
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
                            ...parsed.imageList,
                            "css": {
                                "element": "div",
                                "class": "title-case-primary text-uppercase text-center",
                                "color": "primary-white",
                                "heading": {
                                    "element": "div",
                                    "class": "title-case-primary",
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
                            ...parsed._openPopUp_0,
                            "css": {
                                "element": "div",
                                "class": "title-case-primary text-uppercase text-center",
                                "color": "primary-white"
                            }
                        }
                    ]
                }
            ]
        }

    }

}


const _defaultTemplate = (data,link,allData) => {

    const breakpoint = /aquavistahotels/
    const splitted = link.split(breakpoint)

    const parsedData = hotelParser(data,splitted[1],allData)
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
    _defaultTemplate: _defaultTemplate
}