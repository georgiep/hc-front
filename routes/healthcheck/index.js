const Express = require("express")
const server = Express.Router()

server.get('', (req, res) => {

    return res.json({check: "ok"})
});

server.post('', (req, res) => {

    return res.json({check: "ok"})
});

module.exports = server