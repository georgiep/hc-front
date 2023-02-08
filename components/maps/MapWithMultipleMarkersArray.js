import dynamic from "next/dynamic";
import React from "react";

const MultipleMarkersWithImage = dynamic(() => import("./MultipleMarkersWithImage"))

const MapWithMultipleMarkersArray = ({data}) => {

    return data.items && data.items.map((item,i)=>{
            return(
                <React.Fragment key={`destinations-${i}`}>
                    <div>
                        <MultipleMarkersWithImage data={item}/>
                    </div>
                    <style jsx>
                        {`
                           div{
                              margin-bottom: 100px;
                           }
                        `}
                    </style>
                </React.Fragment>
            )
    })
}

export default MapWithMultipleMarkersArray