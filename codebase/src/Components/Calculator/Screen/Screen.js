import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

/* Components */
import SixteenSegmentDisplay from './SixteenSegmentDisplay';
import Cursor from './Cursor';

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  gap: 10px;

  > div:first-child {
    margin-left: auto;
  }
`;

/**
 * Display a list of digits on a segmented screen.
 * @param {array} props.symbols
 */
const Screen = ({ symbols, cursorPosition }) => (
  <Container>
    {symbols.map((symbol, index) => (
      <SixteenSegmentDisplay
        key={`${index}-${symbol}`}
        symbol={symbol}
        height="100px"
        width="60px"
      />
    ))}
    <Cursor height={100} width={70} position={cursorPosition ?? 0} />
  </Container>
);

Screen.propTypes = {
  symbols: PropTypes.arrayOf(PropTypes.string),
  cursorPosition: PropTypes.number,
};

export default Screen;
