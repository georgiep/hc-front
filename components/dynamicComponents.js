import dynamic from 'next/dynamic'

export const bodyListDynamic = {
    Availability: {
        Template1: dynamic(() => import('components/availability/Form1')),
        Template2: dynamic(() => import('components/availability/Form2')),
        Template3: dynamic(() => import('components/availability/Form3')),
        Template4: dynamic(() => import('components/availability/Form4')),
        Template5: dynamic(() => import('components/availability/Form5')),
    },
    Breadcrumbs:{
        Template1: dynamic(() => import('components/body/breadcrumbs/template1/Template1')),
    },
    Gallery: {
        Template1: dynamic(() => import('components/body/gallery/template1/Template1')),
        Template2: dynamic(() => import('components/body/gallery/template2/Template2'),{ssr:false})
    },
    Amenities: {
        Template1: dynamic(() => import('components/body/rooms/amenities/template1/Template1')),
    },
    Destination: {
        Template1: dynamic(()=>import('components/body/destination/template1/Template1'),{ssr:false})
    },
    BackgroundImgWithText:{
        Template1: dynamic(() => import('components/general/backgroundImgWithText/Template1')),
    },
    Promos: {
        Template1: dynamic(() => import('components/general/promos/Template1')),
        Template2: dynamic(() => import('components/general/promos/Template2')),
    },
    PromoPages: {
        Template1: dynamic(() => import('components/general/promoPages/Template1')),
    },
    ShowRooms: {
        Template1: dynamic(() => import('components/body/rooms/showRooms/template1/Template1')),
        Template2: dynamic(() => import('components/body/rooms/showRooms/template2/Template2')),
        Template3: dynamic(() => import('components/body/rooms/showRooms/template3/Template3')),
        Template4: dynamic(() => import('components/body/rooms/showRooms/template4/Template4')),
        Template5: dynamic(() => import('components/body/rooms/showRooms/template5/Template5')),
        Template6: dynamic(() => import('components/body/rooms/showRooms/template6/Template6'))
    },
    Welcome: {
        Template1: dynamic(() => import('components/body/welcomes/template1/Template1')),
        Template2: dynamic(() => import('components/body/welcomes/template2/Template2')),
        Template3: dynamic(() => import('components/body/welcomes/template3/Template3')),
        Template4: dynamic(() => import('components/body/welcomes/template4/Template4'))
    },
    OffersHightLights:{
        Template1: dynamic(() => import('components/body/offers/singleOffer/template1/Template1')),
        Template2: dynamic(() => import('components/body/offers/singleOffer/template2/Template2')),
        Template3: dynamic(() => import('components/body/highlights/singleHightlights/template1/Template1')),
    },
    ShowOffers: {
        Template1: dynamic(() => import('components/body/offers/showOffers/template1/Template1')),
        Template2: dynamic(() => import('components/displayPostTypes/special-offers/template2/Template2'))
    },
    ShowHotels: {
        Template1: dynamic(() => import('components/displayPostTypes/hotels/template1/Template1')),
    },
    Destinations: {
        Template1: dynamic(() => import('components/displayPostTypes/destinations/template1/Template1'))
    },
    ShowHighlights: {
        Template1: dynamic(() => import('components/body/highlights/showHighlights/template1/Template1')),
    },
    Sliders: {
        Template1: dynamic(() => import('components/body/sliders/template1/Template1')),
        Template2: dynamic(() => import('components/body/sliders/template2/Template2')),
        Template3: dynamic(() => import('components/body/sliders/vertical/VerticalSlider')),
        Template4: dynamic(() => import('components/body/sliders/slideShow/Template1'),{ssr:false}),
    },
    Contact: {
        Template1: dynamic(() => import('components/body/contact/detailsWithMap/DetailsWithMap')),
    },
    Commons: {
        Heading: dynamic(() => import('components/commons/headings/Heading')),
        Text: dynamic(() => import('components/body/text/Text')),
        Separator: dynamic(() => import('components/body/separators/Separator')),
        List: dynamic(() => import('components/commons/list/List')),
        Image: dynamic(() => import('components/body/image/Image')),
        Button: dynamic(() => import('components/commons/buttons/Button')),
        Amenities: dynamic(() => import('components/body/amenities/template1/Template1')),
    },
    General: {
        Breadcrumbs: dynamic(() => import('components/general/breadcrumbs/Template1')),
    },
    Carousel: {
        Template1: dynamic(() => import('components/carousels/template1/Template1')),
        Template2: dynamic(() => import('components/carousels/template2/Template2')),
        Template3: dynamic(() => import('components/carousels/template3/Template3')),
        Multi: dynamic(() => import('components/carousels/MultiCarousel/Template1')),
        LatestPost: dynamic(() => import('components/carousels/latestPosts/Template1')),
        SpecialOffers: dynamic(() => import('components/displayPostTypes/special-offers/carousel/template1/Template1'))
    },
    Tabs: {
        Template1: dynamic(() => import('components/body/tabs/template1/Template1')),
    },
    ImageList: {
        Template1: dynamic(() => import('components/body/list/listOfImages/Template1')),
        Template2: dynamic(() => import('components/body/list/listOfImages/template2/Template2')),
    },
    DisplayPostTypes: {
        Template1: dynamic(() => import('components/displayPostTypes/template1/Template1')),
        Template2: dynamic(() => import('components/displayPostTypes/template2/Template2')),
        Template3: dynamic(() => import('components/displayPostTypes/template3/Template3')),
        Template4: dynamic(() => import('components/displayPostTypes/template4/Template4')),
        Template5: dynamic(() => import('components/displayPostTypes/template5/Template5')),
        Template6: dynamic(() => import('components/displayPostTypes/template6/Template6')),
        Template7: dynamic(() => import('components/displayPostTypes/template7/Template7')),
        Template8: dynamic(() => import('components/displayPostTypes/template8/Template8')),
    },
    Reviews:{
        Bars: dynamic(() => import('components/reviews/reviewBars/ReviewBars')),
        Single: dynamic(() => import('components/reviews/reviewSingle/Template1')),
    },
    SimplePromos:{
        Template1: dynamic(() => import('components/body/promos/template1/Template1')),
    },
    Empty:{
        Empty: dynamic(() => import('components/body/Empty/Empty'))
    },
    Hero:{
        HeroImageWithBookingForm: dynamic(() => import('components/body/hero/HeroImageWithBookingForm')),
        HeroSliderWithBookingForm: dynamic(() => import('components/body/hero/HeroSliderWithBookingForm'))
    },
    Maps:{
        MapWithMultipleMarkers: dynamic(() => import('components/maps/MapWithMultipleMarkers')),
        MultipleMarkersWithImage: dynamic(() => import('components/maps/MultipleMarkersWithImage')),
        MapWithMultipleMarkersArray: dynamic(() => import('components/maps/MapWithMultipleMarkersArray')),
        SimpleMap: dynamic(() => import('components/maps/SimpleMap')),
    },
    Forms: {
        Template1: dynamic(() => import('components/body/forms/template1'))
    },
    Menu: {
        Template1: dynamic(() => import('components/body/menu/Template1'))
    },
    Posts: {
        Template1: dynamic(() => import('components/displayPostTypes/posts/template1/Template1'))
    },
    Modals: {
        Template1: dynamic(() => import('components/body/modals/template1/Template1'))
    }
}

export const headerFooterList = {
    Header: {
        Template1: dynamic(() => import('components/headers/template1/Template1')),
        Template2: dynamic(() => import('components/headers/template2/Template2')),
        Template3: dynamic(() => import('components/headers/template3/Template3'))
    },
    Footer: {
        Template1: dynamic(() => import('components/footers/template1/Template1')),
        Template2: dynamic(() => import('components/footers/template2/Template2')),
        Template3: dynamic(() => import('components/footers/template3/Template3')),
    },
}