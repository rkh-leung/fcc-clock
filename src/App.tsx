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
      <button id={'break-increment'} />
      <button id={'session-increment'} />
    </div>
  );
}

export default App;
