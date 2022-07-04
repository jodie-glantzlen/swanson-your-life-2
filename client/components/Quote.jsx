import React from "react"
import { addQuote } from "../api/quotesApi"

function Quote({ quote }) {

  const handleClick = () => {
    addQuote(quote)
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