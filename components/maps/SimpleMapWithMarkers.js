import {MapStyles} from './mapStyles'
import dynamic from "next/dynamic";
import PrefetchLink from "components/links/PrefetchLink";
import React from "react";
const GoogleMapReact = dynamic(() => import("google-map-react"),{ssr:false})

const mapOptions = {
    styles: MapStyles,
    gestureHandling: 'greedy',
    scrollwheel: false
};

const MarkerComponent = ({ text, index, active, href }) => <div style={{width: '80px', height: '60px'}} id={`marker-${index}`}>
    <PrefetchLink pathname={href.pathname}>
        <div className={'marker-container position-relative d-flex justify-content-between align-items-center'} style={{height: '100%'}}>
            <div className={'position-absolute'}>
                <div className={'active'}>
                    <MarkerIconActive/>
                </div>
                <div className={'inactive'}>
                    <MarkerIconInActive/>
                </div>
            </div>
            <div className={'text-center marker d-flex justify-content-between align-items-center'} >
                <div style={{width: '100%',zIndex: 1}}>
                    {text}
                </div>
            </div>

        </div>

        <style jsx>{`
             .marker-container:hover .inactive{
                display: block;
             }
             .marker-container:hover .active{
                display: none;
             }
             .marker{
                width: 82px;
                z-index: 1;
                height: 66px;
                position: relative;
                left: 0;
                top: -3px;
             }
             .marker:hover{
                color: #ffffff;
             }
             .inactive{
                display: none;
             }
       `}</style>
    </PrefetchLink>
</div>
const SimpleMapWithMarkers = ({data}) => {

    const {mapSettings,mapStyle,items} = data

    const Markers = items
        .map((marker,i) => {
            return (
                <MarkerComponent
                    lat={marker.lat}
                    lng={marker.lng}
                    text={marker.text}
                    index={i}
                    key={i}
                    href={marker.link}
                />
            );
        });


    return(
        <div style={mapStyle}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: 'AIzaSyAo46HXPQBh7NlwdJgtGhVgDHXHXH4iEAc' }}
                defaultCenter={mapSettings.center}
                defaultZoom={mapSettings.zoom}
                options={mapOptions}
            >
                {Markers}
            </GoogleMapReact>
        </div>
    )
}

export default SimpleMapWithMarkers


const MarkerIconInActive = () => {
    return(
        <svg width="80" height="60" viewBox="0 0 80 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M28.8376 54.2608H19C9.05887 54.2608 1 46.2019 1 36.2608V1H79V54.2608H40.6384L34.8893 59L28.8376 54.2608Z" fill="black" stroke="black"/>
        </svg>
    )
}

const MarkerIconActive = () => {
    return(
        <svg width="80" height="61" viewBox="0 0 80 61" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M28.8376 54.2608H19C9.05887 54.2608 1 46.2019 1 36.2608V1H79V54.2608H40.6384L34.8893 59L28.8376 54.2608Z" fill="white" stroke="black" stroke-width="2"/>
        </svg>
    )
}