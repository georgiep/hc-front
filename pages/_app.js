import {useRouter} from "next/router";
import { BreakpointProvider } from "context/BreakpointContext";
import { AvailabilityProvider } from 'context/AvailabilityContext'
import {useEffect, useState} from "react";
import breakpoints from "styles/breakpoints";
import styles from '/public/globalCss/bootstrap.css'
// import 'slick-carousel/slick/slick.css'
// import 'slick-carousel/slick/slick-theme.css'

import {publish} from "../helpers/pub-sub";

function MyApp({ Component, pageProps }) {
    const router = useRouter();


    useEffect(() => {

        if (typeof window !== 'undefined') {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    entry.target.classList.toggle('animation--finish', entry.isIntersecting)
                    if (entry.isIntersecting) observer.unobserve(entry.target)
                })
            })

            setTimeout(function (){
                if(document.querySelectorAll('.animation--up').length > 0){
                    let divs = [...document.querySelectorAll('.animation--up')]
                    divs.forEach(item => {
                        observer.observe(item);
                    })
                }
            },500)

            setTimeout(function (){
                loadCtas()
            },1000)

        }

        return () => {

            const getCTAs = [...document.querySelectorAll('.button-cta')]

            getCTAs.forEach(item=>{
                item.removeEventListener('click',publish,true)
            })

        }

    }, [router.asPath]);

    return (
        <BreakpointProvider queries={breakpoints}>
            <AvailabilityProvider occupancy={pageProps.occupancy || {}}>
                <Component {...pageProps} key={router.pathname}/>
            </AvailabilityProvider>
        </BreakpointProvider>
    )
}

function loadCtas(){
    const getCTAs = [...document.querySelectorAll('.button-cta')]
    getCTAs.forEach(item=>{
        item.addEventListener('click',publish,true)
        item.eventName = item.dataset.cta;
        item.data = {
            heading: item.dataset.ctaheading,
            subheading: item.dataset.ctasubheading
        };
    })
}
export default MyApp
