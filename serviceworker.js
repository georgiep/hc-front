self.addEventListener('install', function (event) {
    self.skipWaiting();
});

self.addEventListener('activate', function(event) {
    return self.clients.claim();
});

addEventListener('message', event => {
    caches.keys().then(function(names) {
        for (let name of names)
            caches.delete(name);
    });
    event.source.postMessage("Delete Cache");
});

self.addEventListener('fetch', function(event) {
    if (event.request.cache === 'only-if-cached' && event.request.mode !== 'same-origin') {
        return;
    }
    if(!(event.request.url.indexOf('http') === 0)){
       console.log(event.request.url)
       return
    }
    event.respondWith(
        caches.open('website').then(function(cache) {
            return cache.match(event.request).then(function (response) {
                return response || fetch(event.request).then(function(response) {
                    cache.put(event.request, response.clone());
                    return response;
                });
            });
        })
    );
});