import ImageLoader from "components/commons/image/ImageLoader";
import Text2 from "components/commons/Text2/Text2";
import React from "react";
import dynamic from "next/dynamic";
const Form = dynamic(() => import("components/availability/Form5") , { ssr: false })

const HeroImageWithBookingForm = ({data}) => {
    const {items, image, heading, css} = data

    // console.log(css)
    return(
        <div>

            <div className={'hero-image'}>
                <div className={'bg-opacity w-100 h-100 position-absolute'}></div>

                {items.length && (
                    <ImageLoader
                        src={items[0].src}
                        alt={items[0].alt}
                        layout="fill"
                        objectFit="cover"
                        objectPosition="center"
                        type="absolute"
                        priority={true}
                    />
                )}

                <div className={'position-relative col-md-12 content-container'}>
                    <div className={'position-absolute w-100 h-100'}>
                        {
                            heading &&
                            <div className={"text-uppercase center-top-position content"}>
                                <Text2
                                    tag={css.heading.element}
                                    titleStyle={`${css.heading.class} ${css.heading.color} position-absolute w-100`}
                                    text={heading}
                                />
                            </div>
                        }
                    </div>
                </div>

            </div>

            <Form/>

            <style jsx global>{`
              
                .center-top-position > div{
                    left: -16px;
                    top:  ${css?.position?.top || '-50px'};
                    padding: 0 20px;
                    max-width: ${css?.position?.textMaxWidth || '100%'};
                }
                
            `}</style>

            <style jsx>{`
            
              .bg-opacity{
                 background: rgba(0,0,0,0.2);
                 z-index: 1;
              }
              
              .hero-image{
                height: 100vh;
              }
              .content{
                max-width: ${css?.position?.contentMaxWidth || '791px'};
                margin: 0 auto;
                padding: 0;
                z-index: 2;
             }
             .content-container{
                top: 50%;
                text-align: ${css?.position?.textAlign || 'center'};
                z-index: 2;
             }
             
             .center-top-position {
                  top: 50%;
                  -webkit-transform: translateY(-50%);
                  -moz-transform: translateY(-50%);
                  -ms-transform: translateY(-50%);
                  -o-transform: translateY(-50%);
                  -webkit-transform: translateY(-50%);
                  -ms-transform: translateY(-50%);
                  transform: translateY(-50%);
             }
             
            `}</style>
        </div>
    )
}

export default HeroImageWithBookingForm


// "position": {
//     "contentMaxWidth": "1440px",
//     "textMaxWidth": "920px",
//     "textAlign": "left",
//     "top": "-100px"
// }