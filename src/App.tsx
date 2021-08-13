import React, { useState } from 'react'
import './App.css'

function App() {
  let breakState: number = 5
  let sessionState: number = 25
  let initSession: number = 1500
  let sessionStatus: boolean = false

  const [breakLength, setBreakLength] = useState(breakState)
  const [sessionLength, setSessionLength] = useState(sessionState)
  const [second, setSecond] = useState(initSession)
  const [status, setStatus] = useState(sessionStatus)

  let minute: number = Math.floor(second / 60)

  const sessionHandler = (e: React.BaseSyntheticEvent) =>
    setSessionLength((prevState) =>
      prevState <= 2
        ? 1
        : prevState > 2 && prevState < 60
        ? prevState + Number(e.target.value)
        : 60
    )

  const breakHandler = (e: React.BaseSyntheticEvent) =>
    setBreakLength((prevState) =>
      prevState <= 2
        ? 1
        : prevState > 2 && prevState < 60
        ? prevState + Number(e.target.value)
        : 60
    )

  const statusToggle = () => setStatus((prevState) => !prevState)

  const resetHandler = () => {
    setBreakLength((prevState) => (prevState = breakState))
    setSessionLength((prevState) => (prevState = sessionState))
    setSecond((prevState) => (prevState = initSession))
    setStatus((prevState) => (prevState = sessionStatus))
  }

  return (
    <div className='App'>
      <header className='App-header'>FCC 25+5 Clock</header>
      <div id={'break-label'}>Break Length</div>
      <button
        className={'fa fa-arrow-down'}
        id={'break-decrement'}
        onClick={breakHandler}
        value={-1}
      />
      <span id={'break-length'}>{breakLength}</span>
      <button
        className={'fa fa-arrow-up'}
        id={'break-increment'}
        onClick={breakHandler}
        value={1}
      />
      <div id={'session-label'}>Session Length</div>
      <button
        className={'fa fa-arrow-down'}
        id={'session-decrement'}
        onClick={sessionHandler}
        value={-1}
      />
      <span id={'session-length'}>{sessionLength}</span>
      <button
        className={'fa fa-arrow-up'}
        id={'session-increment'}
        onClick={sessionHandler}
        value={1}
      />
      <div id={'timer-label'}>Session</div>
      <div id={'time-left'}>
        {minute < 10 ? `0${minute}` : minute}:
        {second % 60 < 10 ? `0${second % 60}` : second % 60}
      </div>
      <div id={'control'}>
        {status ? (
          <button className='fas fa-play' onClick={statusToggle} />
        ) : (
          <button
            className={'fas fa-pause'}
            id={'start_stop'}
            onClick={statusToggle}
          />
        )}
        <button className={'fas fa-redo'} id={'reset'} onClick={resetHandler} />
      </div>
    </div>
  )
}

export default App
