import ImageLoader from 'components/commons/image/ImageLoader'
import Heading from 'components/commons/headings/Heading'
import PrefetchLink from 'components/links/PrefetchLink';
import Text from 'components/commons/text/Text';
import {ArrowElegant} from 'components/commons/svgs'

const SingleRoom = ({ room, css , number, position }) => {

    let { image, name, info, room_details, link  } = room

    return (
        <>
            <PrefetchLink api={link.api} pathname={link.pathname}>

                <div className={"w-100 f-l"}>

                    <div className={`image w-70 position-relative ${position === 'right' ? 'f-r' : 'f-l'}`}>

                        <div className={"bg-rooms position-absolute w-100 h-100"} />

                        {image &&
                            <ImageLoader
                                src={image}
                                layout="fill"
                                objectFit="cover"
                                objectPosition="center"
                                type="relative"/>
                        }

                    </div>

                    <div className={`
                        room-inner 
                        mw-40 
                        w-100 
                        center-top-absolute-position 
                        position-absolute ${position === 'right' ? 'abs-l' : 'abs-r'}`}
                    >

                        {number &&
                            <div className="d-table name">
                                <div className={"line position-relative d-table-cell"}>
                                    <span className={"position-absolute w-100"}/>
                                </div>
                                <div className={"d-table-cell separator"} />
                                <div className="d-table-cell room-number">
                                    {number < 10 ? '0'+number : number}
                                </div>
                            </div>
                        }

                        {name &&
                            <div className="name">
                                <Heading text={name} headingLevel={'4'} css={css.name} />
                            </div>
                        }

                        {room_details &&
                            <div className={"f-l w-100"}>
                                <ul className={"room_details f-l position-relative"}>

                                    <div className={"line-separator f-l position-absolute top w-auto"} />

                                    {room_details.map(( detail, i ) => <li className={"d-inline-block f-l"} key={i}>
                                        <div className={"f-l"}>
                                            <Text tag={'div'} text={detail} css={css.room_details}/>
                                        </div>
                                        <div className={"separator-detail d-inline-block f-l"}>/</div>
                                    </li>)}

                                    <div className={"line-separator f-l position-absolute bottom w-auto"} />

                                </ul>
                            </div>
                        }

                        {info &&
                            <div className={"f-l w-100"}>
                                <Text tag={'div'} text={info} css={css.info}/>
                            </div>
                        }

                        <div className={"f-l d-flex align-items-center"}>
                            <span className={"arrow-elegant d-inline-block position-relative"}>
                                <b className={"d-inline-block position-relative"}><ArrowElegant /></b>
                            </span>
                            <span className={"link"}>
                                <Text tag={'span'} text={link.text} css={css.link}/>
                            </span>

                        </div>


                    </div>
                </div>


                <style jsx>
                    {`
                    
                      .room-inner{
                        background: red;
                        z-index: 1;
                        padding: 50px;
                      }
                      
                      .image{
                        height: 480px;
                      }
                      
                      .name{
                        padding: ${css.name.desktop.padding || 0};
                        margin: ${css.name.desktop.margin || 0};
                        z-index: 2;
                      }
                      
                      .link{
                        padding: ${css.link.desktop.padding || 0};
                        margin: ${css.link.desktop.margin || 0};
                      }
                      
                      .bg-rooms{
                        background: linear-gradient(180deg, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0) 100%);
                        z-index: 1;
                      }
                      
                      .line{
                        width: 72px;
                      }
                      
                      .line span{
                        top: 50%;
                        height: 1px;
                        background-color: ${css.name.color || '#ffffff'};
                      }
                      
                      .separator{
                        width: 10px;
                      }
                      
                      .separator-detail{
                        padding: 0 7px;
                        color: ${css.room_details.color || '#ffffff'};
                      }
                      
                      .arrow-elegant{
                         background: #F4F6F9;
                         width: 53px;
                         height: 53px;
                         border-radius: 50%;
                      }
                      
                      .arrow-elegant b{
                         top: 18px;
                         left: 17px;
                      }
                      
                    `}
                </style>
            </PrefetchLink>
        </>
    )
}

export default SingleRoom
