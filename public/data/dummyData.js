export const schemaData = {
  idbName: 'schema',
  pages: [
    {
      page: 'homepage',
      api: '/pages/hotel',
      slug: '/',
      components: [
        {
          component_name: 'Sliders',
          template: 'Template1',
          order: 0,
        },
        {
          component_name: 'Availability',
          template: 'Template4',
          order: 1,
        },
        {
          component_name: 'Welcome',
          template: 'Template1',
          order: 2,
        },
        {
          component_name: 'ShowRooms',
          template: 'Template1',
          order: 3,
        },
        {
          component_name: 'ShowOffers',
          template: 'Template1',
          order: 4,
        },
        {
          component_name: 'ShowHighlights',
          template: 'Template1',
          order: 5,
        },
        {
          component_name: 'Welcome',
          template: 'Template2',
          order: 6,
        },
        {
          component_name: 'OffersHightLights',
          template: 'Template1',
          order: 7,
        },
        {
          component_name: 'OffersHightLights',
          template: 'Template2',
          order: 8,
        }
      ],
    },
    {
      page: 'rooms',
      api: '/pages/rooms',
      slug: '/accommodation',
      components: [
        {
          component_name: 'BackgroundImgWithText',
          template: 'Template1',
          order: 0,
        },
        {
          component_name: 'ShowRooms',
          template: 'Template1',
          order: 1,
        },
        {
          component_name: 'ShowRooms',
          template: 'Template2',
          order: 3,
        },
        {
          component_name: 'ShowRooms',
          template: 'Template3',
          order: 4,
        },
        {
          component_name: 'ShowRooms',
          template: 'Template4',
          order: 5,
        },
        {
          component_name: 'ShowRooms',
          template: 'Template5',
          order: 6,
        },
        {
          component_name: 'ShowRooms',
          template: 'Template6',
          order: 5,
        },
        {
          component_name: 'Promos',
          template: 'Template1',
          order: 6,
        },
        {
          component_name: 'Promos',
          template: 'Template2',
          order: 7,
        },
        {
          component_name: 'PromoPages',
          template: 'Template1',
          order: 8,
        },
        {
          component_name: 'Amenities',
          template: 'Template1',
          order: 9,
        },
        {
          component_name: 'Gallery',
          template: 'Template1',
          order: 10,
        },
        {
          component_name: 'Sliders',
          template: 'Template2',
          order: 11,
        },
      ],
    },
    {
      page: 'contact',
      api: '/pages/contact',
      slug: '/contact',
      components: [
        {
          component_name: 'Welcome',
          template: 'Template1',
          order: 0,
        },
      ],
    },
    {
      page: 'about',
      api: '/pages/about',
      slug: '/about',
      components: [
        {
          component_name: 'Welcome',
          template: 'Template1',
          order: 0,
        },
      ],
    },
  ],
  header: {
    component_name: 'Header',
    template: 'Template1',
  },
  footer: {
    component_name: 'Footer',
    template: 'Template2',
  },
}

export const headerData = {
  idbName: 'header',
  logo: {
    path: '/images/logo1.png',
    pathname: '/hotel',
    api: '/pages/hotel',
  },
  menu: [
    {
      pathname: '/hotel',
      text: 'HOTEL',
      api: '/pages/hotel',
    },
    {
      pathname: '/accommodation',
      text: 'ROOMS',
      api: '/pages/rooms',
      submenu:[
        {
          pathname: '/accommodation1',
          text: 'ROOMS1',
          api: '/pages/rooms1',
        }
      ]
    },
    {
      pathname: '/dining',
      text: 'DINING',
      api: '/pages/dining',
    },
    {
      pathname: '/special-offers',
      text: 'SPECIAL OFFERS',
      api: '/pages/special-offers',
    },
    {
      pathname: '/contact',
      text: 'CONTACT',
      api: '/pages/contact',
    },
  ],
  button: {
    url: 'http://localhost:5555/',
    text: 'BOOK NOW',
    backgroundColor: 'white',
    color: 'black',
  },
}

export const homeData = {
  idbName: '/pages/hotel',
  0: {
    items: ['images/1.jpg', 'images/2.jpg'],
    heading: 'Our Land, Our Home',
    subHeading:
      'Very elegant collection of hotel mattresses and boxing beds for the most demanding clients',
    button: {
      pathname: '/accommodation',
      api: '/pages/rooms',
      text: 'SHOW LUXURY',
    },
    css: {
      heading: {
        desktop: {
          fontStyle: 'normal',
          fontWeight: 'normal',
          fontSize: '62px',
          lineHeight: '74px',
          color: '#ffffff',
          letterSpacing: '0em',
          fontFamily: 'Chronicle Display',
        },
        tablet: {
          fontStyle: 'normal',
          fontWeight: 'normal',
          fontSize: '46px',
          lineHeight: '55px',
          color: '#ffffff',
          fontFamily: 'Chronicle Display',
        },
        mobile: {
          fontStyle: 'normal',
          fontWeight: 'normal',
          fontSize: '10px',
          lineHeight: '55px',
          color: '#ffffff',
          fontFamily: 'SF Pro Display',
        },
      },
      subHeading: {
        desktop: {
          fontStyle: 'normal',
          fontWeight: '400',
          fontSize: '20px',
          lineHeight: '24px',
          color: '#ffffff',
          fontFamily: 'SF Pro Display',
        },
        tablet: {
          fontStyle: 'normal',
          fontWeight: 'normal',
          fontSize: '46px',
          lineHeight: '55px',
          color: '#ffffff',
          fontFamily: 'Chronicle Display',
        },
        mobile: {
          fontStyle: 'normal',
          fontWeight: 'normal',
          fontSize: '10px',
          lineHeight: '55px',
          color: '#ffffff',
          fontFamily: 'Chronicle Display',
        },
      },
      button: {
        desktop: {
          fontStyle: 'normal',
          fontWeight: '700',
          fontSize: '12px',
          lineHeight: '14px',
          color: '#ffffff',
          fontFamily: 'SF Pro Display',
          background: 'transparent',
          padding: '19px 38px',
          border: '1px solid',
        },
        tablet: {
          fontStyle: 'normal',
          fontWeight: 'normal',
          fontSize: '46px',
          lineHeight: '55px',
          color: '#ffffff',
          fontFamily: 'Chronicle Display',
        },
        mobile: {
          fontStyle: 'normal',
          fontWeight: 'normal',
          fontSize: '10px',
          lineHeight: '55px',
          color: '#ffffff',
          fontFamily: 'Chronicle Display',
        },
      },
    }
  },
  1: {
    button: {
      text: 'SHOW LUXURY',
      url: '#',
    },
  },
  2: {
    title: 'A warm welcome back to Hotel world.',
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem",
    images: {
      backgroundImage: '/images/welcomes/background.jpg',
      primaryImage: '/images/welcomes/photo.jpg',
    },
    message: 'Welcome to our hideaway!',
    fullname: 'Georgia Papadopoulos',
    role: 'General manager',
    css: {
      title: {
        desktop: {
          fontStyle: 'normal',
          fontWeight: 'normal',
          fontSize: '46px',
          lineHeight: '55px',
          color: '#ffffff',
          fontFamily: 'Chronicle Display',
        },
        tablet: {
          fontStyle: 'normal',
          fontWeight: 'normal',
          fontSize: '46px',
          lineHeight: '55px',
          color: '#ffffff',
          fontFamily: 'Chronicle Display',
        },
        mobile: {
          fontStyle: 'normal',
          fontWeight: 'normal',
          fontSize: '10px',
          lineHeight: '55px',
          color: '#ffffff',
          fontFamily: 'Chronicle Display',
        },
      },
      text: {
        desktop: {
          fontStyle: 'normal',
          fontWeight: '300',
          fontSize: '15px',
          lineHeight: '24px',
          color: '#ffffff',
          fontFamily: 'SF Pro Display',
          letterSpacing: '0.07em',
        },
        tablet: {
          fontStyle: 'normal',
          fontWeight: '300',
          fontSize: '15px',
          lineHeight: '24px',
          letterSpacing: '0.07em',
          color: '#ffffff',
          fontFamily: 'SF Pro Display',
        },
        mobile: {
          fontStyle: 'normal',
          fontWeight: '300',
          fontSize: '15px',
          lineHeight: '24px',
          letterSpacing: '0.07em',
          color: '#ffffff',
          fontFamily: 'SF Pro Display',
        },
      },
      message: {
        desktop: {
          fontStyle: 'normal',
          fontWeight: '300',
          fontSize: '15px',
          lineHeight: '18px',
          color: '#ffffff',
          fontFamily: 'Chronicle Display',
        },
        tablet: {
          fontStyle: 'normal',
          fontWeight: '300',
          fontSize: '15px',
          lineHeight: '18px',
          color: '#ffffff',
          fontFamily: 'Chronicle Display',
        },
        mobile: {
          fontStyle: 'normal',
          fontWeight: '300',
          fontSize: '15px',
          lineHeight: '18px',
          color: '#ffffff',
          fontFamily: 'Chronicle Display',
        },
      },
      fullname: {
        desktop: {
          fontStyle: 'normal',
          fontWeight: 'normal',
          fontSize: '18px',
          lineHeight: '22px',
          opacity: '0.8',
          color: '#ffffff',
          fontFamily: 'Chronicle Display',
        },
        tablet: {
          fontStyle: 'normal',
          fontWeight: 'normal',
          fontSize: '18px',
          lineHeight: '22px',
          opacity: '0.8',
          color: '#ffffff',
          fontFamily: 'Chronicle Display',
        },
        mobile: {
          fontStyle: 'normal',
          fontWeight: 'normal',
          fontSize: '18px',
          lineHeight: '22px',
          opacity: '0.8',
          color: '#ffffff',
          fontFamily: 'Chronicle Display',
        },
      },
      role: {
        desktop: {
          fontStyle: 'normal',
          fontWeight: 'normal',
          fontSize: '15px',
          lineHeight: '18px',
          opacity: '0.8',
          color: '#ffffff',
          fontFamily: 'Chronicle Display',
        },
        tablet: {
          fontStyle: 'normal',
          fontWeight: 'normal',
          lineHeight: '13px',
          opacity: '0.8',
          color: '#ffffff',
          fontFamily: 'Chronicle Display',
        },
        mobile: {
          fontStyle: 'normal',
          fontWeight: 'normal',
          lineHeight: '13px',
          opacity: '0.8',
          color: '#ffffff',
          fontFamily: 'Chronicle Display',
        },
      },
    },
    colors: {
      background: '#000000',
    },
  },
  3: {
    idbName: 'pages/rooms',
    title: 'ROOMS & SUITES',
    subtitle: 'private repeats',
    button: {
      pathname: '/accommodation',
      api: '/pages/rooms',
      text: 'ALL ROOMS',
    },
    rooms: [
      {
        image: '/images/rooms/room1.jpg',
        info: 'Suite with mountain view',
        button: {
          pathname: '/accommodation/room1',
          api: '/pages/room/room1',
          text: 'DISCOVER MORE',
        },
      },
      {
        image: '/images/rooms/room2.jpg',
        info: 'Superior suite with mountain view',
        button: {
          pathname: '/accommodation/room1',
          api: '/pages/room/room1',
          text: 'DISCOVER MORE',
        },
      },
      {
        image: '/images/rooms/room3.jpg',
        info: 'Panorama suite',
        button: {
          pathname: '/accommodation/room1',
          api: '/pages/room/room1',
          text: 'DISCOVER MORE',
        },
      },
      {
        image: '/images/rooms/room4.jpg',
        info: 'Grand Forest suite',
        button: {
          pathname: '/accommodation/room1',
          api: '/pages/room/room1',
          text: 'DISCOVER MORE',
        },
      },
    ],
    css: {
      title: {
        desktop: {
          fontStyle: 'normal',
          fontWeight: 'normal',
          fontSize: '46px',
          lineHeight: '55px',
          color: '#ffffff',
          fontFamily: 'Chronicle Display',
        },
        tablet: {
          fontStyle: 'normal',
          fontWeight: 'normal',
          fontSize: '46px',
          lineHeight: '55px',
          color: '#ffffff',
          fontFamily: 'Chronicle Display',
        },
        mobile: {
          fontStyle: 'normal',
          fontWeight: 'normal',
          fontSize: '10px',
          lineHeight: '55px',
          color: '#ffffff',
          fontFamily: 'Chronicle Display',
        },
      },
      subtitle: {
        desktop: {
          fontStyle: 'normal',
          fontWeight: 'normal',
          fontSize: '15px',
          lineHeight: '18px',
          color: '#ffffff',
          fontFamily: 'Chronicle Display',
        },
        tablet: {
          fontStyle: 'normal',
          fontWeight: 'normal',
          fontSize: '15px',
          lineHeight: '18px',
          color: '#ffffff',
          fontFamily: 'Chronicle Display',
        },
        mobile: {
          fontStyle: 'normal',
          fontWeight: 'normal',
          fontSize: '10px',
          lineHeight: '18px',
          color: '#ffffff',
          fontFamily: 'Chronicle Display',
        },
      },
      info: {
        desktop: {
          fontStyle: 'normal',
          fontWeight: 'normal',
          fontSize: '24px',
          lineHeight: '29px',
          color: '#ffffff',
          fontFamily: 'Chronicle Display',
        },
        tablet: {
          fontStyle: 'normal',
          fontWeight: 'normal',
          fontSize: '24px',
          lineHeight: '29px',
          color: '#ffffff',
          fontFamily: 'Chronicle Display',
        },
        mobile: {
          fontStyle: 'normal',
          fontWeight: 'normal',
          fontSize: '24px',
          lineHeight: '29px',
          color: '#ffffff',
          fontFamily: 'Chronicle Display',
        },
      },
      button: {
        desktop: {
          background: 'transparent',
          padding: '0',
          border: '0',
          fontStyle: 'normal',
          fontWeight: '600',
          fontSize: '11px',
          lineHeight: '13px',
          color: '#ffffff',
          fontFamily: 'Chronicle Display',
        },
        tablet: {
          background: 'transparent',
          padding: '10px',
          border: '0',
          fontStyle: 'normal',
          fontWeight: '600',
          fontSize: '11px',
          lineHeight: '13px',
          color: '#ffffff',
          fontFamily: 'Chronicle Display',
        },
        mobile: {
          background: 'transparent',
          padding: '10px',
          border: '0',
          fontStyle: 'normal',
          fontWeight: '600',
          fontSize: '11px',
          lineHeight: '13px',
          color: '#ffffff',
          fontFamily: 'Chronicle Display',
        },
      },
      btnText: {
        desktop: {
          background: 'transparent',
          padding: '10px',
          border: '0',
          fontStyle: 'normal',
          fontWeight: '600',
          fontSize: '11px',
          lineHeight: '13px',
          color: '#ffffff',
          fontFamily: 'Chronicle Display',
        },
        tablet: {
          background: 'transparent',
          padding: '10px',
          border: '0',
          fontStyle: 'normal',
          fontWeight: '600',
          fontSize: '11px',
          lineHeight: '13px',
          color: '#ffffff',
          fontFamily: 'Chronicle Display',
        },
        mobile: {
          background: 'transparent',
          padding: '10px',
          border: '0',
          fontStyle: 'normal',
          fontWeight: '600',
          fontSize: '11px',
          lineHeight: '13px',
          color: '#ffffff',
          fontFamily: 'Chronicle Display',
        },
      },
    },
  },
  4: {
    idbName: 'offer',
    title: 'Special offers',
    button: {
      pathname: '/accommodation',
      api: '/pages/rooms',
      text: 'ALL SPECIALS',
    },
    offers: [
      {
        id: 1,
        image: '/images/rooms/room1.jpg',
        title: 'SPA TIME YOU & ME',
        button: {
          text: 'DISCOVER MORE',
        },
      },
      {
        id: 2,
        image: '/images/rooms/room1.jpg',
        title: 'SPA TIME YOU & ME',
        button: {
          text: 'DISCOVER MORE',
        },
      },
      {
        id: 3,
        image: '/images/rooms/room1.jpg',
        title: 'SPA TIME YOU & ME',
        button: {
          text: 'DISCOVER MORE',
        },
      },
      {
        id: 4,
        image: '/images/rooms/room1.jpg',
        title: 'SPA TIME YOU & ME',
        button: {
          text: 'DISCOVER MORE',
        },
      },
    ],
    css: {
      title: {
        desktop: {
          fontStyle: 'normal',
          fontWeight: 'normal',
          fontSize: '46px',
          lineHeight: '55px',
          color: '#323B43',
          fontFamily: 'Chronicle Display',
        },
        tablet: {
          fontStyle: 'normal',
          fontWeight: 'normal',
          fontSize: '46px',
          lineHeight: '55px',
          color: '#323B43',
          fontFamily: 'Chronicle Display',
        },
        mobile: {
          fontStyle: 'normal',
          fontWeight: 'normal',
          fontSize: '46px',
          lineHeight: '55px',
          color: '#323B43',
          fontFamily: 'Chronicle Display',
        },
      },
      allRooms: {
        desktop: {
          background: 'transparent',
          border: '0',
          padding: '0',
          fontFamily: 'SF Pro Display',
          fontStyle: 'normal',
          fontWeight: '600',
          fontSize: '11px',
          lineHeight: '13px',
          letterSpacing: '0.07em',
          color: '#323B43',
        },
        tablet: {
          background: 'transparent',
          border: '0',
          padding: '0',
          fontFamily: 'SF Pro Display',
          fontStyle: 'normal',
          fontWeight: '600',
          fontSize: '11px',
          lineHeight: '13px',
          letterSpacing: '0.07em',
          color: '#323B43',
        },
        mobile: {
          background: 'transparent',
          border: '0',
          padding: '0',
          fontFamily: 'SF Pro Display',
          fontStyle: 'normal',
          fontWeight: '600',
          fontSize: '11px',
          lineHeight: '13px',
          letterSpacing: '0.07em',
          color: '#323B43',
        },
      },
      info: {
        desktop: {
          fontStyle: 'normal',
          fontWeight: 'normal',
          fontSize: '24px',
          lineHeight: '29px',
          color: '#323B43',
          fontFamily: 'Chronicle Display',
        },
        tablet: {
          fontStyle: 'normal',
          fontWeight: 'normal',
          fontSize: '24px',
          lineHeight: '29px',
          color: '#323B43',
          fontFamily: 'Chronicle Display',
        },
        mobile: {
          fontStyle: 'normal',
          fontWeight: 'normal',
          fontSize: '24px',
          lineHeight: '29px',
          color: '#323B43',
          fontFamily: 'Chronicle Display',
        },
      },
      button: {
        desktop: {
          background: 'transparent',
          padding: '0',
          border: '0',
          fontStyle: 'normal',
          fontWeight: '600',
          fontSize: '11px',
          lineHeight: '13px',
          color: '#323B43',
          letterSpacing: '0.07em',
          fontFamily: 'Chronicle Display',
        },
        tablet: {
          background: 'transparent',
          padding: '10px',
          border: '0',
          fontStyle: 'normal',
          fontWeight: '600',
          fontSize: '11px',
          lineHeight: '13px',
          color: '#323B43',
          letterSpacing: '0.07em',
          fontFamily: 'Chronicle Display',
        },
        mobile: {
          background: 'transparent',
          padding: '10px',
          border: '0',
          fontStyle: 'normal',
          fontWeight: '600',
          fontSize: '11px',
          lineHeight: '13px',
          color: '#323B43',
          letterSpacing: '0.07em',
          fontFamily: 'Chronicle Display',
        },
      },
    },
  },
  5: {
    title: 'Highlights',
    subtitle: 'Lorem ipsum',
    highlights: [
      {
        id: '1',
        photo: '/images/highlights/highlight1.jpg',
        title: 'Our Restaurant',
        button: {},
      },
      {
        id: '2',
        photo: '/images/highlights/highlight2.jpg',
        title: 'On site waterpark',
        button: {},
      },
      {
        id: '3',
        photo: '/images/highlights/highlight3.jpg',
        title: 'Architecture',
        button: {},
      },
      {
        id: '4',
        photo: '/images/highlights/highlight1.jpg',
        title: 'Our Restaurant',
        button: {},
      },
      {
        id: '5',
        photo: '/images/highlights/highlight2.jpg',
        title: 'On site waterpark',
        button: {},
      },
      {
        id: '6',
        photo: '/images/highlights/highlight3.jpg',
        title: 'Architecture',
        button: {},
      },
    ],
    css: {
      title: {
        desktop: {
          fontStyle: 'normal',
          fontWeight: 'normal',
          fontSize: '24px',
          lineHeight: '29px',
          color: '#323B43',
          fontFamily: 'Chronicle Display',
        },
        tablet: {
          fontStyle: 'normal',
          fontWeight: 'normal',
          fontSize: '46px',
          lineHeight: '55px',
          color: '#323B43',
          fontFamily: 'Chronicle Display',
        },
        mobile: {
          fontStyle: 'normal',
          fontWeight: 'normal',
          fontSize: '10px',
          lineHeight: '55px',
          color: '#323B43',
          fontFamily: 'Chronicle Display',
        },
      },
      subtitle: {
        desktop: {
          fontStyle: 'normal',
          fontWeight: 'normal',
          fontSize: '15px',
          lineHeight: '18px',
          color: '#323B43',
          fontFamily: 'Chronicle Display',
        },
        tablet: {
          fontStyle: 'normal',
          fontWeight: 'normal',
          fontSize: '15px',
          lineHeight: '18px',
          color: '#323B43',
          fontFamily: 'Chronicle Display',
        },
        mobile: {
          fontStyle: 'normal',
          fontWeight: 'normal',
          fontSize: '10px',
          lineHeight: '18px',
          color: '#323B43',
          fontFamily: 'Chronicle Display',
        },
      }
    }
  },
  6: {
    heading: "Grand Forest Hotel is a small 5 star hotel set on the fringe of a black pine forest, on top of a private mountain, deep in the rugged region of Epirus, in north-western Greece.",
    image: '/images/welcomes/group2.png',
    css: {
      heading: {
        desktop: {
          fontStyle: 'normal',
          fontWeight: 'normal',
          fontSize: '44px',
          lineHeight: '53px',
          color: '#000000',
          letterSpacing: '0em',
          fontFamily: 'Chronicle Display',
          textAlign: 'center'
        },
        tablet: {
          fontStyle: 'normal',
          fontWeight: 'normal',
          fontSize: '46px',
          lineHeight: '55px',
          color: '#ffffff',
          fontFamily: 'Chronicle Display',
        },
        mobile: {
          fontStyle: 'normal',
          fontWeight: 'normal',
          fontSize: '10px',
          lineHeight: '55px',
          color: '#ffffff',
          fontFamily: 'Chronicle Display',
        },
      },
    }
  },
  7: {
    items:[
      {
        image: '/images/offers/offer1.jpg',
        heading: 'Amazing Offer! - Save up to 30%',
        subHeading: 'Leonardo Plaza Cypria Maris',
        text: 'We welcome you back with amazing offers! Book early with Free cancellation. Join for free our Members Club and Book between 01/06/2021 - 15/06/2021',
        offer: {
          discount: '30%',
          off: 'off',
          valid: 'Until Dec 18, 2020'
        },
        link: {
          pathname: '#',
          text: 'Buy now',
        }
      },
      {
        image: '/images/offers/offer1.jpg',
        heading: 'Amazing Offer! - Save up to 30%',
        subHeading: 'Leonardo Plaza Cypria Maris',
        text: 'We welcome you back with amazing offers! Book early with Free cancellation. Join for free our Members Club and Book between 01/06/2021 - 15/06/2021',
        offer: {
          discount: '30%',
          off: 'off',
          valid: 'Until Dec 18, 2020'
        },
        link: {
          pathname: '#',
          text: 'Buy now',
        }
      },
      {
        image: '/images/offers/offer1.jpg',
        heading: 'Amazing Offer! - Save up to 30%',
        subHeading: 'Leonardo Plaza Cypria Maris',
        text: 'We welcome you back with amazing offers! Book early with Free cancellation. Join for free our Members Club and Book between 01/06/2021 - 15/06/2021',
        offer: {
          discount: '30%',
          off: 'off',
          valid: 'Until Dec 18, 2020'
        },
        link: {
          pathname: '#',
          text: 'Buy now',
        }
      },
      {
        image: '/images/offers/offer1.jpg',
        heading: 'Amazing Offer! - Save up to 30%',
        subHeading: 'Leonardo Plaza Cypria Maris',
        text: 'We welcome you back with amazing offers! Book early with Free cancellation. Join for free our Members Club and Book between 01/06/2021 - 15/06/2021',
        offer: {
          discount: '30%',
          off: 'off',
          valid: 'Until Dec 18, 2020'
        },
        link: {
          pathname: '#',
          text: 'Buy now',
        }
      }
    ],
    css: {
      heading: {
        desktop: {
          fontStyle: 'normal',
          fontWeight: '600',
          fontSize: '28px',
          lineHeight: '33px',
          color: '#000',
          letterSpacing: '0em',
          fontFamily: 'SF Pro Display',
        },
        tablet: {
          fontStyle: 'normal',
          fontWeight: 'normal',
          fontSize: '46px',
          lineHeight: '55px',
          color: '#ffffff',
          fontFamily: 'Chronicle Display',
        },
        mobile: {
          fontStyle: 'normal',
          fontWeight: 'normal',
          fontSize: '10px',
          lineHeight: '55px',
          color: '#000',
          fontFamily: 'SF Pro Display',
        },
      },
      subHeading: {
        desktop: {
          fontStyle: 'normal',
          fontWeight: '400',
          fontSize: '17px',
          lineHeight: '24px',
          color: '#000',
          fontFamily: 'SF Pro Display',
          letterSpacing: '0em',
        },
        tablet: {
          fontStyle: 'normal',
          fontWeight: 'normal',
          fontSize: '46px',
          lineHeight: '55px',
          color: '#000',
          fontFamily: 'Chronicle Display',
        },
        mobile: {
          fontStyle: 'normal',
          fontWeight: 'normal',
          fontSize: '10px',
          lineHeight: '55px',
          color: '#000',
          fontFamily: 'Chronicle Display',
        },
      },
      text: {
        desktop: {
          fontStyle: 'normal',
          fontWeight: '400',
          fontSize: '16px',
          lineHeight: '24px',
          color: '#000',
          fontFamily: 'SF Pro Display',
        },
        tablet: {
          fontStyle: 'normal',
          fontWeight: 'normal',
          fontSize: '46px',
          lineHeight: '55px',
          color: '#ffffff',
          fontFamily: 'Chronicle Display',
        },
        mobile: {
          fontStyle: 'normal',
          fontWeight: 'normal',
          fontSize: '10px',
          lineHeight: '55px',
          color: '#ffffff',
          fontFamily: 'Chronicle Display',
        },
      },
      link: {
        desktop: {
          fontStyle: 'normal',
          fontWeight: '700',
          fontSize: '16px',
          lineHeight: '20px',
          color: '#323B43',
          fontFamily: 'SF Pro Display',
          background: 'transparent',
          padding: '15px 33px',
          border: '1px solid #323B43',
          letterSpacing: '0px'
        },
        tablet: {
          fontStyle: 'normal',
          fontWeight: 'normal',
          fontSize: '46px',
          lineHeight: '55px',
          color: '#ffffff',
          fontFamily: 'Chronicle Display',
        },
        mobile: {
          fontStyle: 'normal',
          fontWeight: 'normal',
          fontSize: '10px',
          lineHeight: '55px',
          color: '#ffffff',
          fontFamily: 'Chronicle Display',
        },
      },
    }
  },
  8:{
    heading: "Special Offers",
    items:[
      {
        discount: '30%',
        off: 'off',
        valid: 'Until Dec 18, 2020',
        text: 'ALL Members cards',
        link: {
          pathname: '#',
          text: 'SHOW ME MORE',
        }
      },
      {
        discount: '40%',
        off: 'off',
        valid: 'Until Dec 18, 2020',
        text: 'ALL Members cards',
        link: {
          pathname: '#',
          text: 'SHOW ME MORE',
        }
      },
    ],
    css: {
      heading: {
        desktop: {
          fontStyle: 'normal',
          fontWeight: '400',
          fontSize: '55px',
          lineHeight: '79px',
          color: '#000',
          letterSpacing: '0em',
          fontFamily: 'Chronicle Display'
        },
        tablet: {
          fontStyle: 'normal',
          fontWeight: 'normal',
          fontSize: '46px',
          lineHeight: '55px',
          color: '#ffffff',
          fontFamily: 'Chronicle Display',
        },
        mobile: {
          fontStyle: 'normal',
          fontWeight: 'normal',
          fontSize: '10px',
          lineHeight: '55px',
          color: '#000',
          fontFamily: 'SF Pro Display',
        },
      },
      link: {
        desktop: {
          fontStyle: 'normal',
          fontWeight: '700',
          fontSize: '16px',
          lineHeight: '20px',
          color: '#fff',
          fontFamily: 'SF Pro Display',
          background: 'transparent',
          padding: '0',
          border: '0',
          letterSpacing: '0px'
        },
        tablet: {
          fontStyle: 'normal',
          fontWeight: 'normal',
          fontSize: '46px',
          lineHeight: '55px',
          color: '#ffffff',
          fontFamily: 'Chronicle Display',
        },
        mobile: {
          fontStyle: 'normal',
          fontWeight: 'normal',
          fontSize: '10px',
          lineHeight: '55px',
          color: '#ffffff',
          fontFamily: 'Chronicle Display',
        },
      },
    }
  }
}

export const footerData = {
  idbName: 'footer',
  top: {
    heading: 'ARE YOU INTERESTED?',
    subHeading: 'In case of any questions, please contact us',
    telephone: '+30 210 45 00029',
    button: {
      text: '',
      url: '#',
    },
  },
  center: {
    0: {
      pages: [
        {
          button: {
            text: 'The Hotel',
            url: '#',
          },
          button: {
            text: 'Our Rooms',
            url: '#',
          },
          button: {
            text: 'Offers',
            url: '#',
          },
          button: {
            text: 'Services',
            url: '#',
          },
        },
      ],
    },
    1: {
      pages: [
        {
          button: {
            text: 'Covid 19',
            url: '#',
          },
          button: {
            text: 'Destination Guide',
            url: '#',
          },
          button: {
            text: 'My Booking',
            url: '#',
          },
          button: {
            text: 'Contact us',
            url: '#',
          },
        },
      ],
    },
  },
  bottom: {
    heading: 'Newsletter sign up',
    subheading: 'SIGN UP FOR SPECIAL OFFERS',
    placeholder: 'Enter your email',
    terms:
      'By submitting this form, I agree to havong my personal and contact information processed',
    logo: '/images/logo.jpg',
  },
}

export const sitemapData = {
  idbName: 'sitemap',
  pages: [
    {
      page: 'homepage',
      api: '/pages/hotel',
    },
    {
      page: 'contact',
      api: '/pages/contact',
    },
    {
      page: 'about',
      api: '/pages/about',
    },
  ],
}

export const roomsData = {
  idbName: '/pages/rooms',
  0: {
    title: 'Rooms & Suites',
    image: '/images/pic.jpg',
    css: {
      title: {
        desktop: {
          fontStyle: 'normal',
          fontWeight: 400,
          fontSize: '62px',
          lineHeight: '74px',
          color: '#ffffff',
          fontFamily: 'Chronicle Display',
        },
        tablet: {
          fontStyle: 'normal',
          fontWeight: 'normal',
          fontSize: '24px',
          lineHeight: '29px',
          color: '#ffffff',
          fontFamily: 'Chronicle Display',
        },
        mobile: {
          fontStyle: 'normal',
          fontWeight: 'normal',
          fontSize: '24px',
          lineHeight: '29px',
          color: '#ffffff',
          fontFamily: 'Chronicle Display',
        },
      },
      image: {
        desktop: {
          fontStyle: 'normal',
          fontWeight: 'normal',
          fontSize: '24px',
          lineHeight: '29px',
          color: '#ffffff',
          fontFamily: 'Chronicle Display',
        },
        tablet: {
          fontStyle: 'normal',
          fontWeight: 'normal',
          fontSize: '24px',
          lineHeight: '29px',
          color: '#ffffff',
          fontFamily: 'Chronicle Display',
        },
        mobile: {
          fontStyle: 'normal',
          fontWeight: 'normal',
          fontSize: '24px',
          lineHeight: '29px',
          color: '#ffffff',
          fontFamily: 'Chronicle Display',
        },
      },
    },
  },
  1: {
    title: 'ROOMS & SUITES',
    subtitle: 'private repeats',
    button: {
      pathname: '/accommodation',
      api: '/pages/rooms',
      text: 'ALL ROOMS',
    },
    rooms: [
      {
        image: '/images/rooms/room1.jpg',
        info: 'Suite with mountain view',
        button: {
          pathname: '/accommodation/room1',
          api: '/pages/room/room1',
          text: 'DISCOVER MORE',
        },
      },
      {
        image: '/images/rooms/room2.jpg',
        info: 'Superior suite with mountain view',
        button: {
          pathname: '/accommodation/room1',
          api: '/pages/room/room1',
          text: 'DISCOVER MORE',
        },
      },
      {
        image: '/images/rooms/room3.jpg',
        info: 'Panorama suite',
        button: {
          pathname: '/accommodation/room1',
          api: '/pages/room/room1',
          text: 'DISCOVER MORE',
        },
      },
      {
        image: '/images/rooms/room4.jpg',
        info: 'Grand Forest suite',
        button: {
          pathname: '/accommodation/room1',
          api: '/pages/room/room1',
          text: 'DISCOVER MORE',
        },
      },
    ],
    css: {
      title: {
        desktop: {
          fontStyle: 'normal',
          fontWeight: 'normal',
          fontSize: '46px',
          lineHeight: '55px',
          color: '#ffffff',
          fontFamily: 'Chronicle Display',
        },
        tablet: {
          fontStyle: 'normal',
          fontWeight: 'normal',
          fontSize: '46px',
          lineHeight: '55px',
          color: '#ffffff',
          fontFamily: 'Chronicle Display',
        },
        mobile: {
          fontStyle: 'normal',
          fontWeight: 'normal',
          fontSize: '10px',
          lineHeight: '55px',
          color: '#ffffff',
          fontFamily: 'Chronicle Display',
        },
      },
      subtitle: {
        desktop: {
          fontStyle: 'normal',
          fontWeight: 'normal',
          fontSize: '15px',
          lineHeight: '18px',
          color: '#ffffff',
          fontFamily: 'Chronicle Display',
        },
        tablet: {
          fontStyle: 'normal',
          fontWeight: 'normal',
          fontSize: '15px',
          lineHeight: '18px',
          color: '#ffffff',
          fontFamily: 'Chronicle Display',
        },
        mobile: {
          fontStyle: 'normal',
          fontWeight: 'normal',
          fontSize: '10px',
          lineHeight: '18px',
          color: '#ffffff',
          fontFamily: 'Chronicle Display',
        },
      },
      info: {
        desktop: {
          fontStyle: 'normal',
          fontWeight: 'normal',
          fontSize: '24px',
          lineHeight: '29px',
          color: '#ffffff',
          fontFamily: 'Chronicle Display',
        },
        tablet: {
          fontStyle: 'normal',
          fontWeight: 'normal',
          fontSize: '24px',
          lineHeight: '29px',
          color: '#ffffff',
          fontFamily: 'Chronicle Display',
        },
        mobile: {
          fontStyle: 'normal',
          fontWeight: 'normal',
          fontSize: '24px',
          lineHeight: '29px',
          color: '#ffffff',
          fontFamily: 'Chronicle Display',
        },
      },
      button: {
        desktop: {
          background: 'transparent',
          padding: '0',
          border: '0',
          fontStyle: 'normal',
          fontWeight: '600',
          fontSize: '11px',
          lineHeight: '13px',
          color: '#ffffff',
          fontFamily: 'Chronicle Display',
        },
        tablet: {
          background: 'transparent',
          padding: '10px',
          border: '0',
          fontStyle: 'normal',
          fontWeight: '600',
          fontSize: '11px',
          lineHeight: '13px',
          color: '#ffffff',
          fontFamily: 'Chronicle Display',
        },
        mobile: {
          background: 'transparent',
          padding: '10px',
          border: '0',
          fontStyle: 'normal',
          fontWeight: '600',
          fontSize: '11px',
          lineHeight: '13px',
          color: '#ffffff',
          fontFamily: 'Chronicle Display',
        },
      },
      btnText: {
        desktop: {
          background: 'transparent',
          padding: '10px',
          border: '0',
          fontStyle: 'normal',
          fontWeight: '600',
          fontSize: '11px',
          lineHeight: '13px',
          color: '#ffffff',
          fontFamily: 'Chronicle Display',
        },
        tablet: {
          background: 'transparent',
          padding: '10px',
          border: '0',
          fontStyle: 'normal',
          fontWeight: '600',
          fontSize: '11px',
          lineHeight: '13px',
          color: '#ffffff',
          fontFamily: 'Chronicle Display',
        },
        mobile: {
          background: 'transparent',
          padding: '10px',
          border: '0',
          fontStyle: 'normal',
          fontWeight: '600',
          fontSize: '11px',
          lineHeight: '13px',
          color: '#ffffff',
          fontFamily: 'Chronicle Display',
        },
      },
    },
  },
  2: {
    title: false,
    subtitle: false,
    button: false,
    rooms: [
      {
        image: '/images/rooms/room1.jpg',
        name: 'Suite with mountain view',
        info: 'Up to 3 person',
        link: {
          pathname: '/accommodation/room1',
          api: '/pages/room/room1',
          text: 'DISCOVER MORE',
        },
      },
      {
        image: '/images/rooms/room1.jpg',
        name: 'Suite with mountain vie 1',
        info: 'Up to 3 person',
        link: {
          pathname: '/accommodation/room1',
          api: '/pages/room/room1',
          text: 'DISCOVER MORE',
        },
      },
      {
        image: '/images/rooms/room2.jpg',
        name: 'Suite with mountain view',
        info: 'Up to 3 person',
        link: {
          pathname: '/accommodation/room1',
          api: '/pages/room/room1',
          text: 'DISCOVER MORE',
        },
      },
      {
        image: '/images/rooms/room3.jpg',
        name: 'Suite with mountain view',
        info: 'Up to 3 person',
        link: {
          pathname: '/accommodation/room1',
          api: '/pages/room/room1',
          text: 'DISCOVER MORE',
        },
      },
      {
        image: '/images/rooms/room4.jpg',
        name: 'Suite with mountain view',
        info: 'Up to 3 person',
        link: {
          pathname: '/accommodation/room1',
          api: '/pages/room/room1',
          text: 'DISCOVER MORE',
        },
      },
    ],
    css: {
      name: {
        desktop: {
          fontStyle: 'normal',
          fontWeight: 'normal',
          fontSize: '24px',
          lineHeight: '29px',
          color: '#ffffff',
          fontFamily: 'Chronicle Display',
        },
        tablet: {
          fontStyle: 'normal',
          fontWeight: 'normal',
          fontSize: '24px',
          lineHeight: '29px',
          color: '#ffffff',
          fontFamily: 'Chronicle Display',
        },
        mobile: {
          fontStyle: 'normal',
          fontWeight: 'normal',
          fontSize: '24px',
          lineHeight: '29px',
          color: '#ffffff',
          fontFamily: 'Chronicle Display',
        },
      },
      info: {
        desktop: {
          fontStyle: 'normal',
          fontWeight: 'normal',
          fontSize: '24px',
          lineHeight: '29px',
          color: '#ffffff',
          fontFamily: 'Chronicle Display',
        },
        tablet: {
          fontStyle: 'normal',
          fontWeight: 'normal',
          fontSize: '24px',
          lineHeight: '29px',
          color: '#ffffff',
          fontFamily: 'Chronicle Display',
        },
        mobile: {
          fontStyle: 'normal',
          fontWeight: 'normal',
          fontSize: '24px',
          lineHeight: '29px',
          color: '#ffffff',
          fontFamily: 'Chronicle Display',
        },
      },
    },
  },
  3: {
    title: false,
    subtitle: false,
    button: false,
    rooms: [
      {
        image: '/images/rooms/room1.jpg',
        name: 'Suite with mountain view',
        info: 'SOPHISTICATED CYCLADIC',
        room_details:[
            "85m",
            "2 guests"
        ],
        facilities:[
            "Panoramic Island view",
            "Private pool"
        ],
        link: {
          pathname: '/accommodation/room1',
          api: '/pages/room/room1',
          text: 'BOOK NOW',
        },
      },
      {
        image: '/images/rooms/room2.jpg',
        name: 'SOPHISTICATED CYCLADIC',
        info: 'Up to 3 person',
        room_details:[
          "85m",
          "2 guests"
        ],
        facilities:[
          "Panoramic Island view",
          "Private pool"
        ],
        link: {
          pathname: '/accommodation/room1',
          api: '/pages/room/room1',
          text: 'BOOK NOW',
        },
      },
      {
        image: '/images/rooms/room3.jpg',
        name: 'Suite with mountain view',
        info: 'SOPHISTICATED CYCLADIC',
        room_details:[
          "85m",
          "2 guests"
        ],
        facilities:[
          "Panoramic Island view",
          "Private pool"
        ],
        link: {
          pathname: '/accommodation/room1',
          api: '/pages/room/room1',
          text: 'BOOK NOW',
        },
      },
      {
        image: '/images/rooms/room4.jpg',
        name: 'Suite with mountain view',
        info: 'SOPHISTICATED CYCLADIC',
        room_details:[
          "85m",
          "2 guests"
        ],
        facilities:[
          "Panoramic Island view",
          "Private pool"
        ],
        link: {
          pathname: '/accommodation/room1',
          api: '/pages/room/room1',
          text: 'BOOK NOW',
        },
      },
    ],
    css: {
      link:{
        desktop: {
          background: '#000000',
          padding: '10px',
          border: '0',
          fontStyle: 'normal',
          fontWeight: '600',
          fontSize: '11px',
          lineHeight: '13px',
          color: '#ffffff',
          fontFamily: 'Chronicle Display',
        },
        tablet: {
          background: 'transparent',
          padding: '10px',
          border: '0',
          fontStyle: 'normal',
          fontWeight: '600',
          fontSize: '11px',
          lineHeight: '13px',
          color: '#ffffff',
          fontFamily: 'Chronicle Display',
        },
        mobile: {
          background: 'transparent',
          padding: '10px',
          border: '0',
          fontStyle: 'normal',
          fontWeight: '600',
          fontSize: '11px',
          lineHeight: '13px',
          color: '#ffffff',
          fontFamily: 'Chronicle Display',
        },
      },
      room_details:{
        desktop: {
          fontStyle: 'normal',
          fontWeight: 'normal',
          fontSize: '24px',
          lineHeight: '29px',
          color: '#ffffff',
          fontFamily: 'Chronicle Display',
        },
        tablet: {
          fontStyle: 'normal',
          fontWeight: 'normal',
          fontSize: '24px',
          lineHeight: '29px',
          color: '#ffffff',
          fontFamily: 'Chronicle Display',
        },
        mobile: {
          fontStyle: 'normal',
          fontWeight: 'normal',
          fontSize: '24px',
          lineHeight: '29px',
          color: '#ffffff',
          fontFamily: 'Chronicle Display',
        },
      },
      facilities:{
        desktop: {
          fontStyle: 'normal',
          fontWeight: 'normal',
          fontSize: '24px',
          lineHeight: '29px',
          color: '#ffffff',
          fontFamily: 'Chronicle Display',
        },
        tablet: {
          fontStyle: 'normal',
          fontWeight: 'normal',
          fontSize: '24px',
          lineHeight: '29px',
          color: '#ffffff',
          fontFamily: 'Chronicle Display',
        },
        mobile: {
          fontStyle: 'normal',
          fontWeight: 'normal',
          fontSize: '24px',
          lineHeight: '29px',
          color: '#ffffff',
          fontFamily: 'Chronicle Display',
        },
      },
      name: {
        desktop: {
          fontStyle: 'normal',
          fontWeight: 'normal',
          fontSize: '24px',
          lineHeight: '29px',
          color: '#ffffff',
          fontFamily: 'Chronicle Display',
        },
        tablet: {
          fontStyle: 'normal',
          fontWeight: 'normal',
          fontSize: '24px',
          lineHeight: '29px',
          color: '#ffffff',
          fontFamily: 'Chronicle Display',
        },
        mobile: {
          fontStyle: 'normal',
          fontWeight: 'normal',
          fontSize: '24px',
          lineHeight: '29px',
          color: '#ffffff',
          fontFamily: 'Chronicle Display',
        },
      },
      info: {
        desktop: {
          fontStyle: 'normal',
          fontWeight: 'normal',
          fontSize: '24px',
          lineHeight: '29px',
          color: '#ffffff',
          fontFamily: 'Chronicle Display',
        },
        tablet: {
          fontStyle: 'normal',
          fontWeight: 'normal',
          fontSize: '24px',
          lineHeight: '29px',
          color: '#ffffff',
          fontFamily: 'Chronicle Display',
        },
        mobile: {
          fontStyle: 'normal',
          fontWeight: 'normal',
          fontSize: '24px',
          lineHeight: '29px',
          color: '#ffffff',
          fontFamily: 'Chronicle Display',
        },
      },
    },
  },
  4: {
    title: false,
    subtitle: false,
    button: false,
    rooms: [
      {
        image: '/images/rooms/room1.jpg',
        name: 'Suite with mountain view',
        info: 'Up to 3 person',
        link: {
          pathname: '/accommodation/room1',
          api: '/pages/room/room1',
          text: 'DISCOVER MORE',
        },
      },
      {
        image: '/images/rooms/room1.jpg',
        name: 'Suite with mountain vie 1',
        info: 'Up to 3 person',
        link: {
          pathname: '/accommodation/room1',
          api: '/pages/room/room1',
          text: 'DISCOVER MORE',
        },
      },
      {
        image: '/images/rooms/room2.jpg',
        name: 'Suite with mountain view',
        info: 'Up to 3 person',
        link: {
          pathname: '/accommodation/room1',
          api: '/pages/room/room1',
          text: 'DISCOVER MORE',
        },
      },
      {
        image: '/images/rooms/room3.jpg',
        name: 'Suite with mountain view',
        info: 'Up to 3 person',
        link: {
          pathname: '/accommodation/room1',
          api: '/pages/room/room1',
          text: 'DISCOVER MORE',
        },
      },
      {
        image: '/images/rooms/room4.jpg',
        name: 'Suite with mountain view',
        info: 'Up to 3 person',
        link: {
          pathname: '/accommodation/room1',
          api: '/pages/room/room1',
          text: 'DISCOVER MORE',
        },
      },
    ],
    css: {
      link:{
        desktop: {
          background: '#000000',
          padding: '10px',
          border: '0',
          fontStyle: 'normal',
          fontWeight: '600',
          fontSize: '11px',
          lineHeight: '13px',
          color: '#ffffff',
          fontFamily: 'Chronicle Display',
        },
        tablet: {
          background: 'transparent',
          padding: '10px',
          border: '0',
          fontStyle: 'normal',
          fontWeight: '600',
          fontSize: '11px',
          lineHeight: '13px',
          color: '#ffffff',
          fontFamily: 'Chronicle Display',
        },
        mobile: {
          background: 'transparent',
          padding: '10px',
          border: '0',
          fontStyle: 'normal',
          fontWeight: '600',
          fontSize: '11px',
          lineHeight: '13px',
          color: '#ffffff',
          fontFamily: 'Chronicle Display',
        },
      },
      name: {
        desktop: {
          fontStyle: 'normal',
          fontWeight: 'normal',
          fontSize: '24px',
          lineHeight: '29px',
          color: '#ffffff',
          fontFamily: 'Chronicle Display',
        },
        tablet: {
          fontStyle: 'normal',
          fontWeight: 'normal',
          fontSize: '24px',
          lineHeight: '29px',
          color: '#ffffff',
          fontFamily: 'Chronicle Display',
        },
        mobile: {
          fontStyle: 'normal',
          fontWeight: 'normal',
          fontSize: '24px',
          lineHeight: '29px',
          color: '#ffffff',
          fontFamily: 'Chronicle Display',
        },
      },
      info: {
        desktop: {
          fontStyle: 'normal',
          fontWeight: 'normal',
          fontSize: '24px',
          lineHeight: '29px',
          color: '#ffffff',
          fontFamily: 'Chronicle Display',
        },
        tablet: {
          fontStyle: 'normal',
          fontWeight: 'normal',
          fontSize: '24px',
          lineHeight: '29px',
          color: '#ffffff',
          fontFamily: 'Chronicle Display',
        },
        mobile: {
          fontStyle: 'normal',
          fontWeight: 'normal',
          fontSize: '24px',
          lineHeight: '29px',
          color: '#ffffff',
          fontFamily: 'Chronicle Display',
        },
      },
    },
  },
  5: {
    title: false,
    subtitle: false,
    button: false,
    rooms: [
      {
        image: '/images/rooms/room1.jpg',
        name: 'Suite with mountain view',
        link: {
          pathname: '/accommodation/room1',
          api: '/pages/room/room1',
          text: 'DISCOVER MORE',
        },
      },
      {
        image: '/images/rooms/room1.jpg',
        name: 'Suite with mountain vie 1',
        link: {
          pathname: '/accommodation/room1',
          api: '/pages/room/room1',
          text: 'DISCOVER MORE',
        },
      },
      {
        image: '/images/rooms/room2.jpg',
        name: 'Suite with mountain view',
        link: {
          pathname: '/accommodation/room1',
          api: '/pages/room/room1',
          text: 'DISCOVER MORE',
        },
      },
      {
        image: '/images/rooms/room3.jpg',
        name: 'Suite with mountain view',
        link: {
          pathname: '/accommodation/room1',
          api: '/pages/room/room1',
          text: 'DISCOVER MORE',
        },
      },
      {
        image: '/images/rooms/room4.jpg',
        name: 'Suite with mountain view',
        link: {
          pathname: '/accommodation/room1',
          api: '/pages/room/room1',
          text: 'DISCOVER MORE',
        },
      },
    ],
    css: {
      name: {
        desktop: {
          fontStyle: 'normal',
          fontWeight: 'normal',
          fontSize: '24px',
          lineHeight: '29px',
          color: '#ffffff',
          fontFamily: 'Chronicle Display',
        },
        tablet: {
          fontStyle: 'normal',
          fontWeight: 'normal',
          fontSize: '24px',
          lineHeight: '29px',
          color: '#ffffff',
          fontFamily: 'Chronicle Display',
        },
        mobile: {
          fontStyle: 'normal',
          fontWeight: 'normal',
          fontSize: '24px',
          lineHeight: '29px',
          color: '#ffffff',
          fontFamily: 'Chronicle Display',
        },
      },
    },
  },
  6: {
    title: false,
    subtitle: false,
    button: false,
    rooms: [
      {
        image: '/images/rooms/room1.jpg',
        name: 'Suite with mountain view',
        info: 'Discover a warm and relaxing oasis overlooking the Grand Forest Metsovo garden and surrounding forest.',
        room_details:[
          "85m",
          "2 guests",
          "1 child"
        ],
        link: {
          pathname: '/accommodation/room1',
          api: '/pages/room/room1',
          text: 'DISCOVER MORE',
        },
      },
      {
        image: '/images/rooms/room1.jpg',
        name: 'Suite with mountain vie 1',
        info: 'Discover a warm and relaxing oasis overlooking the Grand Forest Metsovo garden and surrounding forest.',
        room_details:[
          "85m",
          "2 guests",
          "1 child"
        ],
        link: {
          pathname: '/accommodation/room1',
          api: '/pages/room/room1',
          text: 'DISCOVER MORE',
        },
      },
      {
        image: '/images/rooms/room2.jpg',
        name: 'Suite with mountain view',
        info: 'Discover a warm and relaxing oasis overlooking the Grand Forest Metsovo garden and surrounding forest.',
        room_details:[
          "85m",
          "2 guests",
          "1 child"
        ],
        link: {
          pathname: '/accommodation/room1',
          api: '/pages/room/room1',
          text: 'DISCOVER MORE',
        },
      },
      {
        image: '/images/rooms/room3.jpg',
        name: 'Suite with mountain view',
        info: 'Discover a warm and relaxing oasis overlooking the Grand Forest Metsovo garden and surrounding forest.',
        room_details:[
          "85m",
          "2 guests",
          "1 child"
        ],
        link: {
          pathname: '/accommodation/room1',
          api: '/pages/room/room1',
          text: 'DISCOVER MORE',
        },
      },
      {
        image: '/images/rooms/room4.jpg',
        name: 'Suite with mountain view',
        info: 'Discover a warm and relaxing oasis overlooking the Grand Forest Metsovo garden and surrounding forest.',
        room_details:[
          "85m",
          "2 guests",
          "1 child"
        ],
        link: {
          pathname: '/accommodation/room1',
          api: '/pages/room/room1',
          text: 'DISCOVER MORE',
        },
      },
    ],
    css: {
      room_details:{
        desktop: {
          background: '#000000',
          padding: '10px',
          border: '0',
          fontStyle: 'normal',
          fontWeight: '600',
          fontSize: '11px',
          lineHeight: '13px',
          color: '#ffffff',
          fontFamily: 'Chronicle Display',
        },
        tablet: {
          background: 'transparent',
          padding: '10px',
          border: '0',
          fontStyle: 'normal',
          fontWeight: '600',
          fontSize: '11px',
          lineHeight: '13px',
          color: '#ffffff',
          fontFamily: 'Chronicle Display',
        },
        mobile: {
          background: 'transparent',
          padding: '10px',
          border: '0',
          fontStyle: 'normal',
          fontWeight: '600',
          fontSize: '11px',
          lineHeight: '13px',
          color: '#ffffff',
          fontFamily: 'Chronicle Display',
        },
      },
      link:{
        desktop: {
          background: '#000000',
          padding: '0 0 0 10px',
          border: '0',
          fontStyle: 'normal',
          fontWeight: '600',
          fontSize: '11px',
          lineHeight: '13px',
          color: '#ffffff',
          fontFamily: 'Chronicle Display',
        },
        tablet: {
          background: 'transparent',
          padding: '10px',
          border: '0',
          fontStyle: 'normal',
          fontWeight: '600',
          fontSize: '11px',
          lineHeight: '13px',
          color: '#ffffff',
          fontFamily: 'Chronicle Display',
        },
        mobile: {
          background: 'transparent',
          padding: '10px',
          border: '0',
          fontStyle: 'normal',
          fontWeight: '600',
          fontSize: '11px',
          lineHeight: '13px',
          color: '#ffffff',
          fontFamily: 'Chronicle Display',
        },
      },
      name: {
        desktop: {
          fontStyle: 'normal',
          fontWeight: 'normal',
          fontSize: '24px',
          lineHeight: '29px',
          color: '#ffffff',
          fontFamily: 'Chronicle Display',
        },
        tablet: {
          fontStyle: 'normal',
          fontWeight: 'normal',
          fontSize: '24px',
          lineHeight: '29px',
          color: '#ffffff',
          fontFamily: 'Chronicle Display',
        },
        mobile: {
          fontStyle: 'normal',
          fontWeight: 'normal',
          fontSize: '24px',
          lineHeight: '29px',
          color: '#ffffff',
          fontFamily: 'Chronicle Display',
        },
      },
      info: {
        desktop: {
          fontStyle: 'normal',
          fontWeight: 'normal',
          fontSize: '24px',
          lineHeight: '29px',
          color: '#ffffff',
          fontFamily: 'Chronicle Display',
        },
        tablet: {
          fontStyle: 'normal',
          fontWeight: 'normal',
          fontSize: '24px',
          lineHeight: '29px',
          color: '#ffffff',
          fontFamily: 'Chronicle Display',
        },
        mobile: {
          fontStyle: 'normal',
          fontWeight: 'normal',
          fontSize: '24px',
          lineHeight: '29px',
          color: '#ffffff',
          fontFamily: 'Chronicle Display',
        },
      },
    },
  },
  7: {
    heading: 'our luxury suites',
    text: 'Enjoy sublime Dalmatian coastal views from your private balcony in each of our 308 newly redesigned contemporary rooms. Choose from plush ensuite single and double rooms in fresh, neutral tones, or quietly grand suites with an extra large private terrace. Be pampered with a wide range of facilities, 24-hour room service, and free, fast wifi. Complete seclusion, privacy and exclusive luxury are the hallmarks of the VIP wing at Hotel Dubrovnik Palace. ',
    colors: {
      background: '#FFFFFF',
    },
    css: {
      heading:{
        desktop: {
          background: 'transparent',
          padding: '0 10px',
          border: '0',
          fontStyle: 'normal',
          fontWeight: '200',
          fontSize: '62px',
          lineHeight: '74px',
          color: '#000000',
          fontFamily: 'SF Pro Display',
        },
        tablet: {
          background: 'transparent',
          padding: '10px',
          border: '0',
          fontStyle: 'normal',
          fontWeight: '600',
          fontSize: '11px',
          lineHeight: '13px',
          color: '#000000',
          fontFamily: 'Chronicle Display',
        },
        mobile: {
          background: 'transparent',
          padding: '10px',
          border: '0',
          fontStyle: 'normal',
          fontWeight: '600',
          fontSize: '11px',
          lineHeight: '13px',
          color: '#000000',
          fontFamily: 'Chronicle Display',
        },
      },
      text:{
        desktop: {
          background: '#000000',
          padding: '0px 315px 0 0',
          border: '0',
          fontStyle: 'normal',
          fontWeight: '300',
          fontSize: '16px',
          lineHeight: '30px',
          color: '#000000',
          fontFamily: 'SF Pro Display',
          letterSpacing: '0em'
        },
        tablet: {
          background: 'transparent',
          padding: '10px',
          border: '0',
          fontStyle: 'normal',
          fontWeight: '600',
          fontSize: '11px',
          lineHeight: '13px',
          color: '#000000',
          fontFamily: 'Chronicle Display',
        },
        mobile: {
          background: 'transparent',
          padding: '10px',
          border: '0',
          fontStyle: 'normal',
          fontWeight: '600',
          fontSize: '11px',
          lineHeight: '13px',
          color: '#000000',
          fontFamily: 'Chronicle Display',
        },
      },
    },
  },
  8: {
    heading: 'Enjoy sublime Dalmatian coastal views from your private balcony in each of our 308 newly redesigned contemporary rooms. Choose from plush ensuite single and double rooms in fresh, neutral tones, ',
    colors: {
      background: '#FFFFFF',
    },
    css: {
      heading:{
        desktop: {
          background: 'transparent',
          padding: '0 ',
          border: '0',
          fontStyle: 'normal',
          fontWeight: '300',
          fontSize: '30px',
          lineHeight: '45px',
          color: '#000000',
          fontFamily: 'SF Pro Display',
        },
        tablet: {
          background: 'transparent',
          padding: '10px',
          border: '0',
          fontStyle: 'normal',
          fontWeight: '600',
          fontSize: '11px',
          lineHeight: '13px',
          color: '#000000',
          fontFamily: 'Chronicle Display',
        },
        mobile: {
          background: 'transparent',
          padding: '10px',
          border: '0',
          fontStyle: 'normal',
          fontWeight: '600',
          fontSize: '11px',
          lineHeight: '13px',
          color: '#000000',
          fontFamily: 'Chronicle Display',
        },
      },
    },
  },
  9: {
    items:[
      {
        image: '/images/rooms/room1.jpg',
        link: {
          pathname: '/accommodation/room1',
          api: '/pages/room/room1',
          text: 'gastronomy',
        },
      },
      {
        image: '/images/rooms/room2.jpg',
        link: {
          pathname: '/accommodation/room2',
          api: '/pages/room/room2',
          text: 'Experiences',
        },
      },
      {
        image: '/images/rooms/room3.jpg',
        link: {
          pathname: '/accommodation/room3',
          api: '/pages/room/room3',
          text: 'Spa',
        },
      },
    ],
    css:{
      text: {
        desktop: {
          background: 'transparent',
          padding: '0 ',
          border: '0',
          fontStyle: 'normal',
          fontWeight: '300',
          fontSize: '30px',
          lineHeight: '45px',
          color: '#FFFFFF',
          fontFamily: 'SF Pro Display',
        },
        tablet: {
          background: 'transparent',
          padding: '10px',
          border: '0',
          fontStyle: 'normal',
          fontWeight: '600',
          fontSize: '11px',
          lineHeight: '13px',
          color: '#000000',
          fontFamily: 'Chronicle Display',
        },
        mobile: {
          background: 'transparent',
          padding: '10px',
          border: '0',
          fontStyle: 'normal',
          fontWeight: '600',
          fontSize: '11px',
          lineHeight: '13px',
          color: '#000000',
          fontFamily: 'Chronicle Display',
        },
      }
    }
  },
  10: {
    heading:"Amenities and Services",
    items:[
      "Amenities and Services",
      "Bath Amenities",
      "Bathroom with Shower",
      "Beach Towels",
      "Cable-Satellite TV",
      "Closet",
      "Amenities and Services",
      "Bath Amenities",
      "Bathroom with Shower",
      "Beach Towels",
      "Cable-Satellite TV",
      "Closet",
      "Amenities and Services",
      "Bath Amenities",
      "Bathroom with Shower",
      "Beach Towels",
      "Cable-Satellite TV",
      "Closet",
    ],
    css:{
      heading: {
        desktop: {
          background: 'transparent',
          padding: '0 ',
          border: '0',
          fontStyle: 'normal',
          fontWeight: '400',
          fontSize: '28px',
          lineHeight: '36px',
          color: '#000000',
          fontFamily: 'Chronicle Display',
          letterSpacing: '0em'
        },
        tablet: {
          background: 'transparent',
          padding: '0 ',
          border: '0',
          fontStyle: 'normal',
          fontWeight: '400',
          fontSize: '28px',
          lineHeight: '36px',
          color: '#000000',
          fontFamily: 'Chronicle Display',
          letterSpacing: '0em'
        },
        mobile: {
          background: 'transparent',
          padding: '0 ',
          border: '0',
          fontStyle: 'normal',
          fontWeight: '400',
          fontSize: '28px',
          lineHeight: '36px',
          color: '#000000',
          fontFamily: 'Chronicle Display',
          letterSpacing: '0em'
        },
      },
      items: {
        desktop: {
          background: 'transparent',
          padding: '0 ',
          border: '0',
          fontStyle: 'normal',
          fontWeight: '300',
          fontSize: '15px',
          lineHeight: '18px',
          color: '#000000',
          fontFamily: 'SF Pro Display',
          letterSpacing: '0em'
        },
        tablet: {
          background: 'transparent',
          padding: '0 ',
          border: '0',
          fontStyle: 'normal',
          fontWeight: '300',
          fontSize: '15px',
          lineHeight: '18px',
          color: '#000000',
          fontFamily: 'SF Pro Display',
          letterSpacing: '0em'
        },
        mobile: {
          background: 'transparent',
          padding: '0 ',
          border: '0',
          fontStyle: 'normal',
          fontWeight: '300',
          fontSize: '15px',
          lineHeight: '18px',
          color: '#000000',
          fontFamily: 'SF Pro Display',
          letterSpacing: '0em'
        },
      },
    }
  },
  11: {
    items:[
      "images/rooms/room1.jpg",
      "images/rooms/room2.jpg",
      "images/rooms/room3.jpg",
      "images/rooms/room4.jpg",
    ],
    css:{

    }
  },
  12: {
    items:[
      "images/rooms/room1.jpg",
      "images/rooms/room2.jpg",
      "images/rooms/room3.jpg",
      "images/rooms/room4.jpg",
      "images/rooms/room1.jpg",
      "images/rooms/room2.jpg",
      "images/rooms/room3.jpg",
      "images/rooms/room4.jpg",
      "images/rooms/room1.jpg",
      "images/rooms/room2.jpg",
      "images/rooms/room3.jpg",
      "images/rooms/room4.jpg",
      "images/rooms/room1.jpg",
      "images/rooms/room2.jpg",
      "images/rooms/room3.jpg",
      "images/rooms/room4.jpg",
    ],
    css:{

    }
  },
}

export const Typography = {
  h1: {
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '24px',
    lineHeight: '29px',
    color: '#ffffff',
    fontFamily: 'Chronicle Display',
  },
  h2:{
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '24px',
    lineHeight: '29px',
    color: '#ffffff',
    fontFamily: 'Chronicle Display',
  },
  h3:{
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '24px',
    lineHeight: '29px',
    color: '#ffffff',
    fontFamily: 'Chronicle Display',
  },
  h4:{
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '24px',
    lineHeight: '29px',
    color: '#ffffff',
    fontFamily: 'Chronicle Display',
  },
  h5:{
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '24px',
    lineHeight: '29px',
    color: '#ffffff',
    fontFamily: 'Chronicle Display',
  },
  h6:{
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '24px',
    lineHeight: '29px',
    color: '#ffffff',
    fontFamily: 'Chronicle Display',
  },
  p:{
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '24px',
    lineHeight: '29px',
    color: '#ffffff',
    fontFamily: 'Chronicle Display',
  },
}