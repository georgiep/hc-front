import ImageLoader from 'components/commons/image/ImageLoader'
import PrefetchLink from "components/links/PrefetchLink";
import Text2 from "components/commons/Text2/Text2";
import LineSeparator from "components/body/separators/LineSeparator";
import {mediaBreakPoints} from 'public/globalCss/mediaBreakPoints'

const Slide = ({ item, css }) => {
    let { link, image, title, button} = item

    return (
        <div>
            <div className="slide">
                <div className="image position-relative ratio ratio-1x1">
                    <ImageLoader
                        src={image.src}
                        alt={image.alt}
                        layout="fill"
                        objectFit="cover"
                        objectPosition="center"
                        type="absolute"
                    />
                </div>
                <div className="info my-2 d-flex justify-content-between align-items-center">
                    <Text2 titleStyle={`${css?.title.class} ${css?.title.color}`} text={title} tag={css?.title.element}/>
                    <PrefetchLink pathname={link.pathname}>
                       <button className={`${css?.button?.class} ${css?.button?.color}`}>
                           EXPLORE
                       </button>
                    </PrefetchLink>
                </div>
                <LineSeparator padding={'15px 0'} maxWidth={'100%'}/>
            </div>
            <style jsx>
                {`
                  .image{
                     width: 100%;
                  }
                  .slide {
                    margin-right: 0;
                    padding-bottom: 10px;
                  }
                  
                  @media only screen and (max-width: ${mediaBreakPoints.lg}) {
                    
                  }
               
                `}
            </style>
        </div>
    )
}





export default Slide
