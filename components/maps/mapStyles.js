export const MapStyles = [

    {elementType: 'geometry', stylers: [{color: '#EEF0FB'}]},
    {
        featureType: 'administrative.locality',
        elementType: 'labels.text.fill',
        stylers: [{color: '#000000'}]
    },
    {
        featureType: 'poi',
        elementType: 'labels.text.fill',
        stylers: [{color: '#000000'}]
    },
    {
        featureType: 'poi.park',
        elementType: 'geometry',
        stylers: [{color: '#ffffff'}]
    },
    {
        featureType: 'poi.park',
        elementType: 'labels.text.fill',
        stylers: [{color: '#ffffff'}]
    },
    {
        featureType: 'road',
        elementType: 'geometry',
        stylers: [{color: '#88BBE8'}]//this
    },
    {
        featureType: 'road',
        elementType: 'geometry.stroke',
        stylers: [{color: '#eed3d2'}]
    },
    {
        featureType: 'road',
        elementType: 'labels.text.fill',
        stylers: [{color: '#C9C9C9'}]//this
    },
    {
        featureType: 'road.highway',
        elementType: 'geometry',
        stylers: [{color: '#bb4c49'}]//this
    },
    {
        featureType: 'road.highway',
        elementType: 'geometry.stroke',
        stylers: [{color: '#1f2835'}]
    },
    {
        featureType: 'road.highway',
        elementType: 'labels.text.fill',
        stylers: [{color: '#f3d19c'}]
    },
    {
        featureType: 'transit',
        elementType: 'geometry',
        stylers: [{color: '#2f3948'}]
    },
    {
        featureType: 'transit.station',
        elementType: 'labels.text.fill',
        stylers: [{color: '#d59563'}]
    },
    {
        featureType: 'water',
        elementType: 'geometry',
        stylers: [{color: '#88BBE8'}]//water
    },
    {
        featureType: 'water',
        elementType: 'labels.text.fill',//water
        stylers: [{color: '#88BBE8'}]
    },
    {
        featureType: 'water',
        elementType: 'labels.text.stroke',
        stylers: [{color: '#17263c'}]
    }
];