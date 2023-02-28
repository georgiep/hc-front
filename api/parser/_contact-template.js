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

const hotelParser = (data) => {


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
        text: data.description
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
            },{
                link: '',
                label: "Contact Us"
            }
        ]
    }

    return _hotelParseObj
}

const hotelData = (parsed) => {
    return {
        "idbName": `/pages/location`,
        "schema": "schema-contact",
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
                            ..._hotelParseObj.breadcrumbs,
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
                            "padding": "40px 0 80px 0",
                            "border": "0"
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
                            ...parsed._Commons_Text_order_1_row_0_col_0,
                            "css": {
                                "element": "div",
                                "class": "animation--up",
                                "color": "primary-dark",
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
                            "padding": "80px 0 120px 0",
                            "border": "0"
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
                            ...parsed._Commons_Text_order_1_row_0_col_0,
                            "css": {
                                "element": "div",
                                "class": "animation--up",
                                "color": "primary-dark",
                            }
                        }
                    ]
                }
            ]
        }
    }

}


const _contactTemplate = (data) => {

    const parsedData = hotelParser(data)
    const hotel = hotelData(parsedData)
    const jsonPath = path.join(__dirname, '../../', '/public/hotels/acquavista/data');

    fs.writeFile(`${jsonPath}/pages/contact.json`, JSON.stringify(hotel), 'utf8', (err) => {
        console.log("change data output FINISH")
        return (err) ? console.log(err) : console.log("The file pages was saved!");
    })

    return hotel
}

module.exports = {
    _contactTemplate: _contactTemplate
}