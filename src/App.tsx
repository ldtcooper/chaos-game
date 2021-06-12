import React from 'react';
import './App.scss';
import { Controls, Display, Header } from './components';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="appBody">
        <Controls />
        <Display />
      </div>
    </div>
  );
}

export default App;
