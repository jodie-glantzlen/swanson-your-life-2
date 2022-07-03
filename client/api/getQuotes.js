import request from "superagent"

// EXTERNAL
export function getOneQuote() {
  return request.get('https://ron-swanson-quotes.herokuapp.com/v2/quotes')
  .then(res => res.body)
}

export function getQuotesByNumber(num) {
  return request.get(`https://ron-swanson-quotes.herokuapp.com/v2/quotes/${num}`)
  .then(res => res.body)
}

export function getQuoteByKeyword(keyword) {
  return request.get(`https://ron-swanson-quotes.herokuapp.com/v2/quotes/search/${keyword}`)
  .then(res => res.body)
}

// INTERNAL

export function getLikedQuotes() {
  return request.get('/api/v1/favourites')
  .then(res => res.body)
}