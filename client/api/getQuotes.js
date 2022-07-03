import request from "superagent"


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