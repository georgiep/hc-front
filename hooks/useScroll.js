import React, { useEffect, useState, useCallback } from 'react'

const useScroll = () => {

    const [state, setState] = useState({
        scrollY: 0,
        scrollX: 0,
    })

    const handleScrollEvent = useCallback((e) => {
        setState((prevState) => {
            return {
                scrollY: window.scrollY,
                scrollX: window.scrollX,
            }
        })
    }, [])

    useEffect( () => {

        const scrollListener = (e) => {
            handleScrollEvent(e)
        }

        window.addEventListener('scroll',scrollListener)

        return ()=>{
            window.removeEventListener('scroll',scrollListener)
        }

    },[])

    return {
        scrollY: state.scrollY,
        scrollX: state.scrollX
    }
}

export default useScroll