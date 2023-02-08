import React from 'react'
import Head from 'next/head'
import { headerFooterList } from 'components/dynamicComponents'
import Typography from 'public/data/pages/typography.json'
import Colors from 'public/data/pages/colors.json'
import Buttons from 'public/data/pages/buttons.json'
import breakpoints from 'styles/breakpoints'
// import { v4 } from 'uuid';
export default function FullWidthLayout(props) {

  const header = props.header.map(d => headerFooterList[d.component_name][d.template])
  const footer = props.footer.map(d => headerFooterList[d.component_name][d.template])

  return (
    <>
      <Head>
        <title>{props.title} </title>
        <meta name="description" content={props.description} />
        <meta name="keywords" content={props.keywords} />

        <meta name="viewport" content="initial-scale=1.0, width=device-width" />

        <link rel="shortcut icon" href="/public/images/favicon.ico" type="image/x-icon" />

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

        {/*<link rel="preload" as="image" href="public/images/1.webp" />*/}

        <link rel="preload" as="image" href="public/images/1.webp?w=1920&q=75" />

        <style>
          {
              Object.keys(Typography).map((typo,i) => {
                  return(
                       `
                        ${typo}{
                          font-family: ${Typography[typo]['desktop']['fontFamily']} !important;
                          font-style: ${Typography[typo]['desktop']['fontStyle']} !important;
                          font-weight: ${Typography[typo]['desktop']['fontWeight']} !important;
                          font-size: ${Typography[typo]['desktop']['fontSize']} !important;
                          line-height: ${Typography[typo]['desktop']['lineHeight']} !important;
                          color: ${Typography[typo]['desktop']['color']} !important;
                          opacity: ${Typography[typo]['desktop']['opacity']} !important;
                          letter-spacing: ${Typography[typo]['desktop']['letterSpacing']}!important;
                        }
                        @media screen and ${breakpoints.tabletDown} {
                           ${typo}{
                              font-family: ${Typography[typo]['tablet']['fontFamily']} !important;
                              font-style: ${Typography[typo]['tablet']['fontStyle']} !important;
                              font-weight: ${Typography[typo]['tablet']['fontWeight']} !important;
                              font-size: ${Typography[typo]['tablet']['fontSize']} !important;
                              line-height: ${Typography[typo]['tablet']['fontHeight']} !important;
                              color: ${Typography[typo]['tablet']['fontColor']};
                              opacity: ${Typography[typo]['tablet']['fontOpacity']};
                              letter-spacing: ${Typography[typo]['tablet']['letterSpacing']};
                            }
                        }
                        @media screen and ${breakpoints.mobile} {
                           ${typo}{
                              font-family: ${Typography[typo]['mobile']['fontFamily']};
                              font-style: ${Typography[typo]['mobile']['fontStyle']};
                              font-weight: ${Typography[typo]['mobile']['fontWeight']};
                              font-size: ${Typography[typo]['mobile']['fontSize']};
                              line-height: ${Typography[typo]['mobile']['fontHeight']};
                              color: ${Typography[typo]['mobile']['fontColor']};
                              opacity: ${Typography[typo]['mobile']['fontOpacity']};
                              letter-spacing: ${Typography[typo]['mobile']['letterSpacing']};
                            }
                        }
                   `
                  )
              })
          }
          </style>
          <style>
          {
              Object.keys(Colors).map((typo,i) => {
                  return(
                     `
                        ${typo}{
                          color: ${Colors[typo]}!important;
                        }
                     `
                  )
              })
          }
          </style>
          <style>
          {
              Object.keys(Buttons).map((typo,i) => {
                  return(
                      `${typo}{
                          font-family: ${Buttons[typo]['desktop']['fontFamily']} !important;
                          font-style: ${Buttons[typo]['desktop']['fontStyle']} !important;
                          font-weight: ${Buttons[typo]['desktop']['fontWeight']} !important;
                          font-size: ${Buttons[typo]['desktop']['fontSize']} !important;
                          opacity: ${Buttons[typo]['desktop']['fontOpacity']} !important;
                          letter-spacing: ${Buttons[typo]['desktop']['letterSpacing']} !important;
                          background: ${Buttons[typo]['desktop']['background']} !important;
                          padding: ${Buttons[typo]['desktop']['padding']} !important;
                          color: ${Buttons[typo]['desktop']['color']} !important;
                          border: ${Buttons[typo]['desktop']['border']} !important;
                          cursor: ${Buttons[typo]['desktop']['cursor']} !important;
                        }
                   `
                  )
              })
          }
          </style>
          <style>
              {`
            @font-face{font-family:SF Pro Display;src:url('public/fonts/SF-Pro-Display-Black.otf') format('opentype');font-display:swap;}
            @font-face{font-family:SF Pro Display;font-weight:300;src:url('public/fonts/SF-Pro-Display-Light.otf') format('opentype');font-display:swap;}
            @font-face{font-family:SF Pro Display;font-weight:400;src:url('public/fonts/SF-Pro-Display-Regular.otf') format('opentype');font-display:swap;}
            @font-face{font-family:SF Pro Display;font-weight:500;src:url('public/fonts/SF-Pro-Display-Medium.otf') format('opentype');}
            @font-face{font-family:SF Pro Display;font-weight:600;src:url('public/fonts/SF-Pro-Display-Semibold.otf') format('opentype');font-display:swap;}
            @font-face{font-family:SF Pro Display;font-weight:700;src:url('public/fonts/SF-Pro-Display-Bold.otf') format('opentype');font-display:swap;}
            @font-face{font-family:SF Pro Display;font-weight:800;src:url('public/fonts/SF-Pro-Display-Heavy.otf') format('opentype');font-display:swap;}
            *{box-sizing:border-box;font-family:SF Pro Display;}
             @font-face {
              font-family: Chronicle Display;
              src: url('public/fonts/Chronicle-Display-Black.otf')
                format('opentype');
              font-display: swap;
            }

            @font-face {
              font-family: Chronicle Display;
              font-weight: 300;
              src: url('public/fonts/Chronicle-Display-Light.otf')
                format('opentype');
              font-display: swap;
            }

            @font-face {
              font-family: Chronicle Display;
              font-weight: 400;
              src: url('public/fonts/Chronicle-Display-Roman.otf')
                format('opentype');
              font-display: swap;
            }

            @font-face {
              font-family: Chronicle Display;
              font-weight: 500;
              src: url('public/fonts/Chronicle-Display-Medium.otf')
                format('opentype');
            }

            @font-face {
              font-family: Chronicle Display;
              font-weight: 600;
              src: url('public/fonts/Chronicle-Display-Semibold.otf')
                format('opentype');
              font-display: swap;
            }

            @font-face {
              font-family: Chronicle Display;
              font-weight: 700;
              src: url('public/fonts/Chronicle-Display-Bold.otf')
                format('opentype');
              font-display: swap;
            }

            @font-face {
              font-family: Chronicle Display;
              font-weight: 800;
              src: url('public/fonts/Chronicle-Display-Heavy.otf')
               format('opentype');
              font-display: swap;
            } 
            
            `}
          </style>

      </Head>

      <div className="container-fluid">

        {header.map((Component, i) => {
          return (
            <div key={i}>
              <Component data={props.menu} />
            </div>
          )
        })}

        {props.children}

        {footer.map((Component) => {
          return (
            <div key={`footer`}>
              <Component />
            </div>
          )
        })}

      </div>

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

    </>
  )
}
