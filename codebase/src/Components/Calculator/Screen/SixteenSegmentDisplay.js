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

const lookupMargin = (area, width) => {
  const offset = width / 6;

  const rotations = {
    diag1: `0 -${offset}px 0 ${offset}px`,
    diag2: `0 ${offset}px 0 -${offset}px`,
    diag3: `0 -${offset}px 0 ${offset}px`,
    diag4: `0 ${offset}px 0 -${offset}px`,
  };

  return rotations[area] ?? 0;
};

const lookupArea = (position) =>
  [
    'top1',
    'top2',
    'left1',
    'diag1',
    'middlevert1',
    'diag2',
    'right1',
    'middle1',
    'middle2',
    'left2',
    'diag3',
    'middlevert2',
    'diag4',
    'right2',
    'bottom1',
    'bottom2',
  ][position];

/**
 * Look up which segments should be shown based on a given symbol type.
 * @param {string} symbol
 */
const lookupSymbol = (symbol) => {
  const symbols = {
    //  T1,T2,L, DL,MV,DR,R, M1,M2,L, DL,MV,DR,R, B1,B2
    0: [1, 1, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 1, 1],
    1: [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0],
    2: [1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1],
    3: [1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1],
    4: [0, 0, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 0, 0],
    5: [1, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 1],
    6: [1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1],
    7: [1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0],
    8: [1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1],
    9: [1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1],
    '+': [0, 0, 0, 0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 0, 0, 0],
    '-': [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0],
    '*': [0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0],
    '/': [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
    default: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  };

  return symbols[symbol] || symbols.default;
};

const Container = styled.div`
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  display: grid;
  grid-template-rows: 5% auto 5% auto 5%;
  grid-template-columns: ${(props) =>
    `${props.colSize}% ${props.colSize}% auto ${props.colSize}% auto ${props.colSize}% ${props.colSize}%`};
  grid-template-areas:
    '. top1 top1 . top2 top2 .'
    'left1 diag1 . middlevert1 . diag2 right1'
    '. middle1 middle1 . middle2 middle2 .'
    'left2 diag3 . middlevert2 . diag4 right2'
    '. bottom1 bottom1 . bottom2 bottom2 .';
  flex-shrink: 0;
`;
const Segment = styled.div`
  opacity: ${(props) => (props.visible ? 1 : 0.02)};
  background-color: ${(props) => props.colour ?? 'black'};
  transform: rotate(${(props) => props.rotate ?? 0}deg);
  grid-area: ${(props) => props.area};
  margin: ${(props) => props.margin};
`;
const DecimalPlace = styled.div`
  height: ${(props) => props.size}px;
  width: ${(props) => props.size}px;
  background-color: ${(props) => props.colour ?? 'black'};
  margin-top: ${(props) => props.offset}px;
`;

/**
 * A 16 segmented display drawn with basic HTML div elements.
 * @param {string} props.symbol
 * @param {number} props.height
 * @param {number} props.width
 */
const SixteenSegmentDisplay = ({ symbol, height, width }) => {
  // calculate sizes and ratios
  const parsedHeight = parseInt(height, 10);
  const parsedWidth = parseInt(width, 10);
  const colSize = (parsedHeight / parsedWidth) * 5;
  const decimalSize = parsedHeight * 0.1;

  if (symbol === '.')
    return (
      <DecimalPlace size={decimalSize} offset={parsedHeight - decimalSize} />
    );

  // determine which segments to display
  const segs = lookupSymbol(symbol);

  return (
    <Container height={height} width={width} colSize={colSize}>
      {segs.map((visible, index) => (
        <Segment
          key={`${index}-${visible}`}
          visible={visible}
          area={lookupArea(index)}
          rotate={lookupRotation(lookupArea(index))}
          margin={lookupMargin(lookupArea(index), parsedWidth)}
        ></Segment>
      ))}
    </Container>
  );
};

SixteenSegmentDisplay.propTypes = {
  symbol: PropTypes.string.isRequired,
  height: PropTypes.string,
  width: PropTypes.string,
};

export default SixteenSegmentDisplay;
