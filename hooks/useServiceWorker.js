import React, {useEffect} from "react";

const ONE_HOUR = 60 * 60 * 1000;

function useServiceWorker(initialRequest){
    useEffect(() => {
        const sw = navigator.serviceWorker;
        if ( initialRequest && sw ) {
            window.addEventListener( 'load', () => {

                sw.register('serviceworker.js');

                sw.addEventListener('message', event => {
                    console.log(`Cache Deleted From Sw: ${event.data}`);
                });

                sw.ready.then( registration => {

                    if(!localStorage.getItem('timeStampForCache')){
                        localStorage.setItem('timeStampForCache', new Date());
                        return
                    }

                    if((new Date) - new Date(localStorage.getItem('timeStampForCache')) > ONE_HOUR){
                        localStorage.removeItem('timeStampForCache');
                        localStorage.setItem('timeStampForCache', new Date());
                        registration.active.postMessage("Delete Serviceworker cache");
                    }

                });

            })
        }
    }, [])
}

export default useServiceWorker
