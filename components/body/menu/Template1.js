import React, { useState, useEffect, } from "react";
import { useRouter } from 'next/router';
import useScroll from "../../../hooks/useScroll";
import { useRef } from "react";
import PrefetchLink from "components/links/PrefetchLink";
import {mediaBreakPoints} from 'public/globalCss/mediaBreakPoints'

const Template1 = ({data}) => {

    const router = useRouter();

    const {menu} = data
    const elRef = useRef()

    const {scrollY} = useScroll()
    const [show,setShow] = useState(false)

    if(elRef.current && scrollY){
        const { y } = elRef.current.getBoundingClientRect();

        if(y <= 0){
            if(!show){
                setShow(true)
            }
        }else{
            if(show){
                setShow(false)
            }
        }
    }


    useEffect(() => {
        setShow(false)
    },[router.asPath])


    return (
        <div className={`secondary-menu--v1`} ref={elRef}>


            <div className={`d-flex text-center justify-content-center heading-text-menu ${show ? 'fixed-element-subMenu' : ''}`}>
                {
                    menu.map((item,i)=>{
                        return(
                            <div key={i} className={`text-capitalize link ${item.active ? 'link-active' : ''}`}>
                                <PrefetchLink pathname={item.link}>{item.label}</PrefetchLink>
                            </div>
                        )
                    })
                }
            </div>

            <style jsx global>
                {
                    `
                       .white-links a{
                          color: #ffffff;
                       }
                       
                       .fixed-element-subMenu a{
                         color: #1c3450 !important;
                       }
                    `
                }
            </style>
            <style jsx>
                {`
                
                     .heading-text-menu{
                        margin-top: 90px;
                     }
                    
                     .secondary-menu--v1{
                        position: absolute;
                        width: 100%;
                        z-index: 99;
                        max-width: 100vw;
                     }
                     
                     .link{
                        padding: 32px; 
                     }
                     
                     @media only screen and (max-width: ${mediaBreakPoints.lg}) {
                         .link{
                            padding: 32px 10px; 
                         }
                     }
                     
                     .fixed-element-subMenu{
                        position: fixed !important;
                        width: 100vw !important;
                        top: -16px;
                        z-index: 999999 !important;
                        max-width: 100vw !IMPORTANT;
                        // background-color: #1c3450;
                        background-position: center center;
                        background-repeat: no-repeat;
                        border-width: 0px 0px 0px 0px;
                        border-color: #eae9e9;
                        border-style: solid;
                        color: #1c3450 !important;
                        background: #fff;
                     }
                       
                     .link-active{
                       font-weight: 500;
                     }
                `}
            </style>
        </div>


    );

};


export default Template1;