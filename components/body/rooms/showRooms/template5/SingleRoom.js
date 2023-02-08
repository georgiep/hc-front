import ImageLoader from 'components/commons/image/ImageLoader'
import Heading from 'components/commons/headings/Heading'
import PrefetchLink from "components/links/PrefetchLink";

const SingleRoom = ({ room, css }) => {
    let { image, name, link } = room

    return (
        <>
            <PrefetchLink api={link.api} pathname={link.pathname}>
                <div className="image w-100 position-relative">

                    <div className={"bg-rooms position-absolute w-100 h-100"} />

                    {image &&
                        <ImageLoader
                            src={image}
                            layout="fill"
                            objectFit="cover"
                            objectPosition="center"
                            type="relative"/>
                        }

                    {name &&
                        <div className="name center-l-t-absolute-position position-absolute">
                            <Heading text={name} headingLevel={'4'} css={css.name} />
                        </div>
                    }

                </div>

                <style jsx>
                    {`
                    
                      .image{
                        height: 480px;
                      }
                      
                      .name{
                        margin: 0;
                        padding: 0;
                        z-index: 2;
                      }
                      
                      .bg-rooms{
                        background: linear-gradient(180deg, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0) 100%);
                        z-index: 1;
                      }
                      
                    `}
                </style>
            </PrefetchLink>
        </>
    )
}

export default SingleRoom
