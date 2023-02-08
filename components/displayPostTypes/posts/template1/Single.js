import ImageLoader from "components/commons/image/ImageLoader";
import PrefetchLink from "components/links/PrefetchLink";
import Text2 from 'components/commons/Text2/Text2'

const Single = ({ item, css, number, position }) => {
    let { image, link, title, description } = item;

    return (
        <>
            <PrefetchLink api={link.api} pathname={link.pathname}>
                <div className={"w-100 w-100 h-100 wrapper"}>

                    <div className={'w-100 ratio ratio-1x1 position-relative overflow-hidden'}>
                        {image && (
                            <ImageLoader
                                src={image}
                                type={'absolute'}
                                layout="fill"
                                objectFit="cover"
                                objectPosition="center"
                            />
                        )}
                    </div>
                    <div className={'content position-relative'}>
                        <div className={'content--title'}>
                            <Text2 text={title} titleStyle={`${css.title.color} ${css.title.class} text-capitalize`} tag={css.element}/>
                        </div>
                        <div>
                            <Text2 text={description} titleStyle={`${css.description.color} ${css.description.class}`} tag={css.element}/>
                        </div>

                        {/*<div className={'d-flex flex-column'}>*/}
                        {/*    <div className={'d-block f-r'}>*/}
                        {/*        <button className={'button-primary text-uppercase'}>book now</button>*/}
                        {/*    </div>*/}
                        {/*</div>*/}
                    </div>

                </div>

                <style jsx>
                    {`
                 
                        .hotel-image{
                           height: 500px;
                        }
                        
                        .content{
                           padding: 30px 0;
                        }
                        
                        .content--title{
                           padding-bottom: 10px;
                        }
            
                    `}
                </style>
            </PrefetchLink>
        </>
    );
};

export default Single;

