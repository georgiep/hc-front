require("dotenv").config();
const cors = require("cors");
const allowedOrigins = ["http://localhost:5555"];

module.exports = {
    cors: cors(),
    requestObject: function (req, res, next) {

        req.nextObj = {
            pathLength: 0,
            pathName: '',
            lang: '',
            referrer: req.headers.host
        }

        if(req.originalUrl.includes("serviceworker.js")) return next()

        if(req.originalUrl.includes("_next")) return next()

        if(req.originalUrl.includes("public")) return next()

        if(req.originalUrl.includes("favicon.ico")) return next()

        if(req.originalUrl !== '/') req.nextObj.pathLength = req.originalUrl.replace(/[^\/]/g, "").length

        if(req.nextObj.pathLength >= 1 && ['en', 'el', 'de'].indexOf(req.originalUrl.split('/')[1]) >= 0){

            let originalUrlParts = req.originalUrl.split('/')

            originalUrlParts.map((part,i)=>{
                if(i === 1){
                    req.nextObj.lang = part
                }
                if( i >= 1){
                    req.nextObj.pathName += '/' + part
                }
            })

            return next()
        }

        if(req.nextObj.pathLength >= 1 && !['en', 'el', 'de'].indexOf(req.originalUrl.split('/')[1]) >= 0){

            let originalUrlParts = req.originalUrl.split('/')
            req.nextObj.lang = 'en'

            originalUrlParts.map((part,i)=>{
                if(i > 0){
                    req.nextObj.pathName += '/' + part
                }
            })

            return next()
        }

        req.nextObj = {
            pathLength: 1,
            pathName: '/',
            lang: 'en',
            referrer: req.headers.host
        }

        next()

    }
}

