async function openDatabase(IDB,dnName,objectStore,keyPath,keyIndex) {
    const db = await IDB.openDB(dnName, 1, {
        upgrade(db) {
            const store = db.createObjectStore(objectStore, {
                keyPath: keyPath,
                autoIncrement: true,
            });
            store.createIndex(keyIndex, keyIndex);
        },
    });
    return db
}

async function addObjectToDatabase(db,objectStore,object) {
    await db.add(objectStore, object);
}

async function getObjectFromDatabase(db,objectStore,objectKey) {
    const value = await db.get(objectStore, objectKey);
    return value
}

async function getAllObjectsFromDatabase(db,objectStore,objectKey) {
    const value = await db.getAllFromIndex(objectStore, objectKey);
    return value
}

async function deleteDatabase(IDB,dnName) {
    const value = await IDB.deleteDB(dnName, {
        blocked() {},
    });
}

export { openDatabase, addObjectToDatabase, getObjectFromDatabase, getAllObjectsFromDatabase, deleteDatabase }