import ImageLoader from "components/commons/image/ImageLoader";
import PrefetchLink from "components/links/PrefetchLink";
import {mediaBreakPoints} from "../../../public/globalCss/mediaBreakPoints";

const Single = ({ item, css, number, position }) => {
    let { image, link, title } = item;

    return (
        <>
            <PrefetchLink api={link.api} pathname={link.pathname}>
                <div className={"w-100 w-100 h-100 wrapper"}>
                    <div
                        className={`d-flex position-relative w-100 h-100 ${
                            position === "right" ? "f-r" : "f-l"
                        }`}
                    >

                        {image && (
                            <ImageLoader
                                src={image.src}
                                alt={image.alt}
                                layout="fill"
                                objectFit="cover"
                                objectPosition="center"
                                type="absolute"
                            />
                        )}

                        <h2 className={`post-link-text pos-rel ${css.color}`}>{title}</h2>

                        <div className={'hover-items position-absolute'}>
                            <div className={'d-block f-r'}>
                                <button className={'button-primary text-uppercase'}>explore</button>
                            </div>
                        </div>

                    </div>


                </div>

                <style jsx>
                    {`
                 
                      .hover-items{
                        z-index: -1;
                        background: rgba(4, 69, 109, 0.6);
                        width: calc(100% - 40px);
                        height: calc(100% - 40px);
                        left: 20px;
                        top: 20px;
                      }
                      
                      .wrapper:hover .hover-items{
                          z-index: 1;
                      }
                      
                      .hover-items > div{
                        margin: 20px;
                      }
                      
                      .post-link-text{
                         margin-top: auto;
                         z-index: 2;
                         padding-bottom: 40px;
                         padding-left: 68px;
                      }
                      
                       @media only screen and (max-width: ${mediaBreakPoints.lg}) {
                          .hover-items{
                              z-index: 1;
                          }
                       }
            
                    `}
                </style>
            </PrefetchLink>
        </>
    );
};

export default Single;
