import ImageLoader from "components/commons/image/ImageLoader";
import PrefetchLink from "components/links/PrefetchLink";
import Text2 from 'components/commons/Text2/Text2'
import {mediaBreakPoints} from "../../../../public/globalCss/mediaBreakPoints";

const Single = ({ item, css }) => {
    let { image, link, title, description } = item;

    return (
        <>
            <PrefetchLink api={link.api} pathname={link.pathname} external={true}>
                <div className={"w-100 w-100 h-100 wrapper position-relative overflow-hidden"}>
                    <div
                        className={`d-flex position-relative w-100 h-100`}
                    >

                        {image && (
                            <ImageLoader
                                src={image}
                                layout="fill"
                                objectFit="cover"
                                objectPosition="center"
                                type="absolute"
                            />
                        )}

                        <h2 className={`post-link-text-full pos-rel ${css.color}`}>{title}</h2>

                        <div className={'hover-items position-absolute d-flex flex-column'}>
                            <div className={'d-block f-r'}>
                                <button className={'button-primary text-uppercase'}>book now</button>
                            </div>

                            <div className={'post-link-text'}>
                                <div>
                                   <Text2 text={title} titleStyle={`${css.color} ${css.class} text-capitalize`} tag={css.element}/>
                                </div>
                                <div>
                                   <Text2 text={description} titleStyle={`${css.color} ${css.class}`} tag={css.element}/>
                                </div>
                            </div>

                        </div>

                    </div>

                    <div className={'bg-opacity position-absolute w-100 h-100'}></div>

                </div>

                <style jsx>
                    {`

                     .bg-opacity{
                         background: rgba(0,0,0,0.1);
                         left: 0;
                         top: 0;
                         z-index: 1;
                      }    
                 
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
                      
                      .wrapper:hover .post-link-text-full{
                          display: none;
                      }
                      
                      .hover-items > div:nth-child(1){
                        margin: 20px;
                        text-align: right;
                      }
                      
                      .post-link-text-full{
                         margin-top: auto;
                         z-index: 2;
                         padding-bottom: 40px;
                         padding-left: 68px;
                      }
                      
                      .post-link-text{
                         margin-top: auto;
                         z-index: 2;
                         padding-bottom: 40px;
                         padding-left: 40px;
                         padding-right: 40px;
                      }
                      .post-link-text > div:nth-child(1){
                         margin-bottom: 20px; 
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
