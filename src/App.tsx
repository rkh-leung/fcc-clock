import React, { useState } from 'react'
import './App.css'

function App() {
  let breakState: number = 5
  let sessionState: number = 25
  let sessionStatus: boolean = false

  const [breakLength, setBreakLength] = useState(breakState)
  const [sessionLength, setSessionLength] = useState(sessionState)
  const [status, setStatus] = useState(sessionStatus)

  let seconds: number = Math.floor(sessionLength * 60)

  const sessionInc = (e: React.BaseSyntheticEvent) =>
    setSessionLength((prevState) =>
      prevState < 60 ? prevState + Number(e.target.value) : 60
    )
  const sessionDec = (e: React.BaseSyntheticEvent) =>
    setSessionLength((prevState) =>
      prevState <= 2 ? 1 : prevState + Number(e.target.value)
    )
  const breakInc = (e: React.BaseSyntheticEvent) =>
    setBreakLength((prevState) =>
      prevState < 60 ? prevState + Number(e.target.value) : 60
    )
  const breakDec = (e: React.BaseSyntheticEvent) =>
    setBreakLength((prevState) =>
      prevState <= 2 ? 1 : prevState + Number(e.target.value)
    )
  const statusToggle = () => setStatus((prevState) => !prevState)
  const resetHandler = () => {
    setBreakLength((prevState) => (prevState = breakState))
    setSessionLength((prevState) => (prevState = sessionState))
    setStatus((prevState) => (prevState = sessionStatus))
  }

  return (
    <div className='App'>
      <header className='App-header'>FCC 25+5 Clock</header>
      <div id={'break-label'}>Break Length</div>
      <button
        className={'fa fa-arrow-down'}
        id={'break-decrement'}
        onClick={breakDec}
        value={-1}
      />
      <span id={'break-length'}>{breakLength}</span>
      <button
        className={'fa fa-arrow-up'}
        id={'break-increment'}
        onClick={breakInc}
        value={1}
      />
      <div id={'session-label'}>Session Length</div>
      <button
        className={'fa fa-arrow-down'}
        id={'session-decrement'}
        onClick={sessionDec}
        value={-1}
      />
      <span id={'session-length'}>{sessionLength}</span>
      <button
        className={'fa fa-arrow-up'}
        id={'session-increment'}
        onClick={sessionInc}
        value={1}
      />
      <div id={'timer-label'}>Session</div>
      <div id={'time-left'}>
        {sessionLength < 10 ? `0${sessionLength}` : sessionLength}:
        {seconds % 60 < 10 ? `0${seconds % 60}` : seconds % 60}
      </div>
      <div id={'control'}>
        {status ? (
          <button className='fas fa-pause' onClick={statusToggle} />
        ) : (
          <button
            className={'fas fa-play'}
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
