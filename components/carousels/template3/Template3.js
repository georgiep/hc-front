import Carousel from './Carousel'
import PrefetchLink from "components/links/PrefetchLink";
import {mediaBreakPoints} from "../../../public/globalCss/mediaBreakPoints";

const Template3 = ({ data }) => {
    let { items, css, link } = data

    return (
        <>
            <div className="container-outer w-100 carousel-template3">
                <Carousel items={items} css={css} />
                {
                    link && <div className={'d-block more-link-carousel-template3 position-relative'}>
                        <PrefetchLink pathname={link.pathname} api={link.api}>
                            <button className={'button-secondary f-r text-uppercase'}>
                                see all
                            </button>
                        </PrefetchLink>
                    </div>
                }
                 <style jsx>{`
                .container-outer{
                    background: #EFF1FD;
                 }
                 .more-link-carousel-template3{
                    margin-right: 10px;
                     z-index: 9999;
                 }
                 
                  @media only screen and (max-width: ${mediaBreakPoints.md}) {
                         .more-link-carousel-template3{
                             margin-top: 35px;
                         }
                    } 
                
              ` }</style>
            </div>
        </>

    )
}

export default Template3
