import React from 'react';
import styled from 'styled-components';

/* Components */
import ElevenSegmentDisplay from './Components/Calculator/Screen/ElevenSegmentDisplay';
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
      <ElevenSegmentDisplay symbol="0" height="100px" width="50px" />
      <ElevenSegmentDisplay symbol="1" height="100px" width="50px" />
      <ElevenSegmentDisplay symbol="2" height="100px" width="50px" />
      <ElevenSegmentDisplay symbol="3" height="100px" width="50px" />
      <ElevenSegmentDisplay symbol="4" height="100px" width="50px" />
      <ElevenSegmentDisplay symbol="5" height="100px" width="50px" />
      <ElevenSegmentDisplay symbol="6" height="100px" width="50px" />
      <ElevenSegmentDisplay symbol="7" height="100px" width="50px" />
      <ElevenSegmentDisplay symbol="8" height="100px" width="50px" />
      <ElevenSegmentDisplay symbol="9" height="100px" width="50px" />
      <ElevenSegmentDisplay symbol="*" height="100px" width="50px" />
    </Display>
    <Calculator />
  </div>
);

export default App;
