const fs =require('fs');
const path = require("path");

const pageParseObj = {
    _Hero_HeroSliderWithBookingForm_order_0_row_0_col_0: {
        "items": "gallery",//slider_gallery
        "heading": "This is the intro Text",//intro_text
    },
    _SimplePromos_Template1_order_1_row_0_col_0: {
        "items": [
            {
                "svg": "https://greece-hotel.info/admins/aquavistahotels/wp-content/uploads/2022/07/bestPrice.svg",
                "text": "Best Price Guaranteed!",
                "width": "30px",
                "height": "30px"
            },
            {
                "svg": "https://greece-hotel.info/admins/aquavistahotels/wp-content/uploads/2022/07/bestPrice.svg",
                "text": "Best Price Guaranteed!",
                "width": "30px",
                "height": "30px"
            }
        ]
    },
    _Commons_Text_order_2_row_0_col_0: {
        "text": "Welcome To Aqua Vista Hotels",//'welcome_text',
    },
    _Commons_Text_order_2_row_2_col_0: {
        "text": "Welcome to a luxurious line-up of the most beautiful hotels; at Aqua Vista Hotels, we set a standard of our very own. Raising the bar globally with truly extraordinary properties, stick with us and we can guarantee a tailored trip that will transform all your dreams to memories…From romantic breaks in sun-soaked locations where the smallest details count, to ‘your-home-but-better’ suites and villas that offer private pools. And our handpicked spots tick off criteria on everyone’s wish list, with spectacular locations, first-class service and quintessential touches blending harmoniously.",
    },
    _DisplayPostTypes_Template8_order_3_row_2_col_0: {
        "items": [
            {
                "image": "/hotels/acquavista/images/santorini.jpg",
                "title": "Santorini",
                "link": {
                    "pathname": "/hotels-in-santorini",
                    "api": "/hotels-in-santorini",
                    "text": "Explore"
                }
            }
        ]
    }
}

let linkPost = {
    "pathname": "/accommodation/room1",
    "api": "/pages/room/room1",
    "text": "Explore"
}

const pageParser = (data) =>{
    pageParseObj._Hero_HeroSliderWithBookingForm_order_0_row_0_col_0 = {
        "items": data.slider_gallery.map(item => item.url),
        "heading": data.intro_text
    }
    pageParseObj._Commons_Text_order_2_row_0_col_0 = {
        "text": data.welcome_text
    }
    pageParseObj._Commons_Text_order_2_row_2_col_0 = {
        "text": data.welcome_description
    }
    pageParseObj._DisplayPostTypes_Template8_order_3_row_2_col_0 = {
        "items": data.select_destinations.map(item => {
            return {
                "link": {
                    "pathname": "/hotels-in-santorini",
                    "api": "/hotels-in-santorini",
                    "text": "Explore"
                },...item.select_destination.acf
            }
        })
    }

    pageParseObj.SEO = {
        "title": data.seo_title,
        "description": data.seo_description,
        "keywords": ""
    }

    return pageParseObj
}

const pageData = (parsed) => {
    return{
        "idbName": "/pages/destination-guide",
        "schema": "schema-destination-guide",
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
                            ...parsed._Hero_HeroSliderWithBookingForm_order_0_row_0_col_0,
                            "css": {
                                "heading": {
                                    "element": "div",
                                    "class": "title-case-hero text-uppercase animation--up",
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
                            ...parsed._SimplePromos_Template1_order_1_row_0_col_0,
                            "css": {
                                "element": "span",
                                "class": "promo-text-primary text-uppercase animation--up",
                                "color": "primary-white",
                                "maxWidth": "900px"
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
                            "padding": "80px 0 0 0",
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
                            ...parsed._Commons_Text_order_2_row_0_col_0,
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
                            ...parsed._Commons_Text_order_2_row_2_col_0,
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
                            "padding": "22px 0 40px 0",
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
                            ...parsed._DisplayPostTypes_Template8_order_3_row_2_col_0,
                            "css": {
                                "element": "span",
                                "class": "main-text-body animation--up",
                                "color": "primary-white"
                            }
                        }
                    ]
                }
            ]
        }
    }
}



const _destinationGuideTemplate = (data) => {

    const parsedData = pageParser(data)
    const homepage = pageData(parsedData)
    const jsonPath = path.join(__dirname, '../../', '/public/hotels/acquavista/data');

    fs.writeFile(`${jsonPath}/pages/destination-guide.json`, JSON.stringify(homepage), 'utf8', (err) => {
        console.log("change data output FINISH")
        return (err) ? console.log(err) : console.log("The file pages was saved!");
    })
    return homepage
}

module.exports = {
    _destinationGuideTemplate: _destinationGuideTemplate
}

