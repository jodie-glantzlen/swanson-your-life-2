import { Link } from 'react-router-dom'
import React from 'react'

function Nav() {
  return (
    <div>
      <ul>
        <li>
          <Link to={'/'}>Home</Link>
        </li>
        <li>
          <Link to={'/favourites'}>Favourite Quotes</Link>
        </li>
      </ul>
    </div>

  )
}

export default Nav
