/* Constants */
export const modes = {
  ADD: 'add',
  SUBTRACT: 'subtract',
  MULTIPLY: 'multiply',
  DIVIDE: 'divide',
};
export const allowedDigits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
export const allowedOperators = ['+', '-', '*', '/'];
export const equalsSymbol = '=';

/* Functions */

export const determineOperatorMode = (operator) => {
  const operatorConversion = {
    '+': 'ADD',
    '-': 'SUBTRACT',
    '*': 'MULTIPLY',
    '/': 'DIVIDE',
  };

  return operatorConversion[operator];
};
