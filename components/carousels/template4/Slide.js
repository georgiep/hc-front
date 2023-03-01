import ImageLoader from 'components/commons/image/ImageLoader'
import PrefetchLink from "components/links/PrefetchLink";
import Text2 from "components/commons/Text2/Text2";
import LineSeparator from "components/body/separators/LineSeparator";
import {mediaBreakPoints} from 'public/globalCss/mediaBreakPoints'

const Wrap = ({children}) => <div>{children}</div>

const Slide = ({ item, css }) => {
    let { link, image, title} = item

    let Wrapper = PrefetchLink

    if(!link){
        Wrapper = Wrap
    }

    return (
        <Wrapper pathname={link?.pathname} api={link?.api} width={'100%'}>
            <div className="slide">
                <div className="image position-relative">

                    <ImageLoader
                        src={image.src}
                        alt={image.alt}
                        width={image.width}
                        height={image.height}
                    />

                    {
                        title && <> <div className="info position-absolute">
                            <Text2 titleStyle={`${css.title.class} ${css.title.color}`} text={title} tag={css.title.element}/>
                        </div>
                          <div className={'placeholder position-absolute'}> </div>
                        </>
                    }

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
                  .info,.placeholder {
                    width: calc(100% - 40px);
                    height: calc(100% - 40px);
                    top: 20px;
                    padding: 20px;
                    left: 20px;
                    opacity: 0;
                    z-index: 2;
                  }
                  
                  .placeholder{
                     z-index: 1;
                     background: #04456D;
                     opacity: 0;
                  }
                  
                  .slide:hover .info{
                     opacity: 1;
                  }
                  .slide:hover .placeholder{
                     opacity: 0.6;
                  }
                  @media only screen and (max-width: ${mediaBreakPoints.lg}) {
                      .info{
                        opacity: 1;
                      }
                      .placeholder{
                         opacity:  0.6;
                      }
                  }
               
                `}
            </style>
        </Wrapper>
    )
}





export default Slide
