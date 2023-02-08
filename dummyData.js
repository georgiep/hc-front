export const headerData1 = {
  logo: {
    path: '/images/logo.jpg',
  },
  menu: [
    {
      pathname: '/hotel',
      text: 'HOTEL',
      api: '/pages/hotel'
    },
    {
      pathname: '/accommodation',
      text: 'ROOMS',
      api: '/pages/rooms',
      submenu: [
        {
          pathname: '/accommodation/room1',
          text: 'room1',
          api: '/rooms/room1'
        },
        {
          pathname: '/accommodation/room2',
          text: 'room1',
          api: '/rooms/room2'
        }
      ]
    },
    {
      pathname: '/dining',
      text: 'DINING',
      api: '/pages/dining'
    },
    {
      pathname: '/special-offers',
      text: 'SPECIAL OFFERS',
      api: '/pages/special-offers'
    },
    {
      pathname: '/contact',
      text: 'CONTACT',
      api: '/pages/contact'
    },
  ],
  submenu: [
    {
      button: {
        url: 'http://localhost:5555/',
        text: 'BOOK NOW',
        backgroundColor: 'white',
        color: 'black',
      },
    },
    {
      pathname: '/contact',
      text: 'CONTACT',
    },
  ],
}

export const headerData2 = {
  logo: {
    path: '/images/logo.jpg',
  },
  menu: [
    {
      pathname: '/hotel',
      text: 'HOTEL',
    },
    {
      pathname: '/rooms',
      text: 'ROOMS',
    },
    {
      pathname: '/dining',
      text: 'DINING',
    },
    {
      pathname: '/special-offers',
      text: 'SPECIAL OFFERS',
    },
  ],
  submenu: [
    {
      button: {
        url: 'http://localhost:5555/',
        text: 'BOOK NOW',
        backgroundColor: 'white',
        color: 'black',
      },
    },
    {
      pathname: '/contact',
      text: 'CONTACT',
    },
  ],
}

export const footerData2 = {
  menu1: [
    { text: 'The Hotel', pathname: '/hotel' },
    { text: 'Our rooms', pathname: '/rooms' },
    { text: 'Offers', pathname: '/offers' },
    { text: 'Services', pathname: '/services' },
    { text: 'Reviews', pathname: '/hotel' },
  ],
  menu2: [
    { text: 'Covid', pathname: '/hotel' },
    { text: 'Destination Guide', pathname: '/destination' },
    { text: 'My Booking', pathname: '/booking' },
    { text: 'Contact us', pathname: '/contactus' },
    { text: 'Location', pathname: '/location' },
  ],
}

export const homeData = {
  idbName: 'home',
  0: {
    images: [
      '/public/images/1.jpg',
      '/public/images/2.jpg'
    ],
    heading: "Our Land, Our Home",
    subHeading: "Very elegant collection of hotel mattresses and boxing beds for the most demanding clients",
    button: {
      text: 'SHOW LUXURY',
      url: '#'
    }
  },
  1: {
    heading: "Discover Britain’s leading luxury and boutique hotel.",
    button: {
      text: 'SHOW LUXURY',
      url: '#'
    },
    images: [
      '/public/images/logo.jpg',
      '/public/images/responsive.jpg'
    ],
    video: 'https://youtu.be/GXrHb0_vTr0'
  },
  3: {
    heading: "Rooms & Suites",
    rooms: [
      {
        image: '/public/images/1.jpg',
        button: {
          text: 'Suite with mountain view',
          url: '#'
        }
      },
      {
        image: '/public/images/1.jpg',
        button: {
          text: 'Superior suite with mountain view',
          url: '#'
        }
      }
    ]
  },
  4:{
    heading: "Special offers",
    subHeading: "ALL SPECIALS",
    offers:[
      {
        image: '/public/images/1.jpg',
        text: 'SPA TIME YOU & ME',
        button: {
          text: 'DISCOVER MORE',
          url: '#'
        }
      },
      {
        image: '/public/images/2.jpg',
        text: 'SPA TIME YOU & ME',
        button: {
          text: 'DISCOVER MORE',
          url: '#'
        }
      }
    ]
  },
  5:{
    heading: "Highlights",
    subHeading: "Lorem ipsum",
    highlights:[
      {
        image: '/public/images/2.jpg',
        text: 'Our Restaurant',
        button: {
          text: '',
          url: '#'
        }
      }
    ]
  }
}

export const footerData = {
  idbName: 'footer',
  top: {
    heading: "ARE YOU INTERESTED?",
    subHeading: "In case of any questions, please contact us",
    telephone: "+30 210 45 00029",
    button: {
      text: '',
      url: '#'
    }
  },
  center: {
    0:{
      pages: [
        {
          button: {
            text: 'The Hotel',
            url: '#'
          },
          button: {
            text: 'Our Rooms',
            url: '#'
          },
          button: {
            text: 'Offers',
            url: '#'
          },
          button: {
            text: 'Services',
            url: '#'
          }
        }
      ]
    },
    1:{
      pages: [
        {
          button: {
            text: 'Covid 19',
            url: '#'
          },
          button: {
            text: 'Destination Guide',
            url: '#'
          },
          button: {
            text: 'My Booking',
            url: '#'
          },
          button: {
            text: 'Contact us',
            url: '#'
          }
        }
      ]
    }
  },
  bottom: {
    heading: "Newsletter sign up",
    subheading: "SIGN UP FOR SPECIAL OFFERS",
    placeholder: "Enter your email",
    terms: "By submitting this form, I agree to havong my personal and contact information processed",
    logo: '/images/logo.jpg'
  }
}

export const schemaData = {
  idbName: 'footer',
  top: {
    heading: "ARE YOU INTERESTED?",
    subHeading: "In case of any questions, please contact us",
    telephone: "+30 210 45 00029",
    button: {
      text: '',
      url: '#'
    }
  },
  center: {
    0:{
      pages: [
        {
          button: {
            text: 'The Hotel',
            url: '#'
          },
          button: {
            text: 'Our Rooms',
            url: '#'
          },
          button: {
            text: 'Offers',
            url: '#'
          },
          button: {
            text: 'Services',
            url: '#'
          }
        }
      ]
    },
    1:{
      pages: [
        {
          button: {
            text: 'Covid 19',
            url: '#'
          },
          button: {
            text: 'Destination Guide',
            url: '#'
          },
          button: {
            text: 'My Booking',
            url: '#'
          },
          button: {
            text: 'Contact us',
            url: '#'
          }
        }
      ]
    }
  },
  bottom: {
    heading: "Newsletter sign up",
    subheading: "SIGN UP FOR SPECIAL OFFERS",
    placeholder: "Enter your email",
    terms: "By submitting this form, I agree to havong my personal and contact information processed",
    logo: '/images/logo.jpg'
  }
}