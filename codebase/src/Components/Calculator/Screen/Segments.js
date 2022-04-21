import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

/**
 * Look up which segments should be shown based on a given symbol type.
 * @param {string} symbol
 */
const lookupSymbol = (symbol) => {
  const symbols = {
    //  0  1  2  3  4  5  6  7  8  9  10 11 12 13 14
    //  0  ?  0  ?  0  ?  0  ?  0  ?  0  ?  0  ?  0
    0: [0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0],
    1: [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0],
    2: [0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0],
    3: [0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0],
    4: [0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0],
    5: [0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0],
    6: [0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0],
    7: [0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0],
    8: [0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
    9: [0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0],
    '+': [0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0],
    '-': [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
    '*': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    '/': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
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
 * @param {string} props.colour
 * @param {number} props.height
 * @param {number} props.width
 */
const Segments = ({ symbol, colour, height, width }) => {
  // determine segments to show based on symbol
  const segs = lookupSymbol(symbol);

  return (
    <Container height={height} width={width}>
      {segs.map(
        (visible, index) =>
          (index % 2 === 0 && <div key={`${index}-${visible}`}></div>) || (
            <Segment
              key={`${index}-${visible}`}
              colour={colour}
              visible={visible}
            ></Segment>
          )
      )}
    </Container>
  );
};

Segments.propTypes = {
  symbol: PropTypes.string.isRequired,
  colour: PropTypes.string,
  height: PropTypes.string,
  width: PropTypes.string,
};

export default Segments;
