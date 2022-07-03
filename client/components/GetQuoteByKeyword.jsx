import React, { useState } from "react"
import { getQuoteByKeyword } from "../api/getQuotes"
import Quote from "./Quote"

function GetQuoteByKeyword() {
  const [keyword, setKeyword] = useState()

  const [keywordQuote, setKeywordQuote] = useState()

  const handleChange = (e) => {
    setKeyword(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    getQuoteByKeyword(keyword)
      .then(res => setKeywordQuote(res))
      .catch(err => console.log(err.message))
  }

  return (
    <div>
      <form action="">
        <label htmlFor="">Another quote?
          <input type="text"
            placeholder="Enter a keyword, eg. 'steak'"
            onChange={handleChange} />
        </label>
      </form>
      <button onClick={handleSubmit}>Ron once said...</button>
      {keywordQuote && <Quote quote={keywordQuote}/>}
    </div>
  )
}

export default GetQuoteByKeyword