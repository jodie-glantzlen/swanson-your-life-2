const path = require('path')
const express = require('express')

const server = express()

const favQuotes = require('./routes/quotes')

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

server.use('/api/v1/favourites', favQuotes)

server.get('*', (req, res) => {
  res.sendFile(path.resolve('server/public/index.html'))
})

module.exports = server
