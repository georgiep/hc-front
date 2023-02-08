import React from 'react'
// import Slider from 'react-slick'
import ImageLoader from 'components/commons/image/ImageLoader'
import {SliderArrowRight} from 'components/svgs/SliderArrowRight'
import {SliderArrowLeft} from 'components/svgs/SliderArrowLeft'
import Text2 from 'components/commons/Text2/Text2'
import Button2 from 'components/commons/buttons/Button2'
import { useRouter } from 'next/router'
import dynamic from "next/dynamic";

const Slider = dynamic(() => import('react-slick'))

const settingsSlider = {
    dots: false,
    infinite: false,
    autoplay: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    lazyLoad: 'progressive',
    swipe: false,
    fade: true
}

const Template1 = ({ data }) => {

    // const router = useRouter()

    let { items, heading, subHeading, button, css } = data

    const settings = {...settingsSlider,infinite: items.length > 1, autoplay: items.length > 1}

    return (
        <>

            <div className={'hidden'}>
                <ImageLoader
                    src={items[0]}
                    layout="fill"
                    objectFit="cover"
                    objectPosition="center"
                    priority={true}
                    type="relative"/>
            </div>

            <section className="row no-gutters full_screen_slider">
                <div className="col-md-12 position-relative">

                    <div className={"position-absolute w-100 h-100"}>
                        <div className="content center-top-position position-relative text-center">
                            {
                                heading &&
                                <div className={"text-uppercase"}>
                                    <Text2
                                        tag={css.heading.element}
                                        titleStyle={`${css.heading.class} ${css.heading.color} px-5`}
                                        text={heading}
                                    />
                                </div>
                            }
                            {
                                subHeading &&
                                <div className={"text-message"}>
                                    <Text2
                                        tag={css.subHeading.element}
                                        titleStyle={`${css.subHeading.class} ${css.subHeading.color} px-5`}
                                        text={subHeading}/>
                                </div>
                            }

                            {
                                button &&
                                <Button2 button={button} buttonStyle={css.button.class} link={true}/>
                            }

                        </div>
                    </div>


                    {
                        <Slider
                            // key={router.asPath}
                            {...settings}
                            nextArrow={<SampleNextArrow />}
                            prevArrow={<SamplePrevArrow />}
                        >
                            {
                                items &&
                                items.map((image, i) => (
                                    <div key={i} className="full_screen_slider_img position-relative">

                                        <div className={"bg-opacity position-absolute w-100 h-100"} />

                                        {image &&
                                            <ImageLoader
                                                src={image}
                                                layout="fill"
                                                objectFit="cover"
                                                objectPosition="center"
                                                priority={true}
                                                // onLoadingComplete={()=>{setShow(false)}}
                                                type="relative"/>
                                        }

                                    </div>
                                ))
                            }
                        </Slider>
                    }

                </div>
            </section>
            <style jsx>{`
              
            div :global(.full_screen_slider_img) {
              width: 100vw !important;
              height: 100vh !important;
            }
            
            .full_screen_slider {
              height: 100vh;
            }
            
            .content{
              max-width: 791px;
              margin: 0 auto;
              padding: 0;
              z-index: 2;
            }
            
            @media screen and (max-width: 600px) {
               .content{
                 top: 253px;
               } 
            }
           
            .text-message{
              max-width: 680px;
              margin: 0 auto;
              padding: 9px 0 40px 0;
            }    
                  
            .bg-opacity{
              background: linear-gradient(180deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0) 100%);
              z-index: 1;
            }
          `}</style>

        </>
    )
}

export default Template1

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
