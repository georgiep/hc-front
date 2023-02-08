import ImageLoader from 'components/commons/image/ImageLoader'
import Heading from 'components/commons/headings/Heading'
import Text from "components/commons/text/Text";
import PrefetchLink from "components/links/PrefetchLink";
import Button from "components/commons/buttons/Button";

const SingleRoom = ({ room, css }) => {
    let { image, name, facilities, room_details, info, link } = room

    return (
        <>
            <PrefetchLink api={link.api} pathname={link.pathname}>
                <div className="image w-100">
                    {image &&
                        <ImageLoader
                            src={image}
                            layout="fill"
                            objectFit="cover"
                            objectPosition="center"
                            type="relative"/>
                    }
                </div>

                <div className={"show-rooms-inner"}>

                    {name &&
                        <div className="d-table name">
                            <div className="d-table-cell">
                                <Heading text={name} headingLevel={'4'} css={css.name} />
                            </div>
                        </div>
                    }

                    {info &&
                        <div className="info">
                            <Text tag={'div'} text={info} css={css.info} />
                        </div>
                    }

                    {room_details &&
                        <div className={"f-l w-100"}>
                            <ul className={"room_details f-l position-relative"}>

                                <div className={"line-separator f-l position-absolute top w-auto"} />

                                {room_details.map(( detail, i ) => <li className={"d-inline-block f-l"} key={i}>
                                    <Text tag={'div'} text={detail} css={css.room_details}/>
                                </li>)}

                                <div className={"line-separator f-l position-absolute bottom w-auto"} />

                            </ul>
                        </div>
                    }

                    {facilities &&
                        <div className={"f-l w-100"}>
                            <ul className={"room_facilities"}>
                                {facilities.map((facility, i) => <li className={"position-relative"} key={i}>
                                    <Text tag={'div'} text={facility} css={css.facilities}/>
                                </li>)}
                            </ul>
                        </div>
                    }

                    {link && <Button buttonStyle={'btn pointer'} button={link} css={css.link} />}

                </div>

                <style jsx>
                    {`
                      .image {
                        height: 480px;
                      }
                      .show-rooms-inner{
                         padding: 50px;
                         margin: 0;
                      }
                      .name {
                        margin: 0;
                        padding: 0;
                      }
                      .info{
                        margin: 0;
                        padding: 0;
                      }
                      .room_details > li{
                        padding: 10px 20px;
                        margin: 0;
                        border-left: 1px dashed #DBDDEA;
                      }
                      .room_details > li:nth-child(2){
                        padding-left: 0;
                        border-left: 0;
                      }
                      .line-separator{
                        min-width: 400px;
                        background: 1px #DBDDEA;
                        height: 1px;
                      }
                      .line-separator.top{
                        top: 0; 
                      }
                      .line-separator.bottom{
                        bottom: 0;
                      }
                      .room_facilities li:before{
                        content: "";
                        background: #fff;
                        width: 4px;
                        height: 4px;
                        display: inline-block;
                        top: calc(50% - 2px);
                        position: absolute;
                        left: 0;
                      }
                      
                      .room_facilities li{
                         padding-left: 10px;
                      }
                      
                    `}
                </style>
            </PrefetchLink>
        </>
    )
}

export default SingleRoom
