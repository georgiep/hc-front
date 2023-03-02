import {Fragment} from "react";
import { getRemoteInitialData } from 'helpers/getData'
import {createLayout} from 'helpers/createLayout'
import { bodyListDynamic } from 'components/dynamicComponents'
import LayoutVista from "components/layouts/LayoutVista";
import Wrapper from "components/commons/Wrapper/Wrapper";
import { v4 } from 'uuid';
function Page(props) {

    const {
        header,
        page,
        header_components,
        footer_components,
        page_components,
        initialRequest,
        globals
    } = props;

    delete page.idbName

    const wrappers = createLayout(page_components,page,bodyListDynamic)

    return (
        <LayoutVista
            title={page.SEO.title}
            description={page.SEO.description}
            keywords={page.SEO.keywords}
            menu={header}
            header={header_components}
            footer={footer_components}
            globals={globals}
        >

            <div className={'main'}>
                {Object.keys(wrappers).map((item,i)=>{
                    return(
                        <Fragment key={`wrapper-index-${v4()}`}>
                            <Wrapper
                                wrapperCss={wrappers[item].css}
                                fluid={wrappers[item].fluid}
                                rows={wrappers[item].rows}
                                wrapperIndex={i}
                                rowCss={wrappers[item].rowsCss}
                                extraClass={wrappers[item].class}
                                initialRequest={initialRequest}
                            >
                            </Wrapper>
                        </Fragment>
                    )
                })}
            </div>

        </LayoutVista>
    )

}

export async function getServerSideProps({ query }) {

    console.log('------------')
    console.log('getRemoteInitialData')

    const API = await getRemoteInitialData(query)
    console.log('received RemoteInitialData')

    return {
        props: {
            ...API,
            referrer: query.referrer || '',
            lang: query.lang || 'en',
            initialRequest: !!query.initialRequest
        }
    }
}

export default Page

