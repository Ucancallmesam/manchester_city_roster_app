import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import PlayerList from './components/PlayerList'
import Roster from './components/Roster'

const App = () => {
  return (
    <div>
      <Navbar />
      <Roster />
      <PlayerList />
    </div>
  )
}

export default App
