import React, { useState } from 'react'

import ImageLoader from 'components/commons/image/ImageLoader'

import dynamic from "next/dynamic";
const Slider = dynamic(() => import('react-slick'))
const Template2 = ({data}) => {

    let slider1 = null,
        slider2 = null

    const {items,css} = data;

    const [sliders,setSliders] = useState({
        nav1: null,
        nav2: null
    })

    // useEffect(()=>{
    //     setSliders({
    //         nav1: slider1,
    //         nav2: slider2
    //     })
    // },[slider1,slider2])

    return(
        <>
            <div className={"single-gallery-container f-l w-100"}>
                <div className={"single-gallery-container-inner row no-gutters"}>
                    <div className="col-md-12">
                        <div className={"gallery-slideshow"}>
                            <Slider
                                asNavFor={sliders.nav2}
                                ref={slider => (slider1 = slider)}
                                slidesToShow={2.5}
                                infinite={false}
                                speed={500}
                                useTransform={true}
                                cssEase={'cubic-bezier(0.770, 0.000, 0.175, 1.000)'}
                            >
                                {
                                    items &&
                                    items.map((image, i) => (
                                        <div key={i} className="full_screen_slider_img image w-100">
                                            <ImageLoader
                                                src={image}
                                                layout="fill"
                                                objectFit="cover"
                                                objectPosition="center"
                                                type="relative"
                                            />
                                        </div>
                                    ))}
                            </Slider>
                        </div>
                        <div className={"navigation-gallery-slideshow"}>
                            <Slider
                                asNavFor={sliders.nav1}
                                ref={slider => (slider2 = slider)}
                                slidesToShow={6}
                                swipeToSlide={true}
                                focusOnSelect={true}
                                className="navigation-gallery"
                                speed={500}
                                useTransform={true}
                                cssEase={'cubic-bezier(0.770, 0.000, 0.175, 1.000)'}
                            >
                                {
                                    items &&
                                    items.map((image, i) => (
                                        <div key={i} className="full_screen_slider_img image nav2 pointer">
                                            <ImageLoader
                                                src={image}
                                                layout="fill"
                                                objectFit="cover"
                                                objectPosition="center"
                                                type="relative"
                                            />
                                        </div>
                                ))}
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>
            <style jsx>{`
          
                .single-gallery-container{
                    padding: 80px 0 55px 0;
                }
                
                .single-gallery-container-inner{
                   max-width: 1167px;
                   margin: 0 auto;
                }
    
                .gallery-slideshow{
                   max-width: calc(100% - 8px);
                }
                   
                .image{
                   height: 400px;
                   padding-bottom: 8px;
                   padding-right: 10px;
                }
                
                .image.nav2{
                   height: 150px;
                }
            
          `}</style>
        </>
    )
}

export default Template2

