const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  res.status(200).send('it is working')
})

module.exports = router
