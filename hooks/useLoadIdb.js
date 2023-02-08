import React, {useEffect,useContext} from "react";

function useLoadIdb(initialRequest){
    useEffect(() => {
        if(initialRequest){
            async function loadIdb() {
                const fs = await import('idb')
            }
            setTimeout(() => {
                loadIdb()
            }, 2500)
        }
    }, []);
}

export default useLoadIdb
