import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const lookupRotation = (area) => {
  const rotations = {
    diag1: -25,
    diag2: 25,
    diag3: -155,
    diag4: 155,
  };

  return rotations[area] ?? 0;
};

const lookupArea = (position) =>
  [
    'top',
    'left1',
    'diag1',
    'diag2',
    'right1',
    'middle',
    'left2',
    'diag3',
    'diag4',
    'right2',
    'bottom',
  ][position];

/**
 * Look up which segments should be shown based on a given symbol type.
 * @param {string} symbol
 */
const lookupSymbol = (symbol) => {
  const symbols = {
    //  T, L, D, D, R, M, L, D, D, R, B
    0: [1, 1, 0, 0, 1, 0, 1, 0, 0, 1, 1],
    1: [0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0],
    2: [1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1],
    3: [1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1],
    4: [0, 1, 0, 0, 1, 1, 0, 0, 0, 1, 0],
    5: [1, 1, 0, 0, 0, 1, 0, 0, 0, 1, 1],
    6: [1, 1, 0, 0, 0, 1, 1, 0, 0, 1, 1],
    7: [1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0],
    8: [1, 1, 0, 0, 1, 1, 1, 0, 0, 1, 1],
    9: [1, 1, 0, 0, 1, 1, 0, 0, 0, 1, 0],
    '+': [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
    '-': [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
    '*': [0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0],
    '/': [0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0],
    default: new Error('Undefined symbol provided to Segments component'),
  };

  return symbols[symbol] || symbols.default;
};

const Container = styled.div`
  display: grid;
  grid-template-rows: 5% auto 5% auto 5%;
  grid-template-columns: 10% 10% auto 10% 10%;
  grid-template-areas:
    '. top top top .'
    'left1 diag1 . diag2 right1'
    '. middle middle middle .'
    'left2 diag3 . diag4 right2'
    '. bottom bottom bottom .';
  grid-column-gap: 2px;
  height: ${(props) => props.height};
  width: ${(props) => props.width};
`;
const Segment = styled.div`
  opacity: ${(props) => (props.visible ? 1 : 0.02)};
  background-color: ${(props) => props.colour ?? 'black'};
  transform: rotate(${(props) => props.rotate ?? 0}deg);
  grid-area: ${(props) => props.area};
`;

/**
 * An 11 segmented display drawn with basic HTML div elements.
 * @param {string} props.symbol
 * @param {number} props.height
 * @param {number} props.width
 */
const ElevenSegmentDisplay = ({ symbol, height, width }) => {
  // determine which segments to display
  const segs = lookupSymbol(symbol);

  return (
    <Container height={height} width={width}>
      {segs.map((visible, index) => (
        <Segment
          key={`${index}-${visible}`}
          visible={visible}
          area={lookupArea(index)}
          rotate={lookupRotation(lookupArea(index))}
        ></Segment>
      ))}
    </Container>
  );
};

ElevenSegmentDisplay.propTypes = {
  symbol: PropTypes.string.isRequired,
  height: PropTypes.string,
  width: PropTypes.string,
};

export default ElevenSegmentDisplay;
