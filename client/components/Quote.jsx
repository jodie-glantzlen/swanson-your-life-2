import React from "react"

function Quote({quote}) {
  return (
    <div>
      <p>{quote}</p>
      <button type="button" className="btn btn-light"><span className="bi bi-heart"></span></button>
    </div>
  )
}

export default Quote