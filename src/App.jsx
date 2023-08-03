import { useState } from 'react'
import './App.css'
import AllPlayers from './components/AllPlayers'
import Navbar from './components/NavBar'
import NewPlayerForm from './components/NewPlayerForm'
import SinglePlayer from './components/SinglePlayer'

function App() {
  

  return (
    <>
      <div>
        <AllPlayers />
        <NewPlayerForm />
        <SinglePlayer />
        <Navbar />
      </div>
      
    </>
  )
}

export default App
