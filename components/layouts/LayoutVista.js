import React from 'react'
import Head from 'next/head'
import { headerFooterList } from 'components/dynamicComponents'
import Typography from 'public/hotels/acquavista/data/typography/typography.json'
import Colors from 'public/hotels/acquavista/data/colors/colors.json'
import Buttons from 'public/hotels/acquavista/data/buttons/buttons.json'
import breakpoints from 'styles/breakpoints'
// import {useRouter} from "next/router";

export default function LayoutVista(props) {

    let jsxCss =  ''
    const header = props.header.map(d => headerFooterList[d.component_name][d.template])
    const footer = props.footer.map(d => headerFooterList[d.component_name][d.template])

    Object.keys(Typography).map((typo,i) => {
        return(
            jsxCss += `${typo}{font-family:${Typography[typo]['desktop']['fontFamily']}!important;font-style:${Typography[typo]['desktop']['fontStyle']}!important;font-weight:${Typography[typo]['desktop']['fontWeight']}!important;font-size:${Typography[typo]['desktop']['fontSize']}!important;line-height:${Typography[typo]['desktop']['lineHeight']}!important;color:${Typography[typo]['desktop']['color']}!important;opacity:${Typography[typo]['desktop']['opacity']}!important;letter-spacing:${Typography[typo]['desktop']['letterSpacing']}!important}@media screen and ${breakpoints.tabletDown}{${typo}{font-family:${Typography[typo]['tablet']['fontFamily']}!important;font-style:${Typography[typo]['tablet']['fontStyle']}!important;font-weight:${Typography[typo]['tablet']['fontWeight']}!important;font-size:${Typography[typo]['tablet']['fontSize']}!important;line-height:${Typography[typo]['tablet']['lineHeight']}!important;color:${Typography[typo]['tablet']['fontColor']};opacity:${Typography[typo]['tablet']['fontOpacity']};letter-spacing:${Typography[typo]['tablet']['letterSpacing']}}}@media screen and ${breakpoints.mobile}{${typo}{font-family:${Typography[typo]['mobile']['fontFamily']}!important;font-style:${Typography[typo]['mobile']['fontStyle']};font-weight:${Typography[typo]['mobile']['fontWeight']}!important;font-size:${Typography[typo]['mobile']['fontSize']}!important;line-height:${Typography[typo]['mobile']['lineHeight']}!important;color:${Typography[typo]['mobile']['fontColor']}!important;opacity:${Typography[typo]['mobile']['fontOpacity']}!important;letter-spacing:${Typography[typo]['mobile']['letterSpacing']}!important;}}`
        )
    })

    Object.keys(Colors).map((typo,i) => {
        return(
            jsxCss += `${typo}{color: ${Colors[typo]}!important;}`
        )
    })

    Object.keys(Buttons).map((typo,i) => {
        return(
            jsxCss += `${typo}{min-width:${Buttons[typo]['desktop']['minWidth']}!important;font-family:${Buttons[typo]['desktop']['fontFamily']}!important;font-style:${Buttons[typo]['desktop']['fontStyle']}!important;font-weight:${Buttons[typo]['desktop']['fontWeight']}!important;font-size:${Buttons[typo]['desktop']['fontSize']}!important;opacity:${Buttons[typo]['desktop']['fontOpacity']}!important;letter-spacing:${Buttons[typo]['desktop']['letterSpacing']}!important;background:${Buttons[typo]['desktop']['background']}!important;padding:${Buttons[typo]['desktop']['padding']}!important;color:${Buttons[typo]['desktop']['color']}!important;border:${Buttons[typo]['desktop']['border']}!important;border-bottom:${Buttons[typo]['desktop']['borderBottom']}!important;cursor:${Buttons[typo]['desktop']['cursor']}!important;}@media screen and ${breakpoints.tabletDown}{${typo}{min-width:${Buttons[typo]['tablet']['minWidth']}!important;font-family:${Buttons[typo]['tablet']['fontFamily']}!important;font-style:${Buttons[typo]['tablet']['fontStyle']}!important;font-weight:${Buttons[typo]['tablet']['fontWeight']}!important;font-size:${Buttons[typo]['tablet']['fontSize']}!important;opacity:${Buttons[typo]['tablet']['fontOpacity']}!important;letter-spacing:${Buttons[typo]['tablet']['letterSpacing']}!important;background:${Buttons[typo]['tablet']['background']}!important;padding:${Buttons[typo]['tablet']['padding']}!important;color:${Buttons[typo]['tablet']['color']}!important;border:${Buttons[typo]['tablet']['border']}!important;border-bottom:${Buttons[typo]['tablet']['borderBottom']}!important;cursor:${Buttons[typo]['tablet']['cursor']}!important;}}`
        )
    })

    return (


            <>
                <Head>
                    <title>{props.title}</title>
                    <meta name="description" content={props.description} />
                    <meta name="keywords" content={props.keywords} />

                    <meta name="viewport" content="initial-scale=1.0, width=device-width" />

                    <meta name="robots" content="noindex,nofollow" />

                    <link rel="dns-prefetch" href="https://code.rateparity.com/" />

                    {/*<link rel="shortcut icon" href="/public/images/favicon.ico" type="image/x-icon" />*/}

                    {/*<meta name="google-site-verification" content={props.WEBMASTER_TOOLS} />*/}

                    {/*<meta property="og:title" content={ props.title } />*/}
                    {/*<meta property="og:description" content={ props.description } />*/}
                    {/*<meta property="og:image" content={ this.props.logo } />*/}
                    {/*<meta property="og:url" content={this.props.url} />*/}
                    {/*<meta name="twitter:card" content="summary_large_image" />*/}

                    {/*<meta property="og:site_name" content={ this.props.title } />*/}
                    {/*<meta name="twitter:image:alt" content="Alt text for image" />*/}

                    {/*<link rel="canonical" href={this.props.url} />*/}

                    {/*{ this.props.localBusiness && <script type='application/ld+json' dangerouslySetInnerHTML={ { __html: `${JSON.stringify(this.props.localBusiness)}`}} />}*/}

                    {/*<link rel="shortcut icon" href={"/public/favicon.ico"} />*/}

                    {/*<link rel="sitemap" href={"/sitemap.xml"} />*/}

                    {/*<link rel="stylesheet" href="public/globalCss/bootstrap.css" />*/}
                    {/*<link rel="stylesheet" href="public/globalCss/reset.min.css" />*/}

                    {/*<link rel="preload" as="image" href={props.preloadImage} />*/}

                    <link rel="preload" href="/public/hotels/acquavista/fonts/GothamGRLight.woff2" as="font" type="font/woff2" crossOrigin="true" />
                    <link rel="preload" href="/public/hotels/acquavista/fonts/GothamGRBook.woff2" as="font" type="font/woff2" crossOrigin="true" />
                    <link rel="preload" href="/public/hotels/acquavista/fonts/GothamGRMedium.woff2" as="font" type="font/woff2" crossOrigin="true" />

                </Head>


                {header.map((Component, i) => {
                    return (
                        <React.Fragment key={i}>
                            <Component data={props.menu} />
                        </React.Fragment>
                    )
                })}

                {props.children}

                {footer.map((Component, i) => {
                    return (
                        <React.Fragment key={i}>
                            <Component />
                        </React.Fragment>
                    )
                })}

                <style jsx global>
                    {jsxCss}
                </style>

                <style jsx global>
                    {`@font-face{font-family:Gotham Greek;src:url(/public/hotels/acquavista/fonts/GothamGRLight.woff2) format('opentype');font-weight:300;font-display:swap}@font-face{font-family:Gotham Greek;src:url(/public/hotels/acquavista/fonts/GothamGRBook.woff2) format('opentype');font-weight:400;font-display:swap}@font-face{font-family:Gotham Greek;src:url(/public/hotels/acquavista/fonts/GothamGRMedium.woff2) format('opentype');font-weight:500;font-display:swap}`}
                </style>

                {/*<script type="text/javascript" src="https://www.google-analytics.com/analytics.js" async />*/}

                {/*<script type="text/javascript" src={`https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ANALYTICS}`} async />*/}

                {/*<script*/}
                {/*    dangerouslySetInnerHTML={{*/}
                {/*        __html: `*/}
                {/*            window.ga=window.ga||function(){(ga.q=ga.q||[]).push(arguments)};ga.l=+new Date;*/}
                {/*            ga('create', '${GOOGLE_ANALYTICS}', 'auto');*/}
                {/*            ga('send', 'pageview');*/}
                {/*          `,*/}
                {/*    }}*/}
                {/*/>*/}

                {/*<script*/}
                {/*    dangerouslySetInnerHTML={{*/}
                {/*        __html: `*/}
                {/*                 const observer = new PerformanceObserver((list) => {*/}
                {/*                    console.log('Long Task detected️');*/}
                {/*                    const entries = list.getEntries();*/}
                {/*                    console.log(entries);*/}
                {/*                });*/}
                {/*    */}
                {/*                observer.observe({entryTypes: ['longtask']});*/}
                {/*          `,*/}
                {/*    }}*/}
                {/*/>*/}



            </>



    )
}




//
// import {motion, AnimatePresence, useScroll} from 'framer-motion';
//
// //
// const variants = {
//     inactive: {
//         opacity: 1,
//         y: 0,
//         transition: {
//             duration: 1,
//             ease: 'easeInOut'
//         },
//     },
//     out: {
//         opacity: 0,
//         y: -100,
//         transition: {
//             duration: 1,
//             ease: 'easeInOut'
//         }
//     },
//     in: {
//         y: 100,
//         opacity: 0,
//         transition: {
//             duration: 1,
//             ease: 'easeInOut'
//         }
//     },
// };
// const Transition = ({ children }) => {
//     const { asPath } = useRouter();
//
//     const {scrollY} = useScroll()
//
//     const variants = {
//         hidden: { opacity: 0, x: -200, y: 0 },
//         enter: { opacity: 1, x: 0, y: 0 },
//         exit: { opacity: 0, x: 0, y: -1000 },
//     }
//
//     const spring = {
//         type: "spring",
//         damping: 100,
//         stiffness: 1000
//     }
//     return (
//         <div className="effect-1">
//             <AnimatePresence
//                 initial={false}
//                 mode='wait'
//                 onExitComplete={() => window.scrollTo(0, 0)}
//             >
//                 <motion.div
//                     key={asPath}
//                     // variants={variants}
//                     // initial="in"
//                     // animate="inactive"
//                     // exit="out"
//
//                     exit='exit'
//                     initial={{ opacity: 0, scale: 0.5 }}
//                     animate={{ opacity: 1, scale: 1 }}
//                     transition={spring}
//                     // transition={{ type: 'linear' }}
//                 >
//                     {children}
//                 </motion.div>
//             </AnimatePresence>
//         </div>
//     );
// };