import React, { useState , useEffect } from 'react'
import Slide from './Slide'
import { NextArrow, PrevArrow } from 'components/commons/arrows/arrows'
import dynamic from "next/dynamic";

const Slider = dynamic(() => import('react-slick'))

const settingsSlider = {
    className: 'slider variable-width',
    dots: false,
    infinite: false,
    autoplay: false,
    speed: 500,
    slidesToScroll: 1,
    initialSlide: 0,
    variableWidth: true,
    nextArrow: <NextArrow color={'black'}/>,
    prevArrow: <PrevArrow color={'black'}/>,
}

const Carousel = ({ items, css }) => {
    
  const [settings,setSettings] = useState(settingsSlider)

  useEffect(()=>{
      setSettings({...settings,infinite: true})
  },[settings])
    
  return (
    <div className="slider-container">
      <Slider {...settings}>
        {items && items.map((item, index) => <Slide item={item} key={index} css={css}/>)}
      </Slider>
      <style jsx>
        {`
          .slider-container {
          }
          @media screen and (max-width: 1300px) {
            .slider-container {
              margin: 0 60px;
            }
          }
        `}
      </style>
    </div>
  )
}

export default Carousel
