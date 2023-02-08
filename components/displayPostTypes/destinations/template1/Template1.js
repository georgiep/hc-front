import React from "react";
import ImageLoader from "components/commons/image/ImageLoader";
import Text2 from "components/commons/Text2/Text2";
import PrefetchLink from "components/links/PrefetchLink";
import {mediaBreakPoints} from "../../../../public/globalCss/mediaBreakPoints";

const Template1 = ({ data }) => {
    let { title,image,link,css } = data;

    return (
        <>
            <div className="d-flex justify-content-center w-100">

                <div className={'post-container w-100'}>
                    <PrefetchLink api={link.api} pathname={link.pathname}>
                        <div className={"w-100 w-100 h-100 wrapper"}>
                            <div
                                className={`d-flex position-relative w-100 h-100 f-r`}
                            >

                                <div className={'bg-opacity position-absolute w-100 h-100'}/>

                                {image && (
                                    <ImageLoader
                                        src={image}
                                        layout="fill"
                                        objectFit="cover"
                                        objectPosition="center"
                                        type="absolute"
                                    />
                                )}

                                <div className={'post-link-text w-100'}>
                                    <div>
                                        <Text2 text={'Explore'} titleStyle={`${css.color} ${css.class} text-uppercase`} tag={css.element}/>
                                    </div>
                                    <div>
                                        <Text2 text={title} titleStyle={`${css.color} ${css.class} text-capitalize`} tag={css.element}/>
                                    </div>
                                </div>

                            </div>

                        </div>

                    </PrefetchLink>
                </div>

            </div>
            <style jsx>
                {`
                     .post-container{
                       height: 750px;
                     }

                     @media only screen and (max-width: 600px) {
                         .post-container{
                           height: 350px;
                         }
                     }
                     
                     .post-link-text{
                         margin-top: auto;
                         z-index: 2;
                         padding-bottom: 160px;
                     }
                     
                     .post-link-text > div{
                        max-width: 350px;
                        margin: 0 auto;
                     }
                     
                     .bg-opacity{
                       background: rgba(0,0,0,0.4);
                       z-index: 1;
                     }    
                     
                    
                       
                 `}
            </style>
        </>

    );
};

export default Template1;
