import dynamic from "next/dynamic";
import Template1 from "components/body/sliders/template1/Template1";
import {useState} from "react";
const Form = dynamic(() => import("components/availability/Form5") , { ssr: false })
const Gallery = dynamic(() => import('components/body/sliders/slideShow/Template1'),{ssr:false})
const HeroSliderWithBookingForm = ({data}) => {

    const [show,setShow] = useState(false)

    return(
        data?.items?.length && <div className={'full-screen-slider-container'}>

            <Template1 data={data}/>

            <Form/>

            {
                data.showGallery &&
                <div className={'show-gallery-button text-center button-white'} onClick={() => setShow(true)}>VIEW GALLERY</div>
            }

            {
                show &&
                <Gallery data={data} action={() => setShow(false)}/>
            }

            <style jsx>
                {`
                   .show-gallery-button{
                      position: absolute;
                      right: 35px;
                      top: 110px;
                      cursor:pointer;
                   } 
               `}
            </style>
        </div>
    )

}

export default HeroSliderWithBookingForm