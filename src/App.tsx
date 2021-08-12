import React, { useState } from 'react'
import './App.css';

function App() {
  let breakState: number = 5
  const [breakLength, setBreakLength] = useState(breakState)
  let sessionState: number = 25
  const [sessionLength, setSessionLength] = useState(sessionState)
  return (
    <div className="App">
      <header className="App-header">
        FCC 25+5 Clock
      </header>
      <div id={'break-label'}>Break Length</div>
      <div id={'session-label'}>Session Length</div>
      <button id={'break-decrement'} />
      <button id={'session-decrement'} />
      <button id={'break-increment'} />
      <button id={'session-increment'} />
      <div id={'break-length'}>{breakLength}</div>
      <div id={'session-length'}>{sessionLength}</div>
      <div id={'timer-label'}>Session</div>
    </div>
  );
}

export default App;
