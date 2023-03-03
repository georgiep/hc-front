import React, {useEffect, useRef, useState} from 'react'
import Slide from './Slide'
import { NextArrow, PrevArrow } from 'components/commons/arrows/arrows'
import useIntersection from "../../../hooks/useIntersection";

const settingsSlider = {
    className: 'slider',
    dots: true,
    infinite: false,
    autoplay: false,
    speed: 500,
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow: <NextArrow color={'black'}/>,
    prevArrow: <PrevArrow color={'black'}/>,
    slidesToShow: 3,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                initialSlide: 1,
            }
        }
    ]
}
let SLIDER = null
const Carousel = ({ items, css }) => {

    const settings = {...settingsSlider,infinite: true}

    const elementRef = useRef(null);
    const isIntersected = useIntersection(elementRef,0.1, true);

    const [Slider,setSlider] = useState(null)

    useEffect(() => {

        if (typeof window !== 'undefined') {

            if(isIntersected){
                async function getSlider(){
                    // const Slider = (await import('react-slick')).default;
                    // setSlider(Slider)
                    const Slider = await import('react-slick')
                    const SliderDefault = Slider.default

                    SLIDER = SliderDefault
                    setSlider(true);

                }
                getSlider()

            }

        }

        return () => {

        }

    }, [isIntersected]);

    return (
        <div className="slider-container carousel-template5" ref={elementRef}>
            {
                SLIDER ? <SLIDER {...settings}>
                {items && items.map((item, index) => <div className={'slide-container'} key={index}><Slide item={item} key={index} css={css}/></div>)}
            </SLIDER> : items && items.map((item, index) => <div className={'slide-container'} key={index}><Slide item={item} key={index} css={css}/></div>)
            }
            <style jsx>
                {`
                 .slide-container{
                     width: 100% !important;
                     padding: 20px;
                  }
                  @media screen and (max-width: 1300px) {
                    .slider-container {
                      margin: 0;
                    }
                  }
                  
                  @media screen and (max-width: 600px) {
                  
                  }
                  
                `}
            </style>
            <style jsx global>
                {` 
 
                   .carousel-template5{
                       margin: 0 -30px;
                   }

               `}
            </style>
        </div>
    )
}

export default Carousel
