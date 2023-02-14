import React, {useEffect, useState} from 'react'
import InnerHTML from 'dangerously-set-html-content'
import dynamic from "next/dynamic";
import {subscribe,unsubscribe} from "../../../../helpers/pub-sub";

const components = {
    form: dynamic(() => import('components/body/forms/template1')),
    mapMulti: dynamic(() => import('components/maps/MapWithMultipleMarkers')),
}

const Template1 = ({ data }) => {

    let { items, modal, css } = data

    const [open,setOpen] = useState(false)

    const openAction = (e) => {
        setOpen(true)
        data.heading = e?.detail?.heading
        data.subheading = e?.detail?.subheading
        document.documentElement.style.overflow = 'hidden'
    }

    const closeAction = () => {
        setOpen(false)
        document.documentElement.style.overflow = ''
    }

    useEffect(()=>{
        subscribe(modal.event, openAction);
        return ()=>{
            unsubscribe(modal.event, closeAction);
            document.documentElement.style.overflow = ''
        }
    },[])

    const Component = components[modal.component || 'form']

    return (
        open &&
        <>
            <div className={'fullscreen-modal position-fixed'}>

                 <div className={'fullscreen-modal--close cursor-pointer position-fixed'} onClick={closeAction}>
                     close
                 </div>

                 {/*<InnerHTML html={`*/}
                 {/*    <script src="https://apps.elfsight.com/p/platform.js" defer></script>*/}
                 {/*    <div class="elfsight-app-bf9d154d-2667-4d93-a05b-51d0132c6d90"></div>`} />*/}

                 <Component data={data}/>

            </div>
            <style jsx>
                {`
                    .fullscreen-modal{
                        width: 100vw;
                        height: 100vh;
                        background: rgba(255,255,255,0.9);
                        top: 0;
                        left: 0;
                        z-index: 1000000;
                        overflow: auto;
                        padding: 50px 5px;
                    }
                    
                    .fullscreen-modal--close{
                        right: 10px;
                        top: 10px;
                        z-index: 1;
                        padding: 10px;
                        background: #ffffff;
                    }

                `}
            </style>
        </>
    )
}

export default Template1

