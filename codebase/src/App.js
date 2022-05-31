import React from 'react';
import styled from 'styled-components';

/* Components */
import SevenSegmentedDisplay from './Components/Calculator/Screen/SevenSegmentedDisplay';
import Calculator from './Components/Calculator/Calculator';

/* Style */
import './App.css';

const Display = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
`;

const App = () => (
  <div className="app">
    <header>
      <h1 className="heading">React Calculator</h1>
    </header>
    <Display>
      <SevenSegmentedDisplay symbol="0" height="100px" width="50px" />
      <SevenSegmentedDisplay symbol="1" height="100px" width="50px" />
      <SevenSegmentedDisplay symbol="2" height="100px" width="50px" />
      <SevenSegmentedDisplay symbol="3" height="100px" width="50px" />
      <SevenSegmentedDisplay symbol="4" height="100px" width="50px" />
      <SevenSegmentedDisplay symbol="5" height="100px" width="50px" />
      <SevenSegmentedDisplay symbol="6" height="100px" width="50px" />
      <SevenSegmentedDisplay symbol="7" height="100px" width="50px" />
      <SevenSegmentedDisplay symbol="8" height="100px" width="50px" />
      <SevenSegmentedDisplay symbol="9" height="100px" width="50px" />
    </Display>
    <Calculator />
  </div>
);

export default App;
