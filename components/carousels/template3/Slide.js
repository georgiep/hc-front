import ImageLoader from 'components/commons/image/ImageLoader'
import PrefetchLink from "components/links/PrefetchLink";
import Text2 from "components/commons/Text2/Text2";
import LineSeparator from "components/body/separators/LineSeparator";
import {Fragment} from 'react'
import {mediaBreakPoints} from "../../../public/globalCss/mediaBreakPoints";

const Slide = ({ item, css }) => {
    let { link, image, title, description, amenities_with_icons } = item

    return (
        <>
            <div className="slide">

                <div className="image w-100 ratio ratio-4x3 position-relative overflow-hidden">
                    <ImageLoader
                        src={image.src}
                        alt={image.alt}
                        // width={'100%'}
                        // height={'100%'}
                        layout='fill'
                        objectFit='cover'
                        objectPosition="center"
                        type="absolute"/>
                </div>

                <div className="info">
                    <Text2 titleStyle={`${css.title.class} ${css.title.color}`} text={title} tag={css.title.element}/>
                </div>

                <div>
                    <Text2 titleStyle={`${css.description.class} ${css.description.color}`} text={description} tag={css.description.element}/>
                </div>

                <LineSeparator padding={'15px 0'} maxWidth={'100%'}/>

                {
                    amenities_with_icons && <DisplaySvgWithText items={amenities_with_icons} css={css.amenities}/>
                }

                {
                    link && css?.link?.class && <div className={'more-btn'}><PrefetchLink pathname={link.pathname} api={link.api} width={'100%'} external={link.external || false}><div className={'btn-text'}>
                        <div className={'f-r'}>
                          <button className={`${css.link.class} ${css.link.color}`}>{link.text}</button>
                        </div>
                    </div></PrefetchLink></div>
                }

            </div>
            <style jsx>
                {`
                
                  //.image{
                  //   width: 100%;
                  //   height: 510px;
                  //}
                  
                    @media only screen and (max-width: ${mediaBreakPoints.lg}) {
                         //.image{
                         //    width: 100%;
                         //    height: 310px;
                         // } 
                    } 

                  .slide {
                    margin-right: 0;
                    padding-bottom: 80px;
                    height: 100%;
                    position: relative;
                  }
                  
                  .info {
                    margin: 30px 0 30px 0;
                    padding: 0;
                  }
                  
                  .more-btn{
                    position: absolute;
                    bottom: 10px;
                    right: 0;
                  }
                  
                `}
            </style>
        </>
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

export default Slide
