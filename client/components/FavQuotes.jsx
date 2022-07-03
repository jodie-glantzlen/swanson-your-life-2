import React, { useState, useEffect } from "react"
import { getLikedQuotes } from "../api/quotesApi"

function FavQuotes () {

  const [favQuotes, setFavQuotes] = useState([])

  useEffect(() => {
    refreshFavQuotes()
  }, [])

  const refreshFavQuotes = () => {
    getLikedQuotes()
    .then((res) => {
      setFavQuotes(res)
    })
    .catch(err => console.log(err))
  }

  return (
    <div>
      <h1>This is where your favourite quotes will be displayed!</h1>
      <ul>
        {favQuotes?.map(quote => <li key={quote.id}>{quote.liked_quotes}</li>)}
      </ul>
    </div>
  )
}

export default FavQuotes