import React from 'react';
import './App.css';
import Addition from './Addition';
import Sub from './Sub';
import Multi from './Multi';
import Division from './Division';

function App() {
  return (
    <div className="App">
     <Addition/>
     <Sub/>
     <Multi/>
     <Division/>
    </div>
  );
}

export default App;
