import dynamic from "next/dynamic";
import Template1 from 'components/displayPostTypes/destinations/template1/Template1'
import {useEffect, useState} from "react";
import {mediaBreakPoints} from 'public/globalCss/mediaBreakPoints'

const MapWithMultipleMarkers = dynamic(() => import("./MapWithMultipleMarkers"))

const MultipleMarkersWithImage = ({data}) => {
    const {items,css,...props} = data
    const [open,setOpen] = useState(false)
    const action = () =>{
        setOpen(!open)
    }

    useEffect(()=>{
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        if(queryString === `?map=${items[0].link.pathname.split('/')[1]}`){
            action()
            setTimeout( ()=>{
                location.href = "#";
                location.href = `#${items[0].link.pathname.split('/')[1]}`;
            },500)
        }

    },[])


    return(
        <div>
            <div className={'position-relative'}>
                <Template1 data={{...props,css: css.top}}/>
                <div className={`map-line ${open ? 'map-line--opened' : ''}`}></div>
            </div>

            <div onClick={action} className={'d-flex'}>
                <div style={{marginLeft: 'auto'}}>
                    {
                        !open ? <button className={'button-secondary f-r text-uppercase'}>Quick View</button> : <div className={'button-close'}><CloseButton/></div>
                    }
                </div>
            </div>
            {open && <MapWithMultipleMarkers data={{items:items,css:css}} full/>}
            <style jsx>
                {`
                   .button-close{
                      position: absolute;
                      z-index: 9999999;
                      right: 39px;
                      margin-top: 20px;
                      cursor: pointer;
                   }
                   
                   .map-line{
                        border: 1px solid #04456D;
                        position: absolute;
                        right: 155px;
                        bottom: 34px;
                        width: 256px;
                        transform: rotate(90deg);
                   }
                   
                   .map-line--opened{
                         transform: rotate(0deg);
                         right: 223px;
                         bottom: 104px;
                   }
                   
                   @media only screen and (max-width: ${mediaBreakPoints.sm}) {
                      .map-line{
                         display: none;
                       }
                   }
                `}
            </style>
        </div>
    )
}


const CloseButton = () => {
    return(
        <svg width="28" height="27" viewBox="0 0 28 27" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M27.6986 2.71929L24.9605 0L14.1051 10.7807L3.24982 0L0.511719 2.71929L11.367 13.5L0.511719 24.2807L3.24982 27L14.1051 16.2193L24.9605 27L27.6986 24.2807L16.8432 13.5L27.6986 2.71929Z" fill="#04456D"/>
        </svg>
    )
}

export default MultipleMarkersWithImage