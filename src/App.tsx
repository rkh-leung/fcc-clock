import React, { useEffect, useState } from 'react'
import './App.css'

function App() {
  // Type StatusType = 'stop' | 'running' | 'pause'
  let initBreak: number = 5
  let initSession: number = 25
  let initStatus: boolean = false
  // let initType: StatusType = 'stop'

  const [breakLength, setBreakLength] = useState(initBreak)
  const [sessionLength, setSessionLength] = useState(initSession)
  const [timer, setTimer] = useState(sessionLength * 60)
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
    setTimer(() => sessionLength * 60)
    setStatus(() => initStatus)
  }
  const statusToggle = () => setStatus((prevState) => !prevState)

  useEffect(() => {
    let timerId: number
    // setTimer(() => sessionLength * 60)
    if (status) {
      timerId = window.setInterval(
        () => setTimer((prevState) => prevState - 1),
        1000
      )
    }
    return () => {
      window.clearInterval(timerId)
    }
  }, [status])
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
        {timer % 60 < 10 ? `0${timer % 60}` : timer % 60}
        {console.log('timer', timer)}
        {console.log('sessionLength', sessionLength)}
        {console.log('status', status)}
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
