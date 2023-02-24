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
    "text": "Explore",
}

const hotelParser = (data,link,label) => {

    _hotelParseObj._menu = {
        "menu": [
            {
                link: link,
                label: "hotel",
                active: true
            },
            {
                link: `${link}rooms`,
                label: "rooms",
                active: false
            },
            {
                link: `${link}location`,
                label: "location",
                active: false
            },
            {
                link: `${link}facilities`,
                label: "facilities",
                active: false
            },
            // {
            //     link: `${link}reviews`,
            //     label: "reviews",
            //     active: false
            // },
        ]
    }

    _hotelParseObj._HeroSliderWithBookingForm_Hero_oder_0_row_0_col_0 = {
        "items": data.slider_gallery.map(item => {
            return{
                "src":item.url.toString().replace('https://greece-hotel.info/admins/aquavistahotels/wp-content/uploads','https://code.rateparity.com/aquavistahotels.com'),
                "alt": 'alt hotel image'
            }
        }),
        "heading": data.intro_text,
        "showGallery": true
    }

    _hotelParseObj._Carousel_Template3_order_2_row_0_col_0 = {
        "items": data.select_rooms.map(item => {

            item.acf.image = {
                src: item.acf.image.toString().replace('https://greece-hotel.info/admins/aquavistahotels/wp-content/uploads','https://code.rateparity.com/aquavistahotels.com'),
                alt: "alt image"
            }

            item.acf.amenities_with_icons = item.acf.amenities_with_icons.map(item=> {
                item.icon = item.icon.toString().replace('https://greece-hotel.info/admins/aquavistahotels/wp-content/uploads','https://code.rateparity.com/aquavistahotels.com')
                return item
            })

            return {
                ...item.acf,
                description: item.acf.excerpt,
                link: {
                    "pathname": `${link}rooms/${item.slug}`,
                    "api": "/pages/room/room1",
                    "text": "Explore"
                },
            }
        }),
        link: {
            "pathname": `${link}rooms`,
            "api": "/pages/room/room1",
            "text": "Explore"
        }
    }
    _hotelParseObj._Carousel_Template3_order_3_row_0_col_0 = {
        "items": data.select_offers.map(item => {

            item.acf.image = {
                src: item.acf.image.toString().replace('https://greece-hotel.info/admins/aquavistahotels/wp-content/uploads','https://code.rateparity.com/aquavistahotels.com'),
                alt: "alt image"
            }

            return {
                link: {
                    pathname: item.acf.book_now,
                    "text": "Explore",
                    "external": "true"
                },
                ...item.acf,
            }
        })
    }

    _hotelParseObj._Tabs_Template1_order_4_row_0_col_0 = {
        "items": data.single_select_hotel.acf.tabs.map(item => {
            return {
                ...item
            }
        })
    }
    _hotelParseObj._Commons_Text_order_1_row_0_col_0 = {
        text: data.single_select_hotel.acf.title
    }
    _hotelParseObj._Commons_Text_order_1_row_0_col_1 = {
        text: data.single_select_hotel.acf.description
    }

    _hotelParseObj._ImageList_Template1_order_1_row_1_col_0 = {
        "items": data.single_select_hotel.acf.awards || []
    }

    _hotelParseObj._DisplayPostTypes_Template8_order_5_row_0_col_0 = {
        "items": data.select_more_hotels ? data.select_more_hotels.map(item => {
            return {
                ...item.acf,
                link: {
                    "pathname": `/${link.split('/')[1]}/${item.slug}`,
                    "api": "/pages/room/room1",
                    "text": "Explore"
                },
            }
        }) : [],
        link: {
            "pathname": `/hotels-in-santorini/dreams-luxury-suites`,
            "api": "/pages/room/room1",
            "text": "Explore"
        }
    }

    _hotelParseObj.bgImage =  `url(${data.single_select_hotel.acf.image.src})`

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
                link: '',
                label: label
            }
        ]
    }

    _hotelParseObj.instagram = {
        item : data.single_select_hotel.acf.instagram || ''
    }
    return _hotelParseObj
}

const hotelData = (parsed) => {

    return {
        "idbName": "/pages/dreams-luxury-suites",
        "schema": "schema-hotel",
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
                                "col-md-12 no-transform white-links"
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
                "class": "position-relative opacity-bg animation--up",
                "css": {
                    "border": "0",
                    "backgroundColor": "#FFFFFF",
                    "backgroundImage": parsed.bgImage,
                    "backgroundSize": "cover",
                    "backgroundPosition": "center",
                    "padding": "80px 0 80px 0"
                },
                "rows": [
                    {
                        "css": {
                            "padding": "120px 0 0 0",
                            "border": "0",
                            "maxWidth": "1440px",
                            "margin": "0 auto"
                        },
                        "columns": {
                            "sizes": [
                                "col-md-12 pb-5",
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
                            ...parsed._Commons_Text_order_1_row_0_col_0,
                            "css": {
                                "element": "div",
                                "class": "title-case-primary text-uppercase text-center my-4 animation--up",
                                "color": "primary-white"
                            }
                        },
                        {
                            ...parsed._Commons_Text_order_1_row_0_col_1,
                            "css": {
                                "element": "div",
                                "class": "main-text-body text-center animation--up",
                                "color": "primary-white"
                            }
                        }
                    ]
                },
            ]
        },
        "3": {
            "wrapper": {
                "fluid": true,
                "css": {
                    "border": "0",
                    "backgroundColor": "#FFFFFF"
                },
                "class": "test",
                "rows": [
                    {
                        "css": {
                            "padding": "80px 0 40px 0",
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
                "fluid": true,
                "css": {
                    "border": "0",
                    "backgroundColor": "#FFFFFF",
                    "maxWidth": "1440px",
                    "margin": "0 auto",
                    ...(parsed._ImageList_Template1_order_1_row_1_col_0.items.length === 0 && { "display": "none" })
                },
                "rows": [
                    {
                        "css": {
                            "padding": `40px 0 60px 0`,
                            "border": "0",
                        },
                        "columns": {
                            "sizes": [
                                `col-md-12 animation--up`
                            ]
                        }
                    },
                    {
                        "css": {
                            "padding": `0 0 60px 0`,
                            "border": "0",
                            "maxWidth": "1440px",
                            "margin": "0 auto"
                        },
                        "columns": {
                            "sizes": [
                                `col-md-12 animation--up`
                            ]
                        }
                    }
                ]
            },
            "rows": [
                {
                    "columns": [
                        {
                            "text": "HOTEL LATEST AWARDS",
                            "css": {
                                "element": "div",
                                "class": "title-case-primary text-uppercase text-center",
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
                            ...parsed._ImageList_Template1_order_1_row_1_col_0,
                            "css": {
                                "title": {
                                    "element": "div",
                                    "class": "heading-text-menu animation--up",
                                    "color": "primary-dark"
                                },
                                "description": {
                                    "element": "div",
                                    "class": "post-text-body animation--up",
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
        "5": {
            "wrapper": {
                "fluid": true,
                "css": {
                    "border": "0",
                    "backgroundColor": "#FFFFFF"
                },
                "rows": [
                    {
                        "css": {
                            "padding": "40px 0 60px 0",
                            "border": "0",
                            "maxWidth": "1440px",
                            "margin": "0 auto"
                        },
                        "columns": {
                            "sizes": [
                                "col-md-12 animation--up"
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
                            "text": "Choose your favourite room",
                            "link": {
                                "pathname": "/accommodation/room1",
                                "api": "/pages/room/room1"
                            },
                            "css": {
                                "element": "div",
                                "class": "title-case-primary text-uppercase text-center",
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
                            ...parsed._Carousel_Template3_order_2_row_0_col_0,
                            "css": {
                                "title": {
                                    "element": "div",
                                    "class": "heading-text-menu animation--up",
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
        "6": {
            "wrapper": {
                "fluid": true,
                "css": {
                    "border": "0",
                    "backgroundColor": "#FFFFFF",
                    "maxWidth": "1440px",
                    "margin": "0 auto",
                    ...(parsed._Carousel_Template3_order_3_row_0_col_0.items.length === 0 && { "display": "none" })
                },
                "rows": [
                    {
                        "css": {
                            "padding": `80px 0 60px 0`,
                            "border": "0",
                        },
                        "columns": {
                            "sizes": [
                                `col-md-12 animation--up`
                            ]
                        }
                    },
                    {
                        "css": {
                            "padding": `0 0 60px 0`,
                            "border": "0",
                            "maxWidth": "1440px",
                            "margin": "0 auto"
                        },
                        "columns": {
                            "sizes": [
                                `col-md-12 animation--up`
                            ]
                        }
                    }
                ]
            },
            "rows": [
                {
                    "columns": [
                        {
                            "text": "SPECIAL OFFERS",
                            "css": {
                                "element": "div",
                                "class": "title-case-primary text-uppercase text-center",
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
                            ...parsed._Carousel_Template3_order_3_row_0_col_0 ,
                            "css": {
                                "title": {
                                    "element": "div",
                                    "class": "heading-text-menu animation--up",
                                    "color": "primary-dark"
                                },
                                "description": {
                                    "element": "div",
                                    "class": "post-text-body animation--up",
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
        "7": {
            "wrapper": {
                "fluid": true,
                "css": {
                    "border": "0",
                    "backgroundColor": "#FFFFFF",
                    "maxWidth": "1440px",
                    "margin": "0 auto"
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
                            ...parsed._Tabs_Template1_order_4_row_0_col_0,
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
                                }
                            }
                        }
                    ]
                }
            ]
        },
        "8": {
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
                            "text": "MORE HOTELS",
                            "link": {
                                "pathname": "/dreams-luxury-suites",
                                "api": "/pages/room/room1"
                            },
                            "css": {
                                "element": "div",
                                "class": "title-case-primary text-uppercase text-center",
                                "color": "primary-dark",
                                "maxWidth": "512px",
                                "margin": "0 auto",
                                "padding": "0 0 0 0"
                            }
                        }
                    ]
                }
            ]
        },
        "9": {
            "wrapper": {
                "fluid": true,
                "css": {
                    "border": "0",
                    "backgroundColor": "#FFFFFF",
                    ...(parsed._DisplayPostTypes_Template8_order_5_row_0_col_0.items.length === 0 && { "display": "none" })
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
                                "col-md-12 animation--up"
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
                },
                {
                    "columns": [
                        {
                            "link": {
                                "pathname": "/dreams-luxury-suites",
                                "api": "/pages/room/room1"
                            },
                            ...parsed._DisplayPostTypes_Template8_order_5_row_0_col_0,
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
        "10": {
            "wrapper": {
                "fluid": true,
                "css": {
                    "border": "0",
                    "backgroundColor": "#FFFFFF",
                    ...(!parsed.instagram.item && { "display": "none" })
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
                            ...parsed.instagram,
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


const _singleHotelTemplate = (data,link,label) => {

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
    _singleHotelTemplate: _singleHotelTemplate
}