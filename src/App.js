import React from 'react'
import './App.css'

import StartPage from './components/Start'
import FightPage from './components/Fight'

function App() {
  const [player, setPlayer] = React.useState(0)
  const [view, setView] = React.useState(false)
  // const [view, setView] = React.useState(true)

  function display(mark) {
    setPlayer(mark)
    setView(true)
    setTimeout(() => setView(false), 10000)
  }

  return (
    <div className='wrapper'>
      {view ? <FightPage player={player} /> : <StartPage display={display} />}
    </div>
  )
}

export default App;
