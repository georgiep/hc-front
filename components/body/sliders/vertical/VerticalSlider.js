import React, { useState , useEffect } from 'react'
import Text from 'components/commons/text/Text'
import ImageLoader from 'components/commons/image/ImageLoader'
import Button from 'components/commons/buttons/Button'
import {SliderArrowRight,SliderArrowLeft,RectHightlight} from 'components/commons/svgs'

import dynamic from "next/dynamic";

const Slider = dynamic(() => import('react-slick'))

const VerticalSlider = ({data}) => {

    const settingsSlider = {
        infinite: false,
        autoplay: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        vertical: true,
        verticalSwiping: true,
        beforeChange: function(currentSlide, nextSlide) {},
        afterChange: function(currentSlide) {
            setState(currentSlide)
        }
    }
    
    const {items,css} = data

    const [ state, setState ] = useState(0)

    const [settings,setSettings] = useState(settingsSlider)

    useEffect(()=>{
        setSettings({...settings,infinite: true})
    },[settings])

    return (
        <>
            <section className="vertical-slider">
                <div className="vertical-slider-inner position-relative">
                    <div className={"main-content"}>
                        <div className={"big-content position-relative"}>
                            <div className={"big-content-image d-inline f-l w-100 h-100"}>
                                <ImageLoader
                                    src={items[state].image}
                                    layout="fill"
                                    objectFit="cover"
                                    objectPosition="center"
                                    type="relative"/>
                            </div>
                            <div className={"feature position-absolute"}>
                                <Text text={items[state].feature} tag={'span'} css={css.feature} />
                            </div>
                            <div className={"item-book-now position-absolute"}>
                                <Button button={items[state].link} css={css.link} link={false}/>
                            </div>
                        </div>
                        <div className={"slider"}>
                            <h1>Top experiences</h1>
                            <Slider
                                {...settings}
                                nextArrow={<SampleNextArrow />}
                                prevArrow={<SamplePrevArrow />}
                            >
                                {
                                    items &&
                                    items.map((item, i) => (
                                        <div key={i}
                                             className="vertical-slider-content position-relative"
                                             onClick={() => setState(i)}
                                        >

                                            {
                                                item.image &&
                                                <div className={"content-image d-inline f-l"}>
                                                    <ImageLoader
                                                        src={item.image}
                                                        layout="fill"
                                                        objectFit="cover"
                                                        objectPosition="center"
                                                        type="relative"/>
                                                </div>
                                            }

                                            <div className={"rect"}>
                                                <div className={"rect-inline"}>
                                                    <RectHightlight />
                                                </div>
                                                <div className={"rect-number"}>
                                                    {i+1}
                                                </div>
                                            </div>

                                            {
                                                item.heading &&
                                                <div className={"content-heading d-inline f-l"}>
                                                    <Text text={item.heading} tag={'span'} css={css.heading} />
                                                </div>
                                            }

                                        </div>
                                    ))
                                }
                            </Slider>
                        </div>

                    </div>

                </div>
            </section>
            <style jsx>{`
 
            h1{
                font-family: Chronicle Display;
                font-size: 30px;
                font-style: normal;
                font-weight: 400;
                line-height: 36px;
                letter-spacing: 0em;
                text-align: left;
                color: #000;
                padding-bottom: 49px;
            }
            .vertical-slider-inner{
                max-width: 1440px;
                margin: 0 auto;
            }
            
            .item-book-now{
                right: -80px;
                bottom: -32px;
                z-index: 1;
            }
            
            .main-content{
                display: flex;
                padding-bottom: 32px;
            }
         
            .main-content .slider{
                width: 362px;
                padding-bottom: 59px;
            }
            
            .main-content .big-content{
                flex-grow: 1;
                padding-right: 32px;
                min-height: 450px;
            }
 
            .feature{
                left: 0;
                top:0;
                padding: 0 27px 27px 10px;
                background: #FFF;
            }
            
            .slider{
                width: 362px;
            }
            
            .vertical_slider {
                height: 575px;
            }
            
            .vertical-slider-content{
               height: 105px;
              
            }
            
            .content-image{
               width: 111px;
               height: 72px;
            }
            
            .rect{
                position: absolute;
                left: 92px;
                top: 18px;
            }
            
            .rect-number{
                position: absolute;
                transform: translateX(-50%);
                top: 11px;
                left: 50%;
                font-size: 14px;
                font-style: normal;
                font-weight: 400;
                line-height: 17px;
                letter-spacing: 0.03em;
                text-align: left;
            }
            .content-heading{
               width: calc(100% - 111px);
               padding-left: 32px;
               padding-top: 5px;
            }    
          `}</style>
        </>
    )
}

export default VerticalSlider

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", right: '20px', zIndex: '1', height: '41px' }}
            onClick={onClick}
        >
            <SliderArrowRight/>
        </div>
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block",  left: '20px', zIndex: '1', height: '41px' }}
            onClick={onClick}
        >
            <SliderArrowLeft/>
        </div>
    );
}