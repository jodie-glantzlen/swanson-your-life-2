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

router.post('/test', (req, res) => {
  const likedQuote = req.body
  const quoteObj = {
    "quote": likedQuote
  }
  // ^ I need to do this otherwise it breaks my app
  //console.log("POST from routes/quotes: ", quoteObj)
  db.addQuote(quoteObj)
  .then((quoteId) => {
    res.json(quoteId)
  })
  .catch((err) => {
    res.status(500).send(err.message)
  })
})

module.exports = router