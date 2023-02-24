import React, {useState} from 'react'
import {MapStyles} from './mapStyles'
import Text2 from "components/commons/Text2/Text2";
import LineSeparator from "components/body/separators/LineSeparator";
import dynamic from "next/dynamic";
import {mediaBreakPoints} from 'public/globalCss/mediaBreakPoints'
import PrefetchLink from "components/links/PrefetchLink";

const GoogleMapReact = dynamic(() => import("google-map-react"))

const MarkerIcon = () => {
    return(
        <svg width="55" height="50" viewBox="0 0 55 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_2616_852)">
                <path d="M46.9427 13.0078C45.0288 7.32422 39.9883 2.69521 33.7995 0.9375C31.6302 0.322168 29.3971 0 27.2279 0C22.7936 0 18.519 1.25977 14.9461 3.7208C9.65029 7.29492 6.49219 13.0078 6.49219 19.043C6.49219 23.203 7.92773 27.1583 10.6393 30.4688L27.2279 50L43.8164 30.4688C47.8677 25.4883 49.0163 19.131 46.9427 13.0078ZM27.2279 29.2969C21.071 29.2969 16.0625 24.6973 16.0625 19.043C16.0625 13.3887 21.071 8.78906 27.2279 8.78906C33.3848 8.78906 38.3932 13.3887 38.3932 19.043C38.3932 24.6973 33.3848 29.2969 27.2279 29.2969Z" fill="#286387"/>
                <path d="M43.8151 30.4688L27.2266 50V29.2969C33.3835 29.2969 38.3919 24.6973 38.3919 19.043C38.3919 13.3887 33.3835 8.78906 27.2266 8.78906V0C29.3958 0 31.6289 0.322266 33.7982 0.9375C39.987 2.69521 45.0274 7.32422 46.9414 13.0078C49.015 19.131 47.8664 25.4883 43.8151 30.4688Z" fill="#04456D"/>
            </g>
            <defs>
                <clipPath id="clip0_2616_852">
                    <rect width="54.4444" height="50" fill="white"/>
                </clipPath>
            </defs>
        </svg>
    )
}

const MarkerIconActive = () => {
    return(
        <svg width="55" height="50" viewBox="0 0 55 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_2616_852)">
                <path d="M46.9427 13.0078C45.0288 7.32422 39.9883 2.69521 33.7995 0.9375C31.6302 0.322168 29.3971 0 27.2279 0C22.7936 0 18.519 1.25977 14.9461 3.7208C9.65029 7.29492 6.49219 13.0078 6.49219 19.043C6.49219 23.203 7.92773 27.1583 10.6393 30.4688L27.2279 50L43.8164 30.4688C47.8677 25.4883 49.0163 19.131 46.9427 13.0078ZM27.2279 29.2969C21.071 29.2969 16.0625 24.6973 16.0625 19.043C16.0625 13.3887 21.071 8.78906 27.2279 8.78906C33.3848 8.78906 38.3932 13.3887 38.3932 19.043C38.3932 24.6973 33.3848 29.2969 27.2279 29.2969Z" fill="#C43C02"/>
                <path d="M43.8151 30.4688L27.2266 50V29.2969C33.3835 29.2969 38.3919 24.6973 38.3919 19.043C38.3919 13.3887 33.3835 8.78906 27.2266 8.78906V0C29.3958 0 31.6289 0.322266 33.7982 0.9375C39.987 2.69521 45.0274 7.32422 46.9414 13.0078C49.015 19.131 47.8664 25.4883 43.8151 30.4688Z" fill="#992603"/>
            </g>
            <defs>
                <clipPath id="clip0_2616_852">
                    <rect width="54.4444" height="50" fill="white"/>
                </clipPath>
            </defs>
        </svg>
    )
}


const MarkerComponent = ({ text, index, active, href }) => <div id={`marker-${index}`}>
    {active ? <div>
            <PrefetchLink pathname={href.pathname}>
                <MarkerIconActive/>
                <div className={'text-center'} style={{width: '200px'}}>
                    {text}
                </div>
            </PrefetchLink>
        </div>
        : <PrefetchLink pathname={href.pathname}><MarkerIcon/></PrefetchLink>}
</div>

const mapOptions = {
    styles: MapStyles,
    gestureHandling: 'greedy',
    scrollwheel: false
};
function compareAZ( a, b ) {
    if ( a.title < b.title ){
        return -1;
    }
    if ( a.title > b.title ){
        return 1;
    }
    return 0;
}
const MapWithMultipleMarkers = ({data,full}) => {

    const {settings,items,css} = data

    const [markers,setMarkers] = useState(items.sort( compareAZ ))

    const [mapSettings,setMapSettings] = useState({
        center: {
            lat: parseFloat(markers[0].lat),
            lng: parseFloat(markers[0].lng)
        },
        zoom: 12
    })

    const onListItemClick = (i) => {
        markers.map(marker => {
            marker.active = false
        })
        markers[i].active = true
        setMarkers(prevState => ([...markers]))
        setMapSettings(prevState => ({center: { lat: parseFloat(markers[i].lat), lng: parseFloat(markers[i].lng)},zoom: 15}))
    }

    const Markers = markers
        .map((marker,i) => {
            return (
                <MarkerComponent
                    lat={marker.lat}
                    lng={marker.lng}
                    text={marker.title}
                    index={i}
                    active={marker.active}
                    key={i}
                    href={marker.link}
                />
            );
        });

    const mapStyle = {
        height: '816px'
    }

    const containerStyle = {
        padding: full ? '0' : 'inherit'
    }

    const Options = markers
        .map((marker,i) => {
            return (
                <React.Fragment key={`place-${i}`}>
                    <div className={`cursor-pointer ${marker.active ? 'active-option-marker' : ''}`} onClick={() => onListItemClick(i)}>
                        <Text2 text={marker.title} titleStyle={`${css.marker.class} ${css.marker.color} text-uppercase`} tag={css.marker.element}/>
                        <LineSeparator padding={'20px 0'} maxWidth={'100%'}/>
                    </div>
                    <style jsx global>
                        {`
                          .active-option-marker > div{
                            font-weight: 700 !important; 
                          }
                        `}
                    </style>
                </React.Fragment>

            );
        });

    return(
        <>
            <div id={`${items[0].link.pathname.split('/')[1]}`} style={mapStyle} className={`google-map-container ${full ? 'container-map-compositional': ''}`}>

                <div className={`container `} style={containerStyle}>
                    <div className={'row no-gutters'}>
                        <div className={`col-md-6 ${full ? 'container-map-compositional-inner': ''}`} style={mapStyle}>
                            <GoogleMapReact
                                bootstrapURLKeys={{ key: "AIzaSyAo46HXPQBh7NlwdJgtGhVgDHXHXH4iEAc" }}
                                center={mapSettings.center}
                                zoom={mapSettings.zoom}
                            >
                                {Markers}
                            </GoogleMapReact>
                        </div>
                        <div className={'col-md-6'}>
                            <div className={'options'}>
                                {Options}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <style jsx>
                {`
                  .google-map-container{
                     height: 816px;
                  }
                  
                  .options{
                    background: #EFF1FD;
                    padding: 100px 100px 50px 100px;
                    max-height: 816px;
                    overflow: auto;
                    height: 100%;
                  }
                  @media only screen and (max-width: ${mediaBreakPoints.sm}) {
                         .container-map-compositional{
                             height: auto !important;
                        }
                        .container-map-compositional-inner{
                            height: 300px !important;
                        }
                        .options{
                            background: #FFFFFF;
                            padding: 40px 20px;
                            height: 200px;
                        }
                 }
            
                `}
            </style>
        </>

    )
}

export default MapWithMultipleMarkers
