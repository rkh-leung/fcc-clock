import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        FCC 25+5 Clock
      </header>
      <div id={'break-label'}>Break Length</div>
      <div id={'session-label'}>Session Length</div>
      <button id={'break-decrement'} />
      <button id={'session-decrement'} />
    </div>
  );
}

export default App;
