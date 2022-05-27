import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

/* Library */
import {
  modes,
  allowedDigits,
  allowedOperators,
  equalsSymbol,
  determineOperatorMode,
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
`;

/**
 * The bulk of the application logic is housed in this component. Will handle display of screen, buttons, and calculator outputs.
 * Also takes care of keyboard events.
 */
const Calculator = () => {
  const [mode, setMode] = useState(null);
  const [leftOperand, setLeftOperand] = useState([]);
  const [rightOperand, setRightOperand] = useState([]);
  const [answer, setAnswer] = useState([]);

  const appendLeftOperand = (digit) => {
    setLeftOperand([...leftOperand, digit]);
  };

  const appendRightOperand = (digit) => {
    setRightOperand([...rightOperand, digit]);
  };

  const handleDigit = (digit) => {
    if (mode) appendLeftOperand(digit);
    else appendRightOperand(digit);
  };

  const handleOperator = (operator) => {
    const selectedMode = determineOperatorMode(operator);
    setMode(selectedMode);
  };

  const handleEquals = () => {
    const left = parseInt(leftOperand.join(''), 10);
    const right = parseInt(rightOperand.join(''), 10);
    const calculated = (left + right).toString(10).split('');

    setMode(null);
    setAnswer(calculated);
    setLeftOperand(calculated);
    setRightOperand([]);
  };

  /**
   * Handle keyboard events for the calculator, digits will draw to screen, operators will apply operations, etc.
   * @param {object} event Keydown event.
   */
  const handleKeyboard = (event) => {
    if (allowedDigits.includes(event.key)) handleDigit(event.key);
    if (allowedOperators.includes(event.key)) handleOperator(event.key);
    if (event.key === equalsSymbol) handleEquals();
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyboard);
    return () => document.removeEventListener('keydown', handleKeyboard); // clean up event listeners
  });

  return (
    <Container>
      <ScreenContainer>
        <Screen symbols={leftOperand} />
      </ScreenContainer>
      <ScreenContainer>
        <Screen symbols={rightOperand} />
      </ScreenContainer>
      {/* <ScreenContainer>
        <Screen symbols={answer} />
      </ScreenContainer> */}
    </Container>
  );
};

export default Calculator;
