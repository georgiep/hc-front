import Carousel from './Carousel'
import PrefetchLink from "components/links/PrefetchLink";

const Template3 = ({ data }) => {
    let { items, css, link } = data

    return (
        <>
            <div className="container-outer w-100 carousel-template3">
                <Carousel items={items} css={css} />
                {
                    link && <div className={'d-block more-link-carousel-template3'}>
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
                 }
                
              ` }</style>
            </div>
        </>

    )
}

export default Template3
