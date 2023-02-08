import {MapStyles} from './mapStyles'
import dynamic from "next/dynamic";
const GoogleMapReact = dynamic(() => import("google-map-react"))

const AnyReactComponent = () => <MarkerIcon/>;

const mapOptions = {
    styles: MapStyles,
    gestureHandling: 'greedy',
    scrollwheel: false
};

const SimpleMap = ({data}) => {

    const {mapSettings,mapStyle} = data

    return(
        <div style={mapStyle}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: 'AIzaSyAo46HXPQBh7NlwdJgtGhVgDHXHXH4iEAc' }}
                defaultCenter={mapSettings.center}
                defaultZoom={mapSettings.zoom}
                options={mapOptions}
            >
                <AnyReactComponent
                    lat={mapSettings.lat}
                    lng={mapSettings.lng}
                />
            </GoogleMapReact>
        </div>
    )
}

export default SimpleMap


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
