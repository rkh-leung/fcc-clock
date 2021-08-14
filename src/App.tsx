import React, { useState } from 'react'
import './App.css'
import { setInterval } from 'timers'

function App() {
  let initBreak: number = 5
  let initSession: number = 25
  let initTimer: number = initSession * 60
  let initStatus: boolean = false

  const [breakLength, setBreakLength] = useState(initBreak)
  const [sessionLength, setSessionLength] = useState(initSession)
  const [timer, setTimer] = useState(initTimer)
  const [status, setStatus] = useState(initStatus)

  const increment = (prevState: number, e: React.BaseSyntheticEvent) =>
    prevState < 60 ? prevState + Number(e.target.value) : 60
  const decrement = (prevState: number, e: React.BaseSyntheticEvent) =>
    prevState <= 2 ? 1 : prevState + Number(e.target.value)
  const sessionInc = (e: React.BaseSyntheticEvent) =>
    setSessionLength((prevState) => increment(prevState, e))
  const sessionDec = (e: React.BaseSyntheticEvent) =>
    setSessionLength((prevState) => decrement(prevState, e))
  const breakInc = (e: React.BaseSyntheticEvent) =>
    setBreakLength((prevState) => increment(prevState, e))
  const breakDec = (e: React.BaseSyntheticEvent) =>
    setBreakLength((prevState) => decrement(prevState, e))
  const resetHandler = () => {
    setBreakLength(() => initBreak)
    setSessionLength(() => initSession)
    setStatus(() => initStatus)
  }
  const timerToggle = (status: boolean) => {
    let timerId = setInterval(
      () => setSessionLength((prevState) => prevState - 1 / 60),
      1000
    )
    if (status === false) {
      clearInterval(timerId)
    }
  }
  const statusToggle = () => {
    setStatus((prevState) => !prevState)
    timerToggle(status)
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
      <div id={'time-left'}> {/* mm/ss */}
        {sessionLength < 10 ? `0${sessionLength}` : sessionLength}:
        {timer % 60 < 10 ? `0${timer % 60}` : timer % 60}
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
