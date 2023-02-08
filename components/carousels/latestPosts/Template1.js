import Carousel from './Carousel'
import PrefetchLink from "components/links/PrefetchLink";
import LineSeparator from "components/body/separators/LineSeparator";
const Template1 = ({ data }) => {
    let { items, css, link } = data

    return (
        <>
            <div className={'title-case-secondary primary-dark'}>
                Latest Posts
            </div>
            <LineSeparator padding={'20px'} color={'#04456D'} maxWidth={'100%'} />
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
                <style jsx>{`
                
              ` }</style>
            </div>
        </>

    )
}

export default Template1
