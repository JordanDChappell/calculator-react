import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

/* Components */
import SixteenSegmentDisplay from './SixteenSegmentDisplay';
import Cursor from './Cursor';

const Container = styled.div`
  position: relative;
  width: ${(props) => props.width};
  overflow-x: hidden;
  height: 110px;
`;

const SymbolsContainer = styled.div`
  position: absolute;
  right: 70px;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  gap: 10px;
`;

/**
 * Display a list of digits on a segmented screen.
 * @param {array} props.symbols
 */
const Screen = ({ symbols, cursorPosition, width }) => (
  <Container width={width}>
    <SymbolsContainer>
      {symbols.map((symbol, index) => (
        <SixteenSegmentDisplay
          key={`${index}-${symbol}`}
          symbol={symbol}
          height="100px"
          width="60px"
        />
      ))}
    </SymbolsContainer>
    <Cursor
      height={100}
      width={60}
      position={cursorPosition ?? 0}
      availablePositions={symbols.length}
      gap={10}
    />
  </Container>
);

Screen.propTypes = {
  symbols: PropTypes.arrayOf(PropTypes.string),
  cursorPosition: PropTypes.number,
  width: PropTypes.string,
};

export default Screen;
