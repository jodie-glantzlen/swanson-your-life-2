import React, { useState } from "react"
import { getQuotesByNumber } from "../api/getQuotes"
import Quote from "./Quote"

function GetQuotesByNumber () {

  const [number, setNumber] = useState()

  const [quotes, setQuotes] = useState()

  const handleChange = (e) => {
    setNumber(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    getQuotesByNumber(number)
    .then(res => setQuotes(res))
    .then(setNumber(number))
    .catch(err => console.log(err.message))
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="number">More quotes?
        <input type="text" placeholder="Enter a number..." onChange={handleChange}/>
        </label>
      </form>
      <button onClick={handleSubmit}>Ron once said...</button>
      {quotes?.map((quote) => {
        return (
          <Quote quote={quote}/>
        )
      })}
    </div>
  )
}

export default GetQuotesByNumber