const Express = require("express")
const sharp = require("sharp");
const server = Express.Router()
const fetch = require('node-fetch');

server.get('', async (req, res) => {

    const widthString = req.query.width
    const format = req.query.format || 'webp'
    const src = req.query.src

    const image = await fetch(src);
    const imageBuffer = await image.buffer();
    const stream = sharp(imageBuffer)

    const transform = sharp().resize(parseInt(widthString)).toFormat(format, {
        quality: 100
    });

    res.set('Content-Type', `image/${format}`);
    stream.pipe(transform).pipe(res);

    return stream;
});


module.exports = server