import {Fragment} from 'react'
import ImageLoader from 'components/commons/image/ImageLoader'
import Text2 from "components/commons/Text2/Text2";
import PrefetchLink from 'components/links/PrefetchLink'
import LineSeparator from "components/body/separators/LineSeparator";
import {mediaBreakPoints} from 'public/globalCss/mediaBreakPoints'
import {useBreakpointContext} from "context/BreakpointContext";

const Single = ({ item, css, orderReverse, lastItem }) => {

    let { image, description, title, amenities, link, min_price, award, location } = item

    const {small} = useBreakpointContext()

    return (
        <div className={`single-post-layout ${!lastItem ? 'mb-5': '' }`}>

            <div className={`post-layout-bg-color ${orderReverse ? 'r0' : ''}`}/>

            <div className={`single-post-layout-row d-flex position-relative flex-row-reverse `}>

                <div className="info me-5">
                    {
                        title &&
                        <div className={'d-flex'}>
                            <div className={'flex-grow-1'}>
                                <div>
                                    <PrefetchLink api={link.api} pathname={link.pathname}>
                                        <Text2 titleStyle={`${css.title.class} ${css.title.color}`} text={title} tag={css.title.element}/>
                                    </PrefetchLink>
                                </div>
                                {
                                    location &&
                                    <Text2 titleStyle={`${css.location.class} ${css.location.color}`} text={location} tag={css.location.element}/>
                                }
                            </div>
                            <div>
                                {
                                    award &&
                                    <div style={{width: award.width, height: award.height}}>
                                        <ImageLoader
                                            src={award}
                                            layout={'fill'}
                                        />
                                    </div>
                                }
                            </div>
                        </div>
                    }
                    {/*<LineSeparator padding={'15px 0'} maxWidth={'100%'}/>*/}
                    {
                        description &&
                        <Text2 titleStyle={`${css.description.class} ${css.description.color}`} text={description} tag={css.description.element}/>
                    }

                    {
                        !small && <>
                            <LineSeparator padding={'5px 0'} maxWidth={'100%'}/>
                            {amenities && <DisplaySvgWithText items={amenities} css={css.amenities}/>}
                        </>
                    }

                    <LineSeparator padding={'25px 0'} maxWidth={'100%'}/>

                    {
                        min_price && <Text2 titleStyle={`text-small-bold text-right ${css.title.color}`} text={`From €${min_price}`} tag={css.description.element}/>
                    }

                    <LineSeparator padding={'5px 0'} maxWidth={'100%'}/>

                    <div className={'btn-text d-flex justify-content-between align-items-center text-right'}>

                        <div className={`single-post-layout--button f-r ${ !min_price && !orderReverse ?  '' : 'text-right'} `}>
                            <PrefetchLink api={link.api} pathname={link.pathname}>
                                <Text2 titleStyle={`${css.link.class} ${css.link.color}`} text={link.text} tag={css.link.element}/>
                            </PrefetchLink>
                        </div>
                    </div>

                </div>

                <div className="image w-100 ratio ratio-16x9 position-relative overflow-hidden me-5">
                    {
                        image &&
                        <ImageLoader
                            src={image}
                            layout="fill"
                            objectFit="cover"
                            objectPosition="center"
                            type="absolute"/>
                    }
                </div>

            </div>

            <style jsx>
                {`

                  .image{
                     max-width: 311px;
                  }
                  
                  .single-post-layout--button{
                      margin-left: auto;
                  }
                  
                   
                  .d-flex{
                     z-index: 1;
                  }
              

                  @media only screen and (max-width: ${mediaBreakPoints.lg}) {
                  
                      .d-flex > div{
                         max-width: 100%;
                         flex: inherit;
                      }

                  }
                  
                  @media only screen and (max-width: ${mediaBreakPoints.md}) {

                  }
             
                `}
            </style>
        </div>

    )
}

const DisplaySvgWithText = ({items,css}) => {
    return <ul className={'d-flex flex-wrap align-items-center'}>
        {items && items.map((item,i) => {
            return (
                <Fragment key={`hotel-svg-icons-${i}`}>
                    <IconWithText item={item} css={css}/>
                </Fragment>
            )
        })}
    </ul>

}

const IconWithText = ({item,css}) => {
    return (
        <>
            <li className={'d-flex align-items-center align-content-center col-6 p-0 my-1'}>
                <div style={{width: '20px',height: '17px', minWidth: '20px'}}>
                    <ImageLoader src={item.icon} layout={'fill'}/>
                </div>
                <Text2 tag={css.element} text={item.name} titleStyle={`${css.class} ${css.color} col-auto`}/>
            </li>
            <style jsx>
                {`
                li {
                    display: inline-block;
                    padding-right: 25px;
                    padding-bottom: 15px;
                }
            `}
            </style>
        </>

    )
}

export default Single
