import React from 'react'
import Slide from './Slide'
import { NextArrow, PrevArrow } from 'components/commons/arrows/arrows'
import dynamic from "next/dynamic";

const Slider = dynamic(() => import('react-slick'))

const settingsSlider = {
    className: 'slider variable-width',
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
                className: 'slider variable-width'
            }
        }
    ]
}

const Carousel = ({ items, css }) => {

    const settings = {...settingsSlider,infinite: true}

    return (
        <div className="slider-container">
            <Slider {...settings}>
                {items.map((item, index) => <div className={'slide-container'} key={index}><Slide item={item} key={index} css={css}/></div>)}
            </Slider>
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
        </div>
    )
}

export default Carousel
