import GetQuote from "./GetQuote";
import GetQuoteByKeyword from "./GetQuoteByKeyword";
import GetQuotesByNumber from "./GetQuotesByNumber";
import React from "react";

function Home () {
  return (
    <div>
      <h1>Swanson Your Life</h1>
      <GetQuote />
      <GetQuotesByNumber />
      <GetQuoteByKeyword />
    </div>
  )
}

export default Home
