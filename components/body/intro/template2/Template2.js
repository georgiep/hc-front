import React from 'react'
import dynamic from "next/dynamic";
const SimpleMapWithMarkers = dynamic(() => import("components/maps/SimpleMapWithMarkers"))
import Single from "./Single";

const Template2 = ({ data }) => {

    const { items, css, map } = data

    console.log('d')
    console.log(items)
    console.log(css)
    console.log(map)
    return (
        <>
            <div className={'intro-container-template-1 position-relative'}>

                <div className={'container p-0'}>
                    <div className={'d-flex w-100 flex-row py-5'}>
                        <div className={'col-8 p-0'}>

                            <div className="items-container-inner w-100">
                                <div className="content row justify-content-center align-self-center gutters">
                                    {items &&
                                        items.map((item, index) => {
                                            return (
                                                <div key={index} className="col-md-12">
                                                    <Single item={item} css={css} orderReverse={false} lastItem={index === items.length - 1}/>
                                                </div>
                                            );
                                        })}
                                </div>
                            </div>

                        </div>
                        <div className={'col-4 p-0'}>
                            <SimpleMapWithMarkers data={map}/>
                        </div>
                    </div>
                </div>
            </div>
            <style jsx global>
                {`
                
                `}
            </style>
        </>
    )
}

export default Template2

