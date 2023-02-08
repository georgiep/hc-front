importScripts('/public/workers/idb.min.js');

self.onmessage = async ($event) => {
    if ($event && $event.data && $event.data.msg[0] === 'getData') {
        const sum = await precacheData();
        self.postMessage(sum);
    }
};

async function precacheData() {

    let [homeData, headerData,footerData,roomsData,roomsData1,roomsData2,roomsData3,roomsData4,facilities,reviews,schemaData] = await Promise.all([
        fetch('../../public/data/pages/home.json'),
        fetch('../../public/data/pages/header.json'),
        fetch('../../public/data/pages/footer.json'),
        fetch('../../public/data/pages/accommodation.json'),
        fetch('../../public/data/pages/accommodation1.json'),
        fetch('../../public/data/pages/accommodation2.json'),
        fetch('../../public/data/pages/accommodation3.json'),
        fetch('../../public/data/pages/accommodation4.json'),
        fetch('../../public/data/pages/facilities.json'),
        fetch('../../public/data/pages/reviews.json'),
        fetch('../../public/data/pages/schema.json')
    ]).then(async([aa, bb, cc, dd, ee, ff ,gg, hh, h1,h2,h3]) => {
        const a = await aa.json();
        const b = await bb.json();
        const c = await cc.json();
        const d = await dd.json();
        const e = await ee.json();
        const f = await ff.json();
        const g = await gg.json();
        const h = await hh.json();
        const hh1 = await h1.json();
        const hh2 = await h2.json();
        const hh3 = await h3.json();
        return [a, b, c, d, e, f, g, h, hh1 ,hh2 ,hh3]
    })

    let DATA = [];
    DATA.push(headerData,footerData,homeData,roomsData,roomsData1,roomsData2,roomsData3,roomsData4,facilities,reviews,schemaData)

    const db = await idb.openDB('website', 1, {
        upgrade(db) {
            const store = db.createObjectStore('data', {
                keyPath: 'idbName',
                autoIncrement: true,
            });
            store.createIndex('idbName', 'idbName');
        },
    });

    const saveDataToIDB = async _ => {
        const data = await DATA.map(async function (item){
            const getPage = await getObjectFromDatabase(db,'data',item.idbName)
            if(!getPage) await db.add('data',item);
            return item
        })
    }

    saveDataToIDB()

    return true
}

async function getObjectFromDatabase(db,objectStore,objectKey) {
    const value = await db.get(objectStore, objectKey);
    return value
}