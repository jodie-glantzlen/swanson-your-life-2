const environment = process.env.NODE_ENV || 'development'
const config = require('../knexfile')[environment]
const connection = require('knex')(config)

function getLikedQuotes(db = connection) {
  return db('liked_quotes').select()
}

function addQuote(likedQuote, db = connection) {  
  return db('liked_quotes').insert(likedQuote)
}

module.exports = {
  getLikedQuotes,
  addQuote,
}
