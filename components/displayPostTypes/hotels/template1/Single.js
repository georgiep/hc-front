import {Fragment} from 'react'
import ImageLoader from 'components/commons/image/ImageLoader'
import Text2 from "components/commons/Text2/Text2";
// import useDynamicSVGImport from "components/commons/dynamicSvg/useDynamicSvgImport";
import PrefetchLink from 'components/links/PrefetchLink'
import LineSeparator from "components/body/separators/LineSeparator";
import {mediaBreakPoints} from 'public/globalCss/mediaBreakPoints'

const Single = ({ item, css, orderReverse }) => {

    let { image, description, title, amenities, link, min_price } = item

    return (
        <div className={'single-post-layout'}>

            <div className={`post-layout-bg-color ${orderReverse ? 'r0' : ''}`}/>

            <div className={`single-post-layout-row d-flex position-relative ${orderReverse ? 'flex-row-reverse' : ''} `}>


                <div className="info">
                    {
                        title &&
                        <div>
                            <PrefetchLink api={link.api} pathname={link.pathname}>
                                <Text2 titleStyle={`${css.title.class} ${css.title.color}`} text={title} tag={css.title.element}/>
                            </PrefetchLink>
                        </div>
                    }

                    <LineSeparator padding={'15px 0'} maxWidth={'100%'}/>
                    {
                        description &&
                        <Text2 titleStyle={`${css.description.class} ${css.description.color}`} text={description} tag={css.description.element}/>
                    }

                    <LineSeparator padding={'15px 0'} maxWidth={'100%'}/>

                    {
                        amenities && <DisplaySvgWithText items={amenities} css={css.amenities}/>
                    }

                    <LineSeparator padding={'20px 0'} maxWidth={'100%'}/>

                    <div className={'btn-text d-flex justify-content-between align-items-center'}>

                        {
                            min_price && <Text2 titleStyle={`${css.description.class} ${css.title.color} font-500 me-3`} text={`From €${min_price} Per 1 night`} tag={css.description.element}/>
                        }

                        <div className={`f-r ${ !min_price && !orderReverse ?  '' : 'text-right'} `}>
                            <PrefetchLink api={link.api} pathname={link.pathname}>
                                <Text2 titleStyle={`${css.link.class} ${css.link.color}`} text={link.text} tag={css.link.element}/>
                            </PrefetchLink>
                        </div>
                    </div>

                </div>

                <div className="image w-100 ratio ratio-16x9 position-relative overflow-hidden">
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
                  .single-post-layout{
                     padding-bottom: 40px;
                  }
                  
                  .flex-row-reverse .btn-text .f-r {
                      margin-left: auto;
                  }
                  
                  .post-layout-bg-color{
                     background: #EFF1FD;
                     position: absolute;
                     top: 0;
                     height: calc(100% - 120px);
                     width: 80%;
                     z-index: 0;
                  }
                  
                  .r0{
                    right: 0;
                  }
                  
                  .d-flex{
                     z-index: 1;
                  }
                  
                  .d-flex > div{
                     max-width: 50%;
                     flex: 50%;
                  }
    
                  .info{
                     padding: 37px 41px 31px 38px;
                     margin-bottom: 60px;
                  }

                  @media only screen and (max-width: ${mediaBreakPoints.lg}) {
                  
                      .d-flex > div{
                         max-width: 100%;
                         flex: inherit;
                      }
                      
                      .single-post-layout-row{
                         flex-direction: column-reverse !important;
                      }
                      
                      .post-layout-bg-color{
                         width: 100%;
                      }
                      
                      .flex-row-reverse .btn-text .f-r {
                          margin-left: 0;
                      }
                  
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
            <li className={'d-flex align-items-center align-content-center'}>
                <div style={{width: '30px',height: '30px', minWidth: '30px'}}>
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
