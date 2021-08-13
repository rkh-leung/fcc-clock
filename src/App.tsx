import React, { useState } from 'react'
import './App.css'

function App() {
  let breakState: number = 5
  let sessionState: number = 1500
  let sessionStatus: boolean = false

  const [breakLength, setBreakLength] = useState(breakState)
  const [second, setSecond] = useState(sessionState)
  const [status, setStatus] = useState(sessionStatus)

  let minute: number = Math.floor(second / 60)

  const sessionHandler = (counter: number) => {
    setSecond((prevState) => prevState + counter)
  }

  const breakHandler = (counter: number) => {
    setBreakLength((prevState) => prevState + counter)
  }

  const statusToggle = () => setStatus((prevState) => !prevState)

  const resetHandler = () => {
    setBreakLength((prevState) => (prevState = breakState))
    setSecond((prevState) => (prevState = sessionState))
    setStatus((prevState) => (prevState = sessionStatus))
  }

  return (
    <div className='App'>
      <header className='App-header'>FCC 25+5 Clock</header>
      <div id={'break-label'}>Break Length</div>
      <i
        className={'fa fa-arrow-down'}
        id={'break-decrement'}
        onClick={() => breakHandler(-1)}
      />
      <span id={'break-length'}>{breakLength}</span>
      <i
        className={'fa fa-arrow-up'}
        id={'break-increment'}
        onClick={() => breakHandler(1)}
      />
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
        {status ? (
          <i className='fas fa-play' onClick={statusToggle} />
        ) : (
          <i
            className={'fas fa-pause'}
            id={'start_stop'}
            onClick={statusToggle}
          />
        )}
        <i className={'fas fa-redo'} id={'reset'} onClick={resetHandler} />
      </div>
    </div>
  )
}

export default App
