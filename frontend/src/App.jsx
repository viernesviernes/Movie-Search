import { useState } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Menu from './Pages/Menu'
import Search from './Pages/Search'
import './App.css'

console.log(import.meta.env.REACT_APP_KEY);
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={ <Menu /> } />
        <Route path="/search" element={ <Search /> } />
      </Routes>
    </>
  )
}

export default App