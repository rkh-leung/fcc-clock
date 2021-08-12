import React, { useState } from 'react'
import './App.css';

function App() {
  const initialState: number = 5
  const [breakLength, setBreakLength] = useState(initialState)
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
    </div>
  );
}

export default App;
