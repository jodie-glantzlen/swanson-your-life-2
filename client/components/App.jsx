import Home from "./Home";
import FavQuotes from "./FavQuotes";
import { Routes, Route } from 'react-router-dom'
import Nav from "./Nav";
import React from 'react'

function App() {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favourites" element={<FavQuotes />} />
      </Routes>
    </div>
  )
}

export default App
