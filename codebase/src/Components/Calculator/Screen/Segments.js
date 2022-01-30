import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

/**
 * Look up which segments should be shown based on a given symbol type.
 * Segments are:
 * 0: Top centre     ---
 * 5: Top left      |___|    1: Top right
 * 4: Bottom left   |   |    2: Bottom right
 * 3: Bottom centre  ---
 * 6: Centre
 * @param {string} symbol
 */
const lookupSymbol = (symbol) => {
  const symbols = {
    0: [1, 0, 0, 0, 0, 0, 0],
    1: [0, 1, 1, 0, 0, 0, 0],
    2: [1, 1, 0, 1, 1, 0, 1],
    3: [1, 1, 1, 1, 0, 0, 1],
    4: [0, 1, 1, 0, 0, 1, 1],
    5: [1, 0, 1, 1, 0, 1, 1],
    6: [1, 0, 1, 1, 1, 1, 1],
    7: [1, 1, 1, 0, 0, 0, 0],
    8: [1, 1, 1, 1, 1, 1, 1],
    9: [1, 1, 1, 0, 0, 0, 1],
    '+': [0, 0, 0, 0, 0, 0, 0],
    '-': [0, 0, 0, 0, 0, 0, 1],
    '*': [0, 0, 0, 0, 0, 0, 0],
    '/': [0, 0, 0, 0, 0, 0, 0],
    default: new Error('Undefined symbol provided to Segments component'),
  };

  return symbols[symbol] || symbols.default;
};

const Container = styled.div``;
const VerticalSegment = styled.div`
  display: ${(props) => (props.visible ? 'block' : 'none')};
`;
const HorizontalSegment = styled.div`
  display: ${(props) => (props.visible ? 'block' : 'none')};
`;

/**
 * A 7 segmented display drawn with basic HTML div elements.
 * @param {string} props.symbol
 * @param {string} props.colour
 * @param {number} props.height
 * @param {number} props.width
 */
const Segments = ({ symbol, colour, height, width }) => {
  // determine position based on height and width
  const horizontalHeight = height / 10;
  const verticalHeight = height / 2;
  const horizontalWidth = width / 10;

  // determine segments to show based on symbol
  const segs = lookupSymbol(symbol);

  return (
    <Container>
      {segs.map(
        (visible, index) =>
          (index % 3 === 0 && (
            <HorizontalSegment
              height={horizontalHeight}
              width={horizontalWidth}
              visible={visible}
            ></HorizontalSegment>
          )) ||
          (index % 3 !== 0 && (
            <VerticalSegment
              height={verticalHeight}
              width={width}
              visible={visible}
            ></VerticalSegment>
          ))
      )}
    </Container>
  );
};

Segments.propTypes = {
  symbol: PropTypes.string.isRequired,
  colour: PropTypes.string,
  height: PropTypes.number,
  width: PropTypes.number,
};

export default Segments;
