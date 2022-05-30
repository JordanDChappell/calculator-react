import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

/* Library */
import {
  allowedDigits,
  allowedOperators,
  equalsSymbol,
  backspace,
} from '../../Utils/calculatorUtils';

/* Components */
import Screen from './Screen/Screen';

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const ScreenContainer = styled.div`
  margin-bottom: 1rem;
  display: flex;
`;

/**
 * The bulk of the application logic is housed in this component. Will handle display of screen, buttons, and calculator outputs.
 * Also takes care of keyboard events.
 */
const Calculator = () => {
  const [operation, setOperation] = useState([]);

  const appendSymbol = (symbol) => {
    setOperation([...operation, symbol]);
  };

  const handleEquals = () => {
    // eslint-disable-next-line no-eval
    const calculated = eval(operation.join('')); // this should be safe when restricted to math operations
    setOperation(calculated.toString(10).split(''));
  };

  const handleBackspace = () => {
    setOperation((prev) => prev.slice(0, -1));
  };

  /**
   * Handle keyboard events for the calculator, digits will draw to screen, operators will apply operations, etc.
   * @param {object} event Keydown event.
   */
  const handleKeyboard = (event) => {
    if (allowedDigits.includes(event.key)) appendSymbol(event.key);
    if (allowedOperators.includes(event.key)) appendSymbol(event.key);
    if (event.key === equalsSymbol) handleEquals();
    if (event.key === backspace) handleBackspace();
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyboard);
    return () => document.removeEventListener('keydown', handleKeyboard); // clean up event listeners
  });

  return (
    <Container>
      <ScreenContainer>
        <Screen symbols={operation} />
      </ScreenContainer>
    </Container>
  );
};

export default Calculator;
