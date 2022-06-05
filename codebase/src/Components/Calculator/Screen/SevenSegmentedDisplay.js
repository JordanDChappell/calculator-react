import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { padAtEvenIndicesWithValue } from '../../../Utils/arrayUtils';

/**
 * Look up which segments should be shown based on a given symbol type.
 * @param {string} symbol
 */
const lookupSymbol = (symbol) => {
  const symbols = {
    //  T, L, R, M, L, R, M
    0: [1, 1, 1, 0, 1, 1, 1],
    1: [0, 0, 1, 0, 0, 1, 0],
    2: [1, 0, 1, 1, 1, 0, 1],
    3: [1, 0, 1, 1, 0, 1, 1],
    4: [0, 1, 1, 1, 0, 1, 0],
    5: [1, 1, 0, 1, 0, 1, 1],
    6: [1, 1, 0, 1, 1, 1, 1],
    7: [1, 0, 1, 0, 0, 1, 0],
    8: [1, 1, 1, 1, 1, 1, 1],
    9: [1, 1, 1, 1, 0, 1, 0],
    '+': [0, 0, 1, 1, 0, 1, 0],
    '-': [0, 0, 0, 1, 0, 0, 0],
    '*': [1, 0, 0, 0, 0, 0, 1],
    '/': [0, 0, 1, 0, 0, 1, 0],
    default: new Error('Undefined symbol provided to Segments component'),
  };

  return symbols[symbol] || symbols.default;
};

const Container = styled.div`
  display: grid;
  grid-template-rows: 5% auto 5% auto 5%;
  grid-template-columns: 10% auto 10%;
  grid-column-gap: 2px;
  height: ${(props) => props.height};
  width: ${(props) => props.width};
`;
const Segment = styled.div`
  visibility: ${(props) => (props.visible ? 'visible' : 'hidden')};
  background-color: ${(props) => props.colour ?? 'black'};
`;

/**
 * A 7 segmented display drawn with basic HTML div elements.
 * @param {string} props.symbol
 * @param {number} props.height
 * @param {number} props.width
 */
const SevenSegmentDisplay = ({ symbol, height, width }) => {
  // determine which segments to display and pad segments out to account for layout divs
  const segs = padAtEvenIndicesWithValue(lookupSymbol(symbol), 0);
  return (
    <Container height={height} width={width}>
      {segs.map(
        (visible, index) =>
          (index % 2 === 0 && <div key={`${index}-${visible}`}></div>) || (
            <Segment key={`${index}-${visible}`} visible={visible}></Segment>
          )
      )}
    </Container>
  );
};

SevenSegmentDisplay.propTypes = {
  symbol: PropTypes.string.isRequired,
  height: PropTypes.string,
  width: PropTypes.string,
};

export default SevenSegmentDisplay;
