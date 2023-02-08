import React, { Fragment, useState , useEffect } from 'react'
import Slide from './Slide'
import { NextArrowHighlight } from 'components/commons/arrows/arrows'
import dynamic from "next/dynamic";

const Slider = dynamic(() => import('react-slick'))

const settingsSlider = {
  className: 'slider variable-width',
  dots: false,
  infinite: false,
  autoplay: false,
  slidesToShow: 3.5,
  slidesToScroll: 1,
  initialSlide: 0,
  nextArrow: <NextArrowHighlight />,
  prevArrow: <Fragment />,
  speed: 500,
  useTransform: true,
  cssEase: 'cubic-bezier(0.770, 0.000, 0.175, 1.000)',
  responsive: [
    {
      breakpoint: 1350,
      settings: {
        slidesToShow: 2.5,
      },
    },
    {
      breakpoint: 1050,
      settings: {
        slidesToShow: 1.5,
      },
    },
  ],
}

const Carousel = ({ highlights,css }) => {
  
  const [settings,setSettings] = useState(settingsSlider)

  useEffect(()=>{
    setSettings({...settings,infinite: true})
  },[settings])
  
  return (
    <div className="slider-container">
      <Slider {...settings}>
        {highlights.map((highlight, index) => {
          return <Slide highlight={highlight} key={index} css={css}/>
        })}
      </Slider>
      <style jsx>
        {`
          .slider-container {
            padding: 50px 0;
          }
        `}
      </style>
    </div>
  )
}

export default Carousel
