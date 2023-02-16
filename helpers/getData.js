// import { getObjectFromDatabase } from '../helpers/idb'
// import fetcher from '../helpers/fetcher'


const getRemoteInitialData = async ({lang,pathName,referrer}) => {

    let ref = 'acquavista'
    // console.log(pathName)
    // console.log(PrefixPathName(pathName))

    console.log('start fetching data')
    console.log(`http://127.0.0.1:5555/public/hotels/${ref}/data/pages/${PrefixPathName(pathName)}.json`)

    let [pageData, headerData,footerData,occupancy] = await Promise.all([
        fetch(`http://127.0.0.1:5555/public/hotels/${ref}/data/pages/${PrefixPathName(pathName)}.json`),
        fetch(`http://127.0.0.1:5555/public/hotels/${ref}/data/header/header.json`),
        fetch(`http://127.0.0.1:5555/public/hotels/${ref}/data/footer/footer.json`),
        fetch(`http://127.0.0.1:5555/public/hotels/${ref}/data/occupancy.json`)
    ]).then(async([aa, bb, cc, dd]) => {
        const a = await aa.json();
        const b = await bb.json();
        const c = await cc.json();
        const d = await dd.json();
        return [a, b, c, d]
    }).catch(err=>console.log(err))

    console.log('start fetching schema')
    console.log(`http://127.0.0.1:5555/public/hotels/${ref}/data/schema/${pageData.schema}.json`)

    let schemaData = await fetch(`http://127.0.0.1:5555/public/hotels/${ref}/data/schema/${pageData.schema}.json`).then((res)=> res.json()).catch(err=>console.log(err))

    console.log('end fetching')

    return {
        header: headerData,
        footer: footerData,
        page: pageData,
        schema: schemaData,
        page_components: makeComponents(schemaData,'pages'),
        header_components: [schemaData.header],
        footer_components: [schemaData.footer],
        occupancy: occupancy
    }
}

const getIdbData = async ({lang,pathName,api,referrer}) => {

    // const idb = await import('idb')
    // const db = await idb.openDB('website', 1);
    //
    // const headerData = await getObjectFromDatabase(db,'data','header')
    // const footerData = await getObjectFromDatabase(db,'data','footer')
    // const Data = await getObjectFromDatabase(db,'data',api)
    // const schemaData = await getObjectFromDatabase(db,'data','schema')
    //
    // // console.log(api)
    // // console.log(makeComponents(schemaData,'pages',api))
    // // console.log(Data)
    // return {
    //     header: headerData,
    //     footer: footerData,
    //     page: Data,
    //     schema: schemaData,
    //     page_components: makeComponents(schemaData,'pages',api),
    //     page_wrappers: [],
    //     header_components: [schemaData.header],
    //     footer_components: [schemaData.footer]
    // }

}

function makeComponents(schemaData,pages,api){
    let components = []
    // console.log(schemaData,pages,api)
    // schemaData[pages].map(page =>
    //     page.api === api &&
    //         page.components.map(d => components.push(d)))
    schemaData.pages[0].components.map(d => components.push(d))
    return components
}

function PrefixPathName(pathName){
    if(pathName === '/'){
        pathName = 'homepage'
    }
    // console.log(pathName)
    // console.log(removeTrailingSlashes(pathName))
    return removeTrailingSlashes(pathName)
}

function removeTrailingSlashes(url) {
    return url.replace(/^\/|\/$/g, '');
}

export {getRemoteInitialData,getIdbData}