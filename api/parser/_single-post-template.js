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
    "pathname": "/dream-1",
    "api": "/pages/room/room1",
    "text": "Explore"
}

const hotelParser = (data,posts,id,folder,label) => {

    _hotelParseObj._Commons_Image_oder_0_row_0_col_0 = {
        image: data.image && data.image.toString().replace('https://greece-hotel.info/admins/aquavistahotels/wp-content/uploads','https://code.rateparity.com/aquavistahotels.com'),
        layout: 'fill',
        objectFit: 'cover',
        objectPosition: 'center',
        width: '100%',
        height: '479px',
        // center: true,
        type: 'absolute'
    }

    _hotelParseObj._Commons_Text_oder_1_row_0_col_0 = {
        text: data.description
    }

    _hotelParseObj._Commons_Text_oder_2_row_0_col_0 = {
        text: data.title
    }

    let items = []

    posts.map( item => {
        if(item.id === id){
            _hotelParseObj.slug = item.slug
        }
        items.push({...item.acf,link:{
                "pathname": `/${folder}/${item.slug}`,
                "api": "/pages/room/room1",
                "text": "Explore"
            },description: item.acf.excerpt})
    })


    _hotelParseObj._DisplayPostTypes_Template8_order_1_row_2_col_0 = {
        "items":  items
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
                link: `/${folder}`,
                label: folder
            },
            {
                link: '',
                label: label
            }
        ]
    }
    // console.log(_hotelParseObj._Gallery_Template2_order_4_row_0_col_0)

    return _hotelParseObj
}

const hotelData = (parsed) => {
    return {
        "idbName": `${parsed.slug}`,
        "schema": `schema-single-post`,
        "SEO": {...parsed.SEO},
        "0": {
            "wrapper": {
                "fluid": false,
                "css": {
                    "border": "0",
                    "backgroundColor": "#FFFFFF"
                },
                "rows": [
                    {
                        "css": {
                            "padding": "100px 0",
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
                            ...parsed._Commons_Image_oder_0_row_0_col_0,
                            "css": {
                                "heading": {
                                    "element": "div",
                                    "class": "title-case-primary text-uppercase ",
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
                            "padding": "0 0 40px 0",
                            "border": "0",
                        },
                        "columns": {
                            "sizes": [
                                "col-md-12 "
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
                            "padding": "0 0 80px 0",
                            "border": "0"
                        },
                        "columns": {
                            "sizes": [
                                "col-md-12 animation--up",
                                "col-md-12 animation--up",
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
                            ...parsed._Commons_Text_oder_2_row_0_col_0,
                            "css": {
                                "element": "div",
                                "class": "title-case-primary",
                                "color": "primary-dark",
                                "heading": {
                                    "element": "div",
                                    "class": "title-case-primary animation--up",
                                    "color": "primary-dark"
                                }
                            }
                        },
                        {
                            "maxWidth": "100%",
                            "color": "#04456D",
                            "padding": "40px",
                            "margin": "0 auto"
                        },
                        {
                            ...parsed._Commons_Text_oder_1_row_0_col_0,
                            "css": {
                                "element": "div",
                                "class": "main-text-body",
                                "color": "primary-black",
                                "heading": {
                                    "element": "div",
                                    "class": "main-text-body animation--up",
                                    "color": "primary-white"
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
                            "padding": "80px 0",
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
                            ...parsed._DisplayPostTypes_Template8_order_1_row_2_col_0,
                            "css": {
                                "title":{
                                    "element": "div",
                                    "class": "title-case-secondary animation--up",
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


const _singlePostTemplate = (data,posts,id,folder,label) => {

    const parsedData = hotelParser(data,posts,id,folder,label)
    const hotel = hotelData(parsedData)
    const jsonPath = path.join(__dirname, '../../', '/public/hotels/acquavista/data');

    fs.writeFile(`${jsonPath}/pages/${folder}/${hotel.idbName}.json`, JSON.stringify(hotel), 'utf8', (err) => {
        console.log("change data output FINISH")
        return (err) ? console.log(err) : console.log("The file pages was saved!");
    })
    return hotel
}

module.exports = {
    _singlePostTemplate: _singlePostTemplate
}