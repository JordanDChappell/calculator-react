import React from 'react';
import styled from 'styled-components';

/* Components */
import SixteenSegmentDisplay from './Components/Calculator/Screen/SixteenSegmentDisplay';
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
      <SixteenSegmentDisplay symbol="0" height="100px" width="60px" />
      <SixteenSegmentDisplay symbol="1" height="100px" width="60px" />
      <SixteenSegmentDisplay symbol="2" height="100px" width="60px" />
      <SixteenSegmentDisplay symbol="3" height="100px" width="60px" />
      <SixteenSegmentDisplay symbol="4" height="100px" width="60px" />
      <SixteenSegmentDisplay symbol="5" height="100px" width="60px" />
      <SixteenSegmentDisplay symbol="6" height="100px" width="60px" />
      <SixteenSegmentDisplay symbol="7" height="100px" width="60px" />
      <SixteenSegmentDisplay symbol="8" height="100px" width="60px" />
      <SixteenSegmentDisplay symbol="9" height="100px" width="60px" />
      <SixteenSegmentDisplay symbol="*" height="100px" width="60px" />
      <SixteenSegmentDisplay symbol="/" height="100px" width="60px" />
      <SixteenSegmentDisplay symbol="+" height="100px" width="60px" />
      <SixteenSegmentDisplay symbol="-" height="100px" width="60px" />
    </Display>
    <Calculator />
  </div>
);

export default App;
