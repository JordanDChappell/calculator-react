import React from 'react';

/* Components */
import Segments from './Components/Calculator/Screen/Segments';
import Calculator from './Components/Calculator/Calculator';

/* Style */
import './App.css';

const App = () => (
  <div className="app">
    <header>
      <h1 className="heading">React Calculator</h1>
    </header>
    <div className="top-row">
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
    <Calculator digits={[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]} />
  </div>
);

export default App;
