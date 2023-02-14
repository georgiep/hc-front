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
    variableWidth: true,
    nextArrow: <NextArrow color={'black'}/>,
    prevArrow: <PrevArrow color={'black'}/>,
    responsive: [
        {
            breakpoint: 1000,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                initialSlide: 1,
                className: 'slider',
                variableWidth: false,
            }
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                initialSlide: 1,
                className: 'slider',
                variableWidth: false,
            }
        }
    ]
}

const Carousel = ({ items, css }) => {

    const settings = {...settingsSlider,infinite: false, slidesToShow: 2.5, variableWidth: false }

    return (
        <div className="slider-container carousel-slides-same-height">
            <Slider {...settings}>
                {items.map((item, index) => <div className={'slide-container'} key={`${index}-${item.title}`}><Slide item={item} key={index} css={css}/></div>)}
            </Slider>
            <style jsx global>
                {`
                  
                    .carousel-slides-same-height .slick-track{
                        display: flex !important;
                        margin-left:0;
                    }
                    
                   .carousel-slides-same-height .slick-slide{
                        height: inherit !important;
                    }
                
                    .carousel-slides-same-height .slick-slide > div{
                        height: 100% !important;
                    }
                    
                    .carousel-template3 .slick-dots{
                       margin-left: 4px;
                    }
                         

               `}
            </style>
            <style jsx>
                {`

                 .slide-container{
                     //width: 550px !important;
                     padding: 20px;
                     height: 100%;
                  }
                 // 
                  
                  @media screen and (max-width: 1300px) {
                    .slider-container {
                      margin: 0;
                    }
                  }
                  
                  @media screen and (max-width: 600px) {
                     .slide-container{
                         width: initial !important;
                      }
                  }
                  
                `}
            </style>
        </div>
    )
}

export default Carousel
