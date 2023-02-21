// import React from "react";
// import HeroImage from '../components/images/HeroImage'
// import {HeroImageWithBookWithUs} from '../components/images/HeroImage/HeroImage.composition'
//
// export default {
//     title: 'HeroImage',
//     component: <HeroImage/>,
//     subcomponents: { HeroImageWithBookWithUs },
// };
//
// const Template = (args) => <HeroImage {...args} />;
//
// export const HeroImageWithBookWithUsTemplate = (args) => (
//     <HeroImageWithBookWithUs {...args}/>
// );
//
// HeroImageWithBookWithUsTemplate.args = {
//     data:{
//         text: 'this is a default text',
//         image: 'https://studioha.gr/public/images/1.webp',
//         items: [
//             {
//                 icon: 'BookWithUs',
//                 text: 'Best Price Guaranteed1!'
//             },
//             {
//                 icon: 'BookWithUs',
//                 text: 'Best Price Guaranteed!'
//             },
//             {
//                 icon: 'BookWithUs',
//                 text: 'Best Price 3 Guaranteed!'
//             }
//         ]
//     }
// };
//
// export const heroImage = Template.bind({});
// heroImage.args = {
//     data: {
//         text: 'this is a default text',
//         image: 'https://studioha.gr/public/images/1.webp'
//     }
// };
//
// export const heroImageWithText = Template.bind({});
// heroImageWithText.args = {
//     data: {
//         text: 'this is a default text 2',
//         image: 'https://studioha.gr/public/images/1.webp'
//     }
// };
//
// export const heroImageWithComponent = Template.bind({});
// heroImageWithComponent.args = {
//     data: {
//         text: 'this is a default text 3',
//         image: 'this is a default img src',
//         component: 'https://cdn.pixabay.com/photo/2013/07/18/20/26/sea-164989__340.jpg'
//     }
// };
//
