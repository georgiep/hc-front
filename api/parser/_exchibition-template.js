const fs =require('fs');
const path = require("path");

const homepageParseObj = {
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
    _Commons_Text_order_3_row_0_col_0: {
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
    }//third_post_selection:


}

let linkPost = {
    "pathname": "/blog/post-1",
    "api": "/blog/post-1",
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


    homepageParseObj._DisplayPostTypes_Template8_order_1_row_2_col_0 = {
        "items": data.select_exchibition_posts.map(item => {
            // console.log(`/blog/${item.select_blog_post.post_name}`)

            item.select_exchibition_post.acf.image = {
                src: item.select_exchibition_post.acf.image,
                alt: 'alt images'
            }

            return {
                link: {...linkPost,pathname: `/exhibitions/${item.select_exchibition_post.post_name}`},...item.select_exchibition_post.acf,description: item.select_exchibition_post.acf.excerpt
            }
        })
    }

    homepageParseObj.SEO = {
        "title": data.seo_title,
        "description": data.seo_description,
        "keywords": ""
    }


    homepageParseObj.breadcrumbs = {
        items: [
            {
                link: '/',
                label: "Aqua Vista"
            },
            {
                link: '',
                label: 'exhibitions'
            }
        ]
    }

    return homepageParseObj
}

const homepageData = (parsed) => {
    return{
        "idbName": "/pages/homepage",
        "schema": "schema-exhibitions",
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
                            "padding": "40px 0 40px 0",
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
                            ...parsed._DisplayPostTypes_Template8_order_1_row_2_col_0,
                            "css": {
                                "title":{
                                    "element": "div",
                                    "class": "title-case-secondary animation--up",
                                    "color": "primary-dark"
                                },
                                "description":{
                                    "element": "div",
                                    "class": "main-text-body animation--up",
                                    "color": "primary-black"
                                },
                                "element": "div",
                                "class": "title-case-primary text-uppercase animation--up",
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
                "rows": [
                    {
                        "css": {
                            "padding": "80px 0",
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
                            ...parsed._DisplayPostTypes_Template8_order_1_row_2_col_0,
                            "css": {
                                "title":{
                                    "element": "div",
                                    "class": "title-case-secondary v",
                                    "color": "primary-white"
                                },
                                "description":{
                                    "element": "div",
                                    "class": "main-text-body animation--up",
                                    "color": "primary-black"
                                },
                                "element": "div",
                                "class": "title-case-primary text-uppercase animation--up",
                                "color": "primary-white"
                            }
                        }
                    ]
                }
            ]
        }
    }
}



const _exhibitionTemplate = (data) => {

    const parsedData = homepageParser(data)
    const homepage = homepageData(parsedData)
    const jsonPath = path.join(__dirname, '../../', '/public/hotels/acquavista/data');

    fs.writeFile(`${jsonPath}/pages/exhibitions.json`, JSON.stringify(homepage), 'utf8', (err) => {
        console.log("change data output FINISH")
        return (err) ? console.log(err) : console.log("The file pages was saved!");
    })
    return homepage
}

module.exports = {
    _exhibitionTemplate: _exhibitionTemplate
}

