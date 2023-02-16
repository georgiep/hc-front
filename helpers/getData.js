const fs = require('fs')

const getRemoteInitialData = async ({lang,pathName,referrer}) => {

    let ref = 'acquavista'
    // console.log(pathName)
    // console.log(PrefixPathName(pathName))

    console.log('start fetching data')
    console.log(`/public/hotels/${ref}/data/pages/${PrefixPathName(pathName)}.json`)

    const pageData = JSON.parse( fs.readFileSync(`./public/hotels/${ref}/data/pages/${PrefixPathName(pathName)}.json`, 'utf8'));
    const headerData = JSON.parse( fs.readFileSync(`./public/hotels/${ref}/data/header/header.json`, 'utf8'));
    const footerData = JSON.parse( fs.readFileSync(`./public/hotels/${ref}/data/footer/footer.json`, 'utf8'));
    const occupancy = JSON.parse( fs.readFileSync(`./public/hotels/${ref}/data/occupancy.json`, 'utf8'));

    // let [pageData, headerData,footerData,occupancy] = await Promise.all([
    //     fetch(`/public/hotels/${ref}/data/pages/${PrefixPathName(pathName)}.json`),
    //     fetch(`/public/hotels/${ref}/data/header/header.json`),
    //     fetch(`/public/hotels/${ref}/data/footer/footer.json`),
    //     fetch(`/public/hotels/${ref}/data/occupancy.json`)
    // ]).then(async([aa, bb, cc, dd]) => {
    //     const a = await aa.json();
    //     const b = await bb.json();
    //     const c = await cc.json();
    //     const d = await dd.json();
    //     return [a, b, c, d]
    // }).catch(err=>console.log(err))

    console.log('start fetching schema')
    // let schemaData = await fetch(`/public/hotels/${ref}/data/schema/${pageData.schema}.json`).then((res)=> res.json()).catch(err=>console.log(err))
    let schemaData = JSON.parse( fs.readFileSync(`./public/hotels/${ref}/data/schema/${pageData.schema}.json`, 'utf8'));
    console.log('end fetching schema')

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