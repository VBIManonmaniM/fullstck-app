const express = require('express');
const fetch = require('node-fetch');
var cors = require('cors')
const server = express();

server.use(cors())



server.get('/todos', async (req, res) => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos', {
            method: 'GET',
        })
        if (response.ok) {
            res.status(response.status).send(await response.json())
        } else {
            res.sendStatus(response.status)
        }
    } catch (err) {
        res.status(500).send({
            message: err.message
        })
    }

})

server.listen(8001, () => {
    console.log('listening on http://localhost:8001')
})