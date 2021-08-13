import React, { useState } from 'react'
import './App.css'

function App() {
  let breakState: number = 5
  let sessionState: number = 1500

  const [breakLength, setBreakLength] = useState(breakState)
  const [second, setSecond] = useState(sessionState)

  let minute: number = Math.floor(second / 60)

  const sessionHandler = (counter: number) => {
    setSecond((prevState) => prevState + counter)
  }

  return (
    <div className='App'>
      <header className='App-header'>FCC 25+5 Clock</header>
      <div id={'break-label'}>Break Length</div>
      <button id={'break-decrement'}>
        <i className={'fa fa-arrow-down'} />
      </button>
      <button id={'break-increment'}>
        <i className={'fa fa-arrow-up'} />
      </button>
      <div id={'break-length'}>{breakLength}</div>
      <div id={'session-label'}>Session Length</div>
      <i
        className={'fa fa-arrow-down'}
        id={'session-decrement'}
        onClick={() => sessionHandler(-60)}
      />
      <span id={'session-length'}>{minute}</span>
      <i
        className={'fa fa-arrow-up'}
        id={'session-increment'}
        onClick={() => sessionHandler(60)}
      />
      <div id={'timer-label'}>Session</div>
      <div id={'time-left'}>
        {minute < 10 ? `0${minute}` : minute}:
        {second % 60 < 10 ? `0${second % 60}` : second % 60}
      </div>
      <div id={'control'}>
        <i className={'fas fa-pause'} id={'start_stop'} />
      </div>
    </div>
  )
}

export default App
