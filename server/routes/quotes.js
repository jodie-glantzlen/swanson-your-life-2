const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  console.log('it is working')
})

module.exports = router