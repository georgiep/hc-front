const fs =require('fs');
const path = require('path');

const homepageParseObj = {
    _Hero_HeroSliderWithBookingForm_order_0_row_0_col_0: {
        "items": "gallery",//slider_gallery
        "heading": "This is the intro Text",//intro_text
    },
    _SimplePromos_Template1_order_1_row_0_col_0: {
        "items": [
            {
                "svg": "https://code.rateparity.com/aquavistahotels.com/2022/07/bestPrice.svg",
                "text": "Best Price Guaranteed!",
                "width": "30px",
                "height": "30px"
            },
            {
                "svg": "https://code.rateparity.com/aquavistahotels.com/2022/07/book-with-us.svg",
                "text": "No booking fees",
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
        //'welcome_description',
    },
    _Commons_Text_order_3_row_0_col_0: {
        "text": "Welcome to a luxurious line-up of the most beautiful hotels; at Aqua Vista Hotels, we set a standard of our very own. Raising the bar globally with truly extraordinary properties, stick with us and we can guarantee a tailored trip that will transform all your dreams to memories…From romantic breaks in sun-soaked locations where the smallest details count, to ‘your-home-but-better’ suites and villas that offer private pools. And our handpicked spots tick off criteria on everyone’s wish list, with spectacular locations, first-class service and quintessential touches blending harmoniously.",
        //'welcome_description',
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
    },
    _Commons_Text_order_4_row_0_col_0:{
        "text": "special offer",//second_post_title:
    },
    _ShowOffers_Template2_order_4_row_2_col_2:{
        items:[
            {
                "image": "/hotels/acquavista/images/special-offer01.jpg",
                "title": "Free Room Upgrade",
                "description": "holiday and get a free room upgrade for a stay between 21st of April until 21st of May 2021",
                "link": {
                    "pathname": "/accommodation/room1",
                    "api": "/pages/room/room1",
                    "text": "Book now"
                }
            },
        ]
    },//second_post_selection:
    _Destinations_Template1_order_5_row_0_col_0:{
        items:[
            {
                "image": "/hotels/acquavista/images/special-offer01.jpg",
                "title": "Free Room Upgrade",
                "description": "holiday and get a free room upgrade for a stay between 21st of April until 21st of May 2021",
                "link": {
                    "pathname": "/accommodation/room1",
                    "api": "/pages/room/room1",
                    "text": "Book now"
                }
            },
        ]
    }

}

let linkPost = {
    "pathname": "/accommodation/room1",
    "api": "/pages/room/room1",
    "text": "Explore"
}

const homepageParser = (data) =>{

    homepageParseObj._Hero_HeroSliderWithBookingForm_order_0_row_0_col_0 = {
        "items": data.slider_gallery.map(item => {
            return{
                "src":item.url.toString().replace('https://greece-hotel.info/admins/aquavistahotels/wp-content/uploads','https://code.rateparity.com/aquavistahotels.com'),
                "alt": 'alt hotel image'
            }
        }),
        "heading": data.intro_text
    }
    homepageParseObj._Commons_Text_order_2_row_0_col_0 = {
        "text": data.welcome_text
    }
    homepageParseObj._Commons_Text_order_2_row_2_col_0 = {
        "text": data.welcome_description
    }
    homepageParseObj._Commons_Text_order_3_row_0_col_0 = {
        "text": data.first_post_title
    }
    homepageParseObj._DisplayPostTypes_Template8_order_3_row_2_col_0 = {
        "items": data.first_post_selection.map(item => {

            item.select_post.acf.image = {
                src: item.select_post.acf.image.toString().replace('https://greece-hotel.info/admins/aquavistahotels/wp-content/uploads','https://code.rateparity.com/aquavistahotels.com'),
                alt: 'alt images'
            }

            return {
                "link": {
                    "pathname": `/hotels-in-${item.select_post.post_name}`,
                    "api": `/hotels-in-${item.select_post.post_name}`,
                    "text": "Explore"
                },...item.select_post.acf
            }
        })
    }
    homepageParseObj._Commons_Text_order_4_row_0_col_0 = {
        "text": data.second_post_title
    }
    // homepageParseObj._ShowOffers_Template2_order_4_row_2_col_2 = {
    //     "items": data.second_post_selection.map(item => {
    //
    //         //item.select_post.acf.image = item.select_post.acf.image.toString().replace('https://greece-hotel.info/admins/aquavistahotels/wp-content/uploads','https://code.rateparity.com/aquavistahotels.com')
    //
    //         item.select_post.acf.image = {
    //             src: item.select_post.acf.image.toString().replace('https://greece-hotel.info/admins/aquavistahotels/wp-content/uploads','https://code.rateparity.com/aquavistahotels.com'),
    //             alt: 'alt images'
    //         }
    //         return {
    //             link: {
    //                 pathname: item.select_post.acf.book_now
    //             },...item.select_post.acf
    //         }
    //     })
    // }
    homepageParseObj._ShowOffers_Template2_order_4_row_2_col_2 = {


        "items": data.second_post_selection.map(item => {

           // item.select_post.acf.image = item.select_post.acf.image.toString().replace('https://greece-hotel.info/admins/aquavistahotels/wp-content/uploads','https://code.rateparity.com/aquavistahotels.com')

            item.select_post.acf.image = {
                src: item.select_post.acf.image.toString().replace('https://greece-hotel.info/admins/aquavistahotels/wp-content/uploads','https://code.rateparity.com/aquavistahotels.com'),
                alt: 'alt images'
            }
            return {
                link: {
                    pathname: item.select_post.acf.book_now
                },...item.select_post.acf
            }
        }),
        link: {pathname: '/special-offers', api: ''}
    }

    data.third_post_selection.acf.image = {
        src: data.third_post_selection.acf.image.toString().replace('https://greece-hotel.info/admins/aquavistahotels/wp-content/uploads','https://code.rateparity.com/aquavistahotels.com'),
        alt: "alt image"
    }

    homepageParseObj._Destinations_Template1_order_5_row_0_col_0 = {...data.third_post_selection.acf,link:{pathname: '/destination-guide-santorini', api: ''} }

    homepageParseObj.SEO = {
        "title": data.seo_title,
        "description": data.seo_description,
        "keywords": ""
    }

    homepageParseObj._openPopUp_0 = {
        "items": [],
        modal: {
          event: 'openpopup_0',
          component: 'form'
        },
        link: {pathname: '/special-offers', api: ''}
    }
    return homepageParseObj
}

const homepageData = (parsed) => {

    return{
        "idbName": "/pages/homepage",
        "schema": "schema-homepage",
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
                                "col-md-6  animation--up",
                                "col-md-6  animation--up"
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
                                "col-md-12  pb-sm-3 pb-xl-5 animation--up"
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
                                "class": "title-case-primary text-uppercase text-left text-sm-center animation--up",
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
                            "padding": "40px 0 0 0",
                            "border": "0"
                        },
                        "columns": {
                            "sizes": [
                                "col-md-12  animation--up"
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
                            "padding": "0",
                            "border": "0"
                        },
                        "columns": {
                            "sizes": [
                                "col-md-12  pb-sm-3 pb-xl-5 animation--up"
                            ]
                        }
                    }
                ]
            },
            "rows": [
                {
                    "columns": [
                        {
                            ...parsed._Commons_Text_order_3_row_0_col_0,
                            "css": {
                                "element": "div",
                                "class": "title-case-primary text-uppercase text-left text-sm-center animation--up",
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
                            "padding": "40px 0 0 0",
                            "border": "0"
                        },
                        "columns": {
                            "sizes": [
                                "col-md-12  animation--up"
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
                                "col-md-6  animation--up",
                                "col-md-6  animation--up"
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
                                "col-md-12  pb-sm-3 pb-xl-5 animation--up"
                            ]
                        }
                    }
                ]
            },
            "rows": [
                {
                    "columns": [
                        {
                            ...parsed._Commons_Text_order_4_row_0_col_0,
                            "css": {
                                "element": "div",
                                "class": "title-case-primary text-uppercase text-left text-sm-center animation--up",
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
                            ...parsed._ShowOffers_Template2_order_4_row_2_col_2,
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
                            "padding": "40px 0 80px 0",
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
                            ...parsed._Destinations_Template1_order_5_row_0_col_0,
                            "css": {
                                "element": "div",
                                "class": "title-case-primary text-uppercase text-center animation--up",
                                "color": "primary-white"
                            }
                        }
                    ]
                }
            ]
        },
        "6": {
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
                            "item": "elfsight-app-bf9d154d-2667-4d93-a05b-51d0132c6d90",
                            "css": {
                                "element": "div",
                                "class": "title-case-primary text-uppercase text-center animation--up",
                                "color": "primary-white"
                            }
                        }
                    ]
                }
            ]
        }
    }
}



const _homepageTemplate = (data) => {

    const parsedData = homepageParser(data)
    const homepage = homepageData(parsedData)
    const jsonPath = path.join(__dirname, '../../', '/public/hotels/acquavista/data');

    fs.writeFile(`${jsonPath}/pages/homepage.json`, JSON.stringify(homepage), 'utf8', (err) => {
        console.log("change data output FINISH")
        // console.log('this is the home')
        return (err) ? console.log(err) : console.log("The file pages was saved!");
    })
    return homepage
}

module.exports = {
    _homepageTemplate: _homepageTemplate
}

