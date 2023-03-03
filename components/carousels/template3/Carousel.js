import React from 'react'
import Slide from './Slide'
import { NextArrow, PrevArrow } from 'components/commons/arrows/arrows'
import dynamic from "next/dynamic";
import {mediaBreakPointsQueriesMax} from "public/globalCss/mediaBreakPoints";

const Slider = dynamic(() => import('react-slick'))

const settingsSlider = {
    className: 'slider variable-width',
    dots: true,
    infinite: false,
    autoplay: false,
    speed: 500,
    slidesToScroll: 1,
    initialSlide: 0,
    slidesToShow: 3,
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

    const settings = {...settingsSlider}

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
               
                        
                   .carousel-slides-same-height .slick-dots li button:before {
                        color: #04456D !important;
                        font-size: 40px;
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
                  
                  @media screen and (max-width: ${mediaBreakPointsQueriesMax.md}) {
                     .slide-container{
                         width: 100% !important;
                      }
                  }
                  
                `}
            </style>
        </div>
    )
}

export default Carousel
