import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {
  backspaceKey,
  deleteKey,
  arrowLeftKey,
  arrowRightKey,
} from '../../../Utils/calculatorUtils';

import Button from './Button';
import DoubleWideButton from './DoubleWideButton';

const Container = styled.div`
  display: grid;
  grid-template-rows: auto auto auto auto auto;
  grid-template-columns: auto auto auto auto;
  grid-template-areas:
    'left left right right'
    'a b c d'
    'e f g h'
    'i j k l'
    'm n o p'
    'q q r s';
  grid-column-gap: 0.5em;
  grid-row-gap: 0.5em;
`;

const Buttons = ({ onButtonPressed }) => (
  <Container>
    <DoubleWideButton
      area="left"
      shortcut="Arrow left"
      onClick={() => onButtonPressed(arrowLeftKey)}
    >
      {'<'}
    </DoubleWideButton>
    <DoubleWideButton
      area="right"
      shortcut="Arrow right"
      onClick={() => onButtonPressed(arrowRightKey)}
    >
      {'>'}
    </DoubleWideButton>
    <Button
      area="a"
      shortcut="c / ESC"
      secondary
      onClick={() => onButtonPressed('c')}
    >
      AC
    </Button>
    <Button
      area="b"
      shortcut="DEL"
      secondary
      onClick={() => onButtonPressed(deleteKey)}
    >
      DEL
    </Button>
    <Button
      area="c"
      shortcut="Backspace"
      secondary
      onClick={() => onButtonPressed(backspaceKey)}
    >
      {`<-`}
    </Button>
    <Button
      area="d"
      shortcut="/"
      secondary
      onClick={() => onButtonPressed('/')}
    >
      /
    </Button>
    <Button area="e" shortcut="7" onClick={() => onButtonPressed('7')}>
      7
    </Button>
    <Button area="f" shortcut="8" onClick={() => onButtonPressed('8')}>
      8
    </Button>
    <Button area="g" shortcut="9" onClick={() => onButtonPressed('9')}>
      9
    </Button>
    <Button
      area="h"
      shortcut="*"
      secondary
      onClick={() => onButtonPressed('*')}
    >
      *
    </Button>
    <Button area="i" shortcut="4" onClick={() => onButtonPressed('4')}>
      4
    </Button>
    <Button area="j" shortcut="5" onClick={() => onButtonPressed('5')}>
      5
    </Button>
    <Button area="k" shortcut="6" onClick={() => onButtonPressed('6')}>
      6
    </Button>
    <Button
      area="l"
      shortcut="-"
      secondary
      onClick={() => onButtonPressed('-')}
    >
      -
    </Button>
    <Button area="m" shortcut="1" onClick={() => onButtonPressed('1')}>
      1
    </Button>
    <Button area="n" shortcut="2" onClick={() => onButtonPressed('2')}>
      2
    </Button>
    <Button area="o" shortcut="3" onClick={() => onButtonPressed('3')}>
      3
    </Button>
    <Button
      area="p"
      shortcut="+"
      secondary
      onClick={() => onButtonPressed('+')}
    >
      +
    </Button>
    <DoubleWideButton
      area="q"
      shortcut="0"
      onClick={() => onButtonPressed('0')}
    >
      0
    </DoubleWideButton>
    <Button
      area="r"
      shortcut="."
      secondary
      onClick={() => onButtonPressed('.')}
    >
      .
    </Button>
    <Button
      area="s"
      shortcut="="
      secondary
      onClick={() => onButtonPressed('=')}
    >
      {'='}
    </Button>
  </Container>
);

Buttons.propTypes = {
  onButtonPressed: PropTypes.func,
};

export default Buttons;
