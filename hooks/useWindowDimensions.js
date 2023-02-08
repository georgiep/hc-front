import { useState, useEffect } from 'react';

function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
        width,
        height
    };
}

export default function useWindowDimensions() {

    let dimensions = 'mobile'

    if (process.browser){
        const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

        if(windowDimensions.width >= 1200){
            dimensions = 'desktop'
        }
        if(windowDimensions.width < 1200 && windowDimensions.width >= 769){
            dimensions = 'tablet'
        }
        if(windowDimensions.width < 768){
            dimensions = 'mobile'
        }

        useEffect(() => {
            function handleResize() {
                setWindowDimensions(getWindowDimensions());
            }

            window.addEventListener('resize', handleResize);
            return () => window.removeEventListener('resize', handleResize);

        }, []);

        return {...windowDimensions,dimensions: dimensions}
    }


    return { width: 767, height: 1200 , dimensions: dimensions }
}