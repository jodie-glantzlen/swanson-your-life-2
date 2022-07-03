const express = require('express')
const router = express.Router()
const db = require('../../db/dbFunctions')

router.get('/', (req, res) => {
  //res.status(200).send('it is working')
  db.getLikedQuotes()
  .then((quotes) => {
    //console.log('GET from routes/quotes: ', quotes)
    res.json(quotes)
  })
  .catch((err) => {
    res.status(500).send(err.message)
  })
})

module.exports = router
