import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

/* Components */
import Screen from './Screen/Screen';

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const allowedDigits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
const allowedOperators = ['+', '-', '*', '/'];
const equalsSymbol = '=';

/**
 * The bulk of the application logic is housed in this component. Will handle display of screen, buttons, and calculator outputs.
 * Also takes care of keyboard events.
 */
const Calculator = () => {
  const [digits, setDigits] = useState([]);

  const handleOperator = (operator) => {
    console.log(operator);
  };

  const handleEquals = () => {
    console.log('equals');
  };

  /**
   * Handle keyboard events for the calculator, digits will draw to screen, operators will apply operations, etc.
   * @param {object} event Keydown event.
   */
  const handleKeyboard = (event) => {
    if (allowedDigits.includes(event.key)) setDigits([...digits, event.key]);
    if (allowedOperators.includes(event.key)) handleOperator(event.key);
    if (event.key === equalsSymbol) handleEquals();
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyboard);
    return () => document.removeEventListener('keydown', handleKeyboard); // clean up event listeners
  });

  return (
    <Container>
      <Screen digits={digits} />
    </Container>
  );
};

export default Calculator;
