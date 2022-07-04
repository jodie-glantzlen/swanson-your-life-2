import React from "react"
import { addQuote } from "../api/quotesApi"

function Quote({quote}) {

  const handleClick = () => {
    const formattedQuoteToSend = {
      "quote": quote[0]
    }

    // This is a temporary solution to make it work
    // If I don't do this: 
    // the req.body in my router.post returns an empty object
    // which breaks everything
    // Why???

    addQuote(formattedQuoteToSend)
    .then((res) => console.log(res))
    .catch(err => console.log(err.message))
  }

  return (
    <div>
      <p>{quote}</p>
      <button type="button" className="btn btn-light" onClick={handleClick}><span className="bi bi-heart"></span></button>
    </div>
  )
}

export default Quote