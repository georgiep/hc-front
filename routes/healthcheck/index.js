const Express = require("express")
const server = Express.Router()

server.get('/health-check', (req, res) => {

    return res.json({check: "ok"})
});

server.post('/health-check', (req, res) => {

    return res.json({check: "ok"})
});

module.exports = server