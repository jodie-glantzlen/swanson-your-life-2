import React, { useState } from 'react'
import { getOneQuote } from '../api/getQuotes'
import Quote from './Quote'

function GetQuote() {

  const [quote, setQuote] = useState()

  const handleClick = () => {
    getOneQuote()
      .then(res => setQuote(res))
      .catch(err => console.log(err.message))
  }

  return (
    <div>
      <button onClick={handleClick}> Ron once said...</button>
      {quote && <Quote quote={quote} />}
    </div>
  )
}

export default GetQuote