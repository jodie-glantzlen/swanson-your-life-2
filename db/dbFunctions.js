const environment = process.env.NODE_ENV || 'development'
const config = require('../knexfile')[environment]
const connection = require('knex')(config)

function getLikedQuotes(db = connection) {
  return db('favourite_quotes').select()
}

module.exports = {
  getLikedQuotes
}