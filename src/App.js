import React from 'react'
import './App.css'
import Display from './components/Display'
import Display2 from './components/Display_2'

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
      {view ? <Display2 player={player} /> : <Display display={display} />}
    </div>
  )
}

export default App;
