import React, {useEffect, useState, useRef} from 'react'
import Slide from './Slide'
import {useRouter} from "next/router";
import useIntersection from 'hooks/useIntersection'
import {mediaBreakPointsQueriesMax} from "public/globalCss/mediaBreakPoints";

const settingsSlider = {
    dots: false,
    infinite: true,
    autoplay: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
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
                dots: true,
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true
            }
        }
    ]
}
let SLIDER = null
const Carousel = ({ items, css, initialRequest }) => {

    const router = useRouter()

    const settings = {...settingsSlider,infinite: items.length > 1}

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
        <div className="carousel-offers-slider-container" ref={elementRef}>
            {
                SLIDER ? <SLIDER
                    key={router.asPath}
                    arrows={true}
                    nextArrow={<SampleNextArrow />}
                    prevArrow={<SamplePrevArrow />}
                    {...settings}
                >
                    {items && items.map((item, index) => <Slide item={item} key={index} css={css} gap={index % 2 === 1}/>)}
                </SLIDER> : items && items.map((item, index) => <div key={`carousel-offers-slider-container-${index}`}><Slide item={item} css={css} gap={index % 2 === 1}/></div>)
            }

            <style jsx global>
                {`
          
           .carousel-offers-slider-container .slick-list {
               margin: 0 -27px;
           }
          
           .carousel-offers-slider-container .slick-slide {
               padding: 15px;
           }

           @media screen and (max-width: ${mediaBreakPointsQueriesMax.lg}) {
           
                .carousel-offers-slider-container {
                  margin: 0 60px;
                }
             
                .carousel-offers-slider-container {
                    margin: 0 27px;
                }
                
           }
           
           @media screen and (max-width: ${mediaBreakPointsQueriesMax.md}) {
           
                .carousel-offers-slider-container .slick-slide {
                    padding: 0;
                }
                
           }
           
                
        `}
            </style>
        </div>
    )
}


function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", right: '-64px', zIndex: '1', height: '41px' }}
            onClick={onClick}
        >
            <ArrowRight/>
        </div>
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block",  left: '-64px', zIndex: '1', height: '41px' }}
            onClick={onClick}
        >
            <ArrowLeft/>
        </div>
    );
}

const ArrowLeft = () => {
    return(
        <svg width="21" height="38" viewBox="0 0 21 38" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 1.64453L2.32233 19.3222L20 36.9999" stroke="#04456D" strokeWidth="2"/>
        </svg>
    )
}

const ArrowRight = () => {
    return(
        <svg width="21" height="38" viewBox="0 0 21 38" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 1.64453L18.6777 19.3222L1 36.9999" stroke="#04456D" strokeWidth="2"/>
        </svg>
    )
}

export default Carousel