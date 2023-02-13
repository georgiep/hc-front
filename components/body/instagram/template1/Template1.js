import React, {useEffect, useRef, useState} from 'react'
import InnerHTML from 'dangerously-set-html-content'
import useIntersection from "../../../../hooks/useIntersection";

const Template1 = ({ data }) => {

    const { item, css } = data

    const [show,setShow] = useState(false)
    const elementRef = useRef(null);
    const isIntersected = useIntersection(elementRef,0.1, true);

    useEffect(() => {
        if(isIntersected){
            setShow(true)
        }
    }, [isIntersected]);

    return (
        <>
            <div className={'d-flex w-100 instagram-feed-container'} ref={elementRef}>
                {
                    show &&
                    <InnerHTML html={`
                        <script src="https://apps.elfsight.com/p/platform.js" defer></script>
                        <div class="${item}"></div>`} />
                }
            </div>
            <style jsx global>
                {`
                   .instagram-feed-container > div{
                      width: 100%;
                   }
                `}
            </style>
        </>
    )
}

export default Template1

