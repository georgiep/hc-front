import React,{useEffect,useContext} from "react";
import {DispatchContext} from "../context/DataContext"

function useSetNewPageDataToContext(props){
    const dispatch = useContext(DispatchContext)

    useEffect(()=>{
        dispatch({type: 'page' , payload: props.page})
    },[props])
}

export default useSetNewPageDataToContext