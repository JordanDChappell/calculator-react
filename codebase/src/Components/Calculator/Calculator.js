import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import {
  removeElementByIndex,
  replaceElementAtIndex,
} from '../../Utils/arrayUtils';

/* Library */
import {
  allowedSymbols,
  backspaceKey,
  deleteKey,
  arrowLeftKey,
  allowedCursorKeys,
  enterKey,
  escapeKey,
} from '../../Utils/calculatorUtils';
import Buttons from './Buttons/Buttons';

/* Components */
import Screen from './Screen/Screen';

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

/**
 * The bulk of the application logic is housed in this component. Will handle display of screen, buttons, and calculator outputs.
 * Also takes care of keyboard events.
 */
const Calculator = () => {
  const [expression, setExpression] = useState([]);
  const [cursorPosition, setCursorPosition] = useState(0);

  /**
   * Moves the cursor to the left if possible.
   */
  const moveCursorLeft = () => {
    setCursorPosition((prev) => (prev > 0 ? prev - 1 : 0));
  };

  /**
   * Moves the cursor to the right if possible.
   * @param {number?} offset Optional offset to apply to the position.
   */
  const moveCursorRight = (offset = 0) => {
    setCursorPosition((prev) =>
      prev < expression.length + offset ? prev + 1 : prev
    );
  };

  /**
   * Add a new symbol (number, operator) to the expression.
   * @param {string} symbol Key pressed.
   */
  const appendSymbol = (symbol) => {
    setExpression((prev) =>
      replaceElementAtIndex(prev, cursorPosition, symbol)
    );
    moveCursorRight(1);
  };

  /**
   * Reset screen state to defaults.
   */
  const clearScreen = () => {
    setExpression([]);
    setCursorPosition(0);
  };

  /**
   * Evalute the expression provided and display the result on the screen.
   */
  const handleEquals = () => {
    try {
      // eslint-disable-next-line no-eval
      const calculated = eval(expression.join('')).toString(10).split(''); // this should be safe when restricted to math operations
      setExpression(calculated);
      setCursorPosition(calculated.length);
    } catch {
      clearScreen();
    }
  };

  /**
   * Removes a symbol from the screen at before the cursor position.
   */
  const handleBackspace = () => {
    if (cursorPosition === 0) return;
    setExpression((prev) => removeElementByIndex(prev, cursorPosition));
    moveCursorLeft();
  };

  /**
   * Removes a symbol from the screen that the cursor is pointing to.
   */
  const handleDelete = () => {
    setExpression((prev) => removeElementByIndex(prev, cursorPosition + 1));
  };

  /**
   * Moves the cursor to the left or right depending on the pressed key.
   * @param {string} key Arrow key that was pressed.
   */
  const handleCursor = (key) => {
    if (key === arrowLeftKey) moveCursorLeft();
    else moveCursorRight();
  };

  /**
   * Handle keyboard events for the calculator, digits will draw to screen, operators will apply operations, etc.
   * @param {object} event Keydown event.
   */
  const handleButtonEvent = (event) => {
    const { key } = event;
    if (allowedSymbols.includes(key)) appendSymbol(key);
    if (allowedCursorKeys.includes(key)) handleCursor(key);
    if (key === backspaceKey) handleBackspace();
    if (key === deleteKey) handleDelete();
    if (key === 'c' || key === escapeKey) clearScreen();
    if (key === '=' || key === enterKey) handleEquals();
  };

  useEffect(() => {
    document.addEventListener('keydown', handleButtonEvent);
    return () => document.removeEventListener('keydown', handleButtonEvent); // clean up event listeners
  });

  return (
    <Container>
      <Screen
        symbols={expression}
        cursorPosition={cursorPosition}
        width="40%"
      />
      <Buttons
        width="40%"
        onButtonPressed={(symbol) => handleButtonEvent({ key: symbol })}
      />
    </Container>
  );
};

export default Calculator;
