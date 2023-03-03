import Carousel from './Carousel'
import PrefetchLink from "components/links/PrefetchLink";
const Template5 = ({ data }) => {
    let { items, css, link } = data

    return (
        <>
            <div className="container-outer w-100">
                <Carousel items={items} css={css} />
                {
                    link && <div className={'d-block'}>
                        <PrefetchLink pathname={link.pathname} api={link.api}>
                            <button className={'button-secondary f-r text-uppercase'}>
                                see all
                            </button>
                        </PrefetchLink>
                    </div>
                }
            </div>
        </>

    )
}

export default Template5
