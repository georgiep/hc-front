import React, {useEffect,useContext} from "react";

function useWebWorker(initialRequest,sitemap = "{sitemap}"){
    useEffect(() => {
        if(initialRequest){
            (async () => {
                const dataWorker = new Worker(`/public/workers/loadDataToIDB.js`);
                dataWorker.onmessage = ($event) => {
                    if ($event && $event.data) {
                        console.log($event.data)
                    }
                };
                dataWorker.postMessage({msg: ['getData',sitemap]});
            })();
        }
    }, []);
}

export default useWebWorker