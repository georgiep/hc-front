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

const hotelParser = (data,rooms,id,fullSlug,label) => {


    const hotelLink = fullSlug.split("/", 2).join('/')

    _hotelParseObj._menu = {
        "menu": [
            {
                link: `/${hotelLink}`,
                label: "hotel",
                active: false
            },
            {
                link: `/${hotelLink}/rooms`,
                label: "rooms",
                active: true
            },
            {
                link: `/${hotelLink}/location`,
                label: "location",
                active: false
            },
            {
                link: `/${hotelLink}/facilities`,
                label: "facilities",
                active: false
            },
        ]
    }


    _hotelParseObj._roomLink = `/${hotelLink}/rooms`

    const previewText = `<div
             class="d-flex justify-content-between align-items-center">
              <span
            class="secondary-blue" >${data.small_info || ""}</span><br>
            <a class="" href="${data.book_now}">
                <button class="button-fill">BOOK NOW</button>
            </a>
        </div>`

    _hotelParseObj._Commons_Text_order_1_row_0_col_3 = {
        text: previewText
    }

    _hotelParseObj._HeroSliderWithBookingForm_Hero_oder_0_row_0_col_0 = {
        "items": data.slider_gallery ? data.slider_gallery.map(item => item.url.toString().replace('https://greece-hotel.info/admins/aquavistahotels/wp-content/uploads','https://code.rateparity.com/aquavistahotels.com')) : [],
        "heading": data.intro_text
    }


    _hotelParseObj._Commons_Text_order_1_row_0_col_0 = {
        text: data.title
    }

    _hotelParseObj._Commons_Text_order_1_row_0_col_1 = {
        text: data.description
    }


    _hotelParseObj._Gallery_Template2_order_3_row_0_col_0 = {
        items: data.gallery ? data.gallery.map(item => item.toString().replace('https://greece-hotel.info/admins/aquavistahotels/wp-content/uploads','https://code.rateparity.com/aquavistahotels.com')) : [],
    }

    _hotelParseObj._amenities = {
        text: data.amenities
    }

    _hotelParseObj._Gallery_Template2_order_4_row_0_col_0 = {
        items: rooms.reduce( (arr,item) => {
            if(item.id !== id){

                item.acf.image = item.acf.image.toString().replace('https://greece-hotel.info/admins/aquavistahotels/wp-content/uploads','https://code.rateparity.com/aquavistahotels.com')

                arr.push({...item.acf,link: {
                       "pathname": `/${fullSlug}${item.slug}`,
                       "api": "/pages/room/room1",
                       "text": "Explore"
                   },  description: item.acf.excerpt})
            }

            return arr
        } , []),
        link: {
            "pathname": `/${hotelLink}/rooms`,
            "api": "/pages/room/room1",
            "text": "Explore"
        }
    }

    rooms.map( item => {
        if(item.id === id){
            _hotelParseObj.slug = item.slug
        }
    })

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
                link: `/${fullSlug.split('/')[0]}/${fullSlug.split('/')[1]}`,
                label: fullSlug.split('/')[1].replace('-',' ').replace('-',' ')
            },
            {
                link: `/${fullSlug.split('/')[0]}/${fullSlug.split('/')[1]}/${fullSlug.split('/')[2]}`,
                label: fullSlug.split('/')[2].replace('-',' ').replace('-',' ').replace('-',' ').replace('-',' ').replace('-',' ').replace('-',' ').replace('-',' ').replace('-',' ')
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

    console.log(parsed.menu)

    return {
        "idbName": `/${parsed.slug}`,
        "schema": `schema-single-room`,
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
                                "col-md-12 no-transform animation--up"
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
                            "padding": "200px 0 0 0",
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
                            ...parsed._Commons_Text_order_1_row_0_col_0,
                            "css": {
                                "element": "div",
                                "class": "animation--up title-case-primary p-b-20",
                                "color": "primary-black",
                            }
                        },
                        {
                            ...parsed._Commons_Text_order_1_row_0_col_1,
                            "css": {
                                "element": "div",
                                "class": "animation--up main-text-body",
                                "color": "primary-black ",
                            }
                        },
                        {
                            ...parsed._Commons_Text_order_1_row_0_col_3,
                            "css": {
                                "element": "div",
                                "class": "animation--up main-text-body",
                                "color": "primary-black",
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
                            "padding": "0 0 60px 0",
                            "border": "0",
                            "margin": "0 auto"
                        },
                        "columns": {
                            "sizes": [
                                "col-md-12 p-0 animation--up",
                                "col-md-12 p-0 animation--up",
                                "col-md-12 p-0 three-col px-3 px-sm-0 animation--up"
                            ]
                        }
                    }
                ]
            },
            "rows": [
                {
                    "columns": [
                        {
                            "maxWidth": "100%",
                            "color": "#04456D",
                            "padding": "40px",
                            "margin": "0 auto"
                        },
                        {
                            text: "Amenities",
                            "css": {
                                "element": "div",
                                "class": "title-case-primary text-left p-b-20 animation--up",
                                "color": "primary-dark ",
                            }
                        },
                        {
                            ...parsed._amenities,
                            "icon": "/public/hotels/acquavista/svg/Plus.svg",
                            "css": {
                                "element": "div",
                                "class": "main-text-body animation--up",
                                "color": "primary-black"
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
                                "col-md-12 py-5 animation--up"
                            ]
                        }
                    }
                ]
            },
            "rows": [
                {
                    "columns": [
                        {
                            ...parsed._Gallery_Template2_order_3_row_0_col_0,
                            "css": {

                            }
                        }
                    ]
                }
            ]
        },
        "6": {
            "wrapper": {
                "fluid": true,
                "css": {
                    "border": "0",
                    "backgroundColor": "#FFFFFF",
                    ...(parsed._Gallery_Template2_order_4_row_0_col_0.items.length === 0 && { "display": "none" })
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
                                `col-md-12 animation--up`
                            ]
                        }
                    },
                    {
                        "css": {
                            "padding": "0 0 60px 0",
                            "border": "0",
                            "maxWidth": "1440px",
                            "margin": "0 auto"
                        },
                        "columns": {
                            "sizes": [
                                `col-md-12  animation--up`
                            ]
                        }
                    }
                ]
            },
            "rows": [
                {
                    "columns": [
                        {
                            "text": "Choose your favourite room",
                            "link": {
                                "pathname": `${parsed._roomLink}`,
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
                },
                {
                    "columns": [
                        {
                            "link": {
                                "pathname": `${parsed._roomLink}`,
                                "api": "/pages/room/room1"
                            },
                            ...parsed._Gallery_Template2_order_4_row_0_col_0,
                            "css": {
                                "title": {
                                    "element": "div",
                                    "class": "post-text-body animation--up",
                                    "color": "primary-dark"
                                },
                                "description": {
                                    "element": "div",
                                    "class": "post-text-body animation--up",
                                    "color": "primary-black"
                                },
                                "amenities": {
                                    "element": "div",
                                    "class": "promo-small-text animation--up",
                                    "color": "primary-black"
                                },
                                "link": {
                                    "element": "div",
                                    "class": "button-dark",
                                    "color": "primary-dark"
                                }
                            }
                        }
                    ]
                }
            ]
        },

    }

}


const _singlePostTypeRoomTemplate = (data,rooms,id,link,fullLink,fullItem,label) => {

    const parsedData = hotelParser(data,rooms,id,`${fullLink.description}/${fullLink.slug}/rooms/`,label)
    const hotel = hotelData(parsedData)
    const jsonPath = path.join(__dirname, '../../', '/public/hotels/acquavista/data');

    fs.writeFile(`${jsonPath}/pages/${fullLink.description}/${fullLink.slug}/rooms/${fullItem.slug}.json`, JSON.stringify(hotel), 'utf8', (err) => {
        console.log("change data output FINISH")
        return (err) ? console.log(err) : console.log("The file pages was saved!");
    })
    return hotel
}

module.exports = {
    _singlePostTypeRoomTemplate: _singlePostTypeRoomTemplate
}