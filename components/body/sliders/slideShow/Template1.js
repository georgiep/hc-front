import ImageGallery from 'react-image-gallery';
import "node_modules/react-image-gallery/styles/css/image-gallery.css";
import {useEffect, useRef } from "react";

const Template1 = ({data,action}) => {

    const {items} = data

    const ref = useRef()

    const images = items.map(item=>{
        return {
            original: item,
            thumbnail: item
        }
    })

    useEffect(()=>{
        if(ref.current){
            ref.current.fullScreen()
        }
    },[ref.current])

    const exitFullScreen = (e) => {
        if(!e){
            action && action()
        }
    }

    return (
        <div>
            <ImageGallery ref={ref} items={images} fullscreen onScreenChange={(e)=>exitFullScreen(e)}/>
        </div>

    )
}

export default Template1