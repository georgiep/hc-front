const fs =require('fs');
const path = require("path");

const destinationParseObj = {
    _HeroSliderWithBookingForm_Hero_oder_0_row_0_col_0: {

    },
    _Maps_MultipleMarkersWithImage_order_1_row_0_col_0: {
        "title": "Explore Santorini",
        "image": "/hotels/acquavista/images/explore-santorini.jpg",
        "link": {
            "pathname": "/hotels-in-santorini",
            "api": "/pages/room/room1"
        },
        "items": [
            {
                "lat": 59.838040,
                "lng": 30.337125,
                "name": "Dreams Luxury Suites",
                "description": "",
                "link": {
                    "pathname": "/hotels-in-santorini",
                    "api": "/pages/room/room1",
                    "text": "Book now"
                }
            }
        ]
    }
}

let linkPost = {
    "pathname": "/hotels-in-santorini",
    "api": "/pages/room/room1",
    "text": "Explore"
}

const destinationParser = (data) =>{

    destinationParseObj._HeroSliderWithBookingForm_order_0_row_0_col_0 = {
        "items": data.slider_gallery.map(item => {
            return{
                "src":item.url.toString().replace('https://greece-hotel.info/admins/aquavistahotels/wp-content/uploads','https://code.rateparity.com/aquavistahotels.com'),
                "alt": 'alt hotel image'
            }
        }),
        "heading": data.intro_text
    }

    destinationParseObj._Maps_MultipleMarkersWithImage_order_1_row_0_col_0 = {
        items: data.select_destination.reduce((acc,item) => {
             item.destination.acf.image = {
                src: item.destination.acf.image.toString().replace('https://greece-hotel.info/admins/aquavistahotels/wp-content/uploads','https://code.rateparity.com/aquavistahotels.com'),
                alt: 'alt image'
            }
            acc.push({
                ...item.destination.acf,
                link: {
                    "pathname": `/hotels-in-${item.destination.post_name}`,
                    "api": "/pages/room/room1",
                    "text": "Explore"
                },
                items: item.hotels.map(hotel => {

                    let HOTEL = {}
                    //  hotel[0].acf.image = {
                    //     src: hotel[0].acf.image.toString().replace('https://greece-hotel.info/admins/aquavistahotels/wp-content/uploads','https://code.rateparity.com/aquavistahotels.com'),
                    //     alt: 'alt image'
                    // }

                    HOTEL.image = {
                        src: hotel[0].acf.image.toString().replace('https://greece-hotel.info/admins/aquavistahotels/wp-content/uploads','https://code.rateparity.com/aquavistahotels.com'),
                        alt: 'alt image'
                    }
                    HOTEL.lat = hotel[0].acf.lat
                    HOTEL.lng = hotel[0].acf.lng
                    HOTEL.title = hotel[0].acf.title
                    console.log(hotel[0].acf)

                    return { link:{
                            "pathname": `/hotels-in-${item.destination.post_name}/${hotel[0].slug}`,
                            "api": "/pages/room/room1",
                            "text": "Explore"
                        },...HOTEL }
                }),
                "css": {
                    "element": "div",
                    "class": "post-text-body text-uppercase",
                    "color": "primary-white",
                    "top": {
                        "element": "div",
                        "class": "title-case-primary text-uppercase text-center",
                        "color": "primary-white"
                    },
                    "marker": {
                        "element": "div",
                        "class": "post-text-body",
                        "color": "primary-dark"
                    }
                }
            })
            return acc
        },[])
    }

    destinationParseObj.SEO = {
        "title": data.seo_title,
        "description": data.seo_description,
        "keywords": ""
    }

    destinationParseObj.breadcrumbs = {
        items: [
            {
                link: '/',
                label: "AQUA VISTA HOTELS"
            },{
                link: '',
                label: "Destinations"
            }
        ]
    }

    return destinationParseObj
}

const destinationData = (parsed) => {
    return {
        "idbName": "/pages/destinations",
        "schema": "schema-destinations",
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
                            ...parsed._HeroSliderWithBookingForm_order_0_row_0_col_0,
                            "css": {
                                "heading": {
                                    "element": "div",
                                    "class": "title-case-hero text-uppercase",
                                    "color": "primary-white"
                                }
                            },
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
                            ...parsed._Maps_MultipleMarkersWithImage_order_1_row_0_col_0,
                            "css": {
                                "element": "div",
                                "class": "post-text-body",
                                "color": "primary-white",
                                "top": {
                                    "element": "div",
                                    "class": "title-case-primary text-uppercase text-center",
                                    "color": "primary-white"
                                },
                                "marker": {
                                    "element": "div",
                                    "class": "post-text-body",
                                    "color": "primary-dark"
                                }
                            }
                        }
                    ]
                }
            ]
        }
    }
}


    const _destinationsTemplate = (data) => {

    const parsedData = destinationParser(data)
    const destination = destinationData(parsedData)
    const jsonPath = path.join(__dirname, '../../', '/public/hotels/acquavista/data');

    fs.writeFile(`${jsonPath}/pages/destinations.json`, JSON.stringify(destination), 'utf8', (err) => {
        console.log("change data output FINISH")
        return (err) ? console.log(err) : console.log("The file pages was saved!");
    })
    return destination
}

module.exports = {
    _destinationsTemplate: _destinationsTemplate
}