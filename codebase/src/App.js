import React from 'react';

import './App.css';
import Segments from './Components/Calculator/Screen/Segments';

const App = () => (
  <div className="app">
    <header>
      <h1 className="heading">React Calculator</h1>
    </header>
    <div className="center">
      <Segments symbol="0" height="100px" width="50px" />
      <Segments symbol="1" height="100px" width="50px" />
      <Segments symbol="2" height="100px" width="50px" />
      <Segments symbol="3" height="100px" width="50px" />
      <Segments symbol="4" height="100px" width="50px" />
      <Segments symbol="5" height="100px" width="50px" />
      <Segments symbol="6" height="100px" width="50px" />
      <Segments symbol="7" height="100px" width="50px" />
      <Segments symbol="8" height="100px" width="50px" />
      <Segments symbol="9" height="100px" width="50px" />
    </div>
  </div>
);

export default App;
