require("dotenv").config();
const express = require("express");
const next = require("next");
const { join } = require('path')
const compression = require("compression");
const bodyParser = require("body-parser");
const middlewares = require("./middlewares");
const port = process.env.PORT;
const app = next({ dev: process.env.NODE_ENV === "development" });
const handle = app.getRequestHandler();
const getData = require('./api/getData')
const mail = require('./routes/mail')
const healthcheck = require('./routes/healthcheck')
const images = require('./routes/images')

app.prepare().then((req, res) => {

    const server = express();
    
    server.use(compression());

    server.use(bodyParser.json({limit: "50mb"}));
    server.use(bodyParser.urlencoded({limit: "50mb", extended: true}));

    server.use(middlewares.cors);

    server.use("/public", express.static(__dirname + "/public", {
          maxAge: "1d"
    }));

    server.use(middlewares.requestObject);

    server.get('/serviceworker.js', (req, res) => {
        const filePath = join(__dirname, '.next', '/serviceworker.js')
        return res.sendFile(filePath);
    });

    server.use('',mail)

    server.use('',healthcheck)

    server.use('/images',images)

    server.get('/refresh-data', (req, res) => {
        getData(['en'])
        return   res.json({ user: 'done' });
    });

    server.all('*', (req, res) => {
        if(req.nextObj.pathLength){
            return app.render(req, res, '/Page', {
                lang: req.nextObj.lang,
                pathName: req.nextObj.pathName.includes('?') ? req.nextObj.pathName.split('?')[0] : req.nextObj.pathName,
                referrer: req.nextObj.referrer,
                initialRequest: true
            })
        }
        return handle(req, res)
    })

    server.listen(port, (err) => {
        console.log(`> Ready on 1 http://localhost:${port}`);
    });

});

// const ssrCache = cacheableResponse({
//     ttl: 1000 * 60 * 60,
//     get: async ({ req, res }) => {
//         const rawResEnd = res.end
//         const data = await new Promise((resolve) => {
//             res.end = (payload) => {
//                 resolve(res.statusCode === 200 && payload)
//             }
//             app.render(req, res, '/Page', {
//                 lang: req.nextObj.lang,
//                 pathName: req.nextObj.pathName,
//                 referrer: req.nextObj.referrer
//             })
//         })
//         res.end = rawResEnd
//         return { data }
//     },
//     send: ({ data, res }) => res.send(data),
// })

