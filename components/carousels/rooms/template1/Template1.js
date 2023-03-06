import Carousel from './Carousel'
import PrefetchLink from "components/links/PrefetchLink";
const Template1 = ({ data }) => {
    let { items, css, link } = data

    return (
        <>
            <div className="container-outer w-100">
                <div className={'d-flex justify-content-between'}>
                    <div>
                        Nin & Bau Sarri 2 Special Offers
                    </div>
                    {
                        link && <div>
                            <PrefetchLink pathname={link.pathname} api={link.api}>
                                <button className={'button-secondary f-r text-uppercase'}>
                                    see all
                                </button>
                            </PrefetchLink>
                        </div>
                    }
                </div>
                <Carousel items={items} css={css} />

            </div>
        </>

    )
}

export default Template1
