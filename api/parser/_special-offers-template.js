const fs =require('fs');
const path = require("path");

const specialOffersParseObj = {
    _HeroSliderWithBookingForm_Hero_oder_0_row_0_col_0: {

    },
    _ShowOffers_Template2_order_1_row_0_col_0: {

    },

}


const offersParser = (data) => {
    specialOffersParseObj._Hero_HeroSliderWithBookingForm_order_0_row_0_col_0 = {
        "items": data.slider_gallery.map(item => item.url.toString().replace('https://greece-hotel.info/admins/aquavistahotels/wp-content/uploads','https://code.rateparity.com/aquavistahotels.com')),
        "heading": data.intro_text
    }
    specialOffersParseObj._ShowOffers_Template2_order_1_row_0_col_0 = {
        "items": data.posts.map(item => {
            item.select_post.acf.image = item.select_post.acf.image.toString().replace('https://greece-hotel.info/admins/aquavistahotels/wp-content/uploads','https://code.rateparity.com/aquavistahotels.com')
            return {
                link: {
                    pathname: item.select_post.acf.book_now
                },...item.select_post.acf
            }
        })
    }

    specialOffersParseObj.SEO = {
        "title": data.seo_title,
        "description": data.seo_description,
        "keywords": ""
    }

    specialOffersParseObj.breadcrumbs = {
        items: [
            {
                link: '/',
                label: "Aqua Vista"
            },{
                link: '',
                label: "Special Offers"
            }
        ]
    }

    return specialOffersParseObj
}

const specialOffersData = (parsed) => {
    return {
        "idbName": "/pages/special-offers",
        "schema": "schema-special-offers",
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
                            "padding": "80px 0 40px 0",
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
                            ...specialOffersParseObj.breadcrumbs,
                            "css": {
                                "element": "div",
                                "class": "secondary-post-text animation--up",
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
                            "padding": "80px 0 60px 0",
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
                            ...parsed._ShowOffers_Template2_order_1_row_0_col_0,
                            "css": {
                                "element": "div",
                                "class": "post-text-body animation--up",
                                "color": "primary-white"
                            }
                        }
                    ]
                }
            ]
        }
    }
}


const _specialOffersTemplate = (data) => {

    const parsedData = offersParser(data)
    const special_offers = specialOffersData(parsedData)
    const jsonPath = path.join(__dirname, '../../', '/public/hotels/acquavista/data');

    fs.writeFile(`${jsonPath}/pages/special-offers.json`, JSON.stringify(special_offers), 'utf8', (err) => {
        console.log("change data output FINISH")
        return (err) ? console.log(err) : console.log("The file pages was saved!");
    })
    return special_offers
}

module.exports = {
    _specialOffersTemplate: _specialOffersTemplate
}