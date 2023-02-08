import ImageLoader from 'components/commons/image/ImageLoader'
import React, {useContext, useState} from "react";
import BreakpointContext from "context/BreakpointContext";
import dynamic from "next/dynamic";
const Gallery = dynamic(() => import('components/body/sliders/slideShow/Template1'),{ssr:false})

const Slider = dynamic(() => import('react-slick'))

const settingsSlider = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
}

const Template2 = ({data}) => {

    const {mobile} = useContext(BreakpointContext)
    const [show,setShow] = useState(false)

    const settings = {...settingsSlider}
    const {items,css} = data;

    const chunkSize = 4;
    let fullArr = []

    if(mobile){
        for (let i = 0; i < items.length; i += 1) {
            fullArr.push(items[i])
        }
    }else{
        for (let i = 0; i < items.length; i += chunkSize) {
            const chunk = items.slice(i, i + chunkSize);
            fullArr.push(chunk)
        }
    }

    if(mobile){
        return(

            <>
                <Slider {...settings}>
                    {fullArr.map((arr, index) => <div className={'container-fluid'} key={index}><div className={'slide-container row no-gutters'} key={index}>

                            <div
                            className={`col-md-12 image`}
                            key={index}
                            >
                                <ImageLoader
                                src={arr}
                                layout="fill"
                                objectFit="cover"
                                objectPosition="center"
                                type="relative"/>
                            </div>

                    </div></div>)}
                </Slider>

                <style jsx>{`
          
                    .single-gallery-container{
                       padding: 80px 0 55px 0;
                    }
                    
                    .image{
                       height: 468px;
                       padding-bottom: 14px;
                    }
                    
                    .image:nth-child(2n){
                        padding-left: 14px;
                    }
                
              `}</style>
            </>
        )
    }
    return(

        <>
            <Slider {...settings}>
                {fullArr.map((arr, index) => <div className={'container-fluid'} key={index}><div className={'slide-container row no-gutters'} key={index}>
                    {
                        arr.map((item,i) => {
                            return(
                                <div
                                    className={`${(i === 0 || i === 3) ? 'col-md-8' : 'col-md-4'} image cursor-pointer`}
                                    key={i}
                                    onClick={() => setShow(true)}
                                >
                                    <ImageLoader
                                        src={item}
                                        layout="fill"
                                        objectFit="cover"
                                        objectPosition="center"
                                        type="relative"/>
                                </div>
                            )
                        })
                    }
                </div></div>)}
            </Slider>

            {
                show &&
                <Gallery data={data} action={() => setShow(false)}/>
            }

            <style jsx>{`
          
            .single-gallery-container{
                padding: 80px 0 55px 0;
            }
            
            .image{
               height: 468px;
               padding-bottom: 14px;
            }
            
            .image:nth-child(2n){
                padding-left: 14px;
            }
            
          `}</style>
        </>
    )
}

export default Template2

