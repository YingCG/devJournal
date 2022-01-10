const path = require('path')
const express = require('express')
const routes = require('./routes/routes')

// const widgets = require('./routes/widgets')

const server = express()
server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))
// app.get('/*', function (req, res) {
//    res.sendFile(path.join(__dirname, 'build', 'index.html'));
//  });
server.use('/api/v1/todos', routes)

module.exports = server
