import ImageLoader from 'components/commons/image/ImageLoader'
import Heading from 'components/commons/headings/Heading'
import Text from 'components/commons/text/Text';
import PrefetchLink from 'components/links/PrefetchLink';
import { CircleArrowRightRed } from 'components/commons/svgs'

const SingleRoom = ({ room, css }) => {
    let { image, name, info, link } = room

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

                    {info &&
                        <div className="info">
                            <Text tag={'div'} text={info} css={css.info} />
                        </div>
                    }

                    {name &&
                        <div className="d-table name">
                            <div className="d-table-cell">
                                <Heading text={name} headingLevel={'4'} css={css.name} />
                            </div>
                        </div>
                    }

                    <div className="pointer">
                        <CircleArrowRightRed />
                    </div>

                </div>

                <style jsx>
                    {`
                      .image{
                        height: 480px;
                      }
                      .show-rooms-inner{
                         padding: 50px;
                         margin: 0;
                      }
                      .name{
                        margin: 0;
                        padding: 0;
                      }
                      .info{
                        margin: 0;
                        padding: 0;
                      }

                    `}
                </style>
            </PrefetchLink>
        </>
    )
}

export default SingleRoom
