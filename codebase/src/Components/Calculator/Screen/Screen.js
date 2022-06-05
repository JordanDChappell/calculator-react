import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

/* Components */
import SixteenSegmentDisplay from './SixteenSegmentDisplay';
import Cursor from './Cursor';

const Container = styled.div`
  position: relative;
  width: 18em;
  height: 90px;
  margin: 0 1em;
  padding: 0.5em;
  border: 1px solid grey;
  border-radius: 10px;
  background-color: ${(props) => props.theme.display};
  overflow-x: hidden;
`;
const SymbolsContainer = styled.div`
  position: absolute;
  right: 60px;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  gap: 10px;
`;

/**
 * Display a list of digits on a segmented screen.
 * @param {array} props.symbols
 */
const Screen = ({ symbols, cursorPosition }) => (
  <Container>
    <SymbolsContainer>
      {symbols.map((symbol, index) => (
        <SixteenSegmentDisplay
          key={`${index}-${symbol}`}
          symbol={symbol}
          height="80px"
          width="40px"
        />
      ))}
    </SymbolsContainer>
    <Cursor
      height={85}
      width={40}
      position={cursorPosition ?? 0}
      availablePositions={symbols.length}
      gap={10}
    />
  </Container>
);

Screen.propTypes = {
  symbols: PropTypes.arrayOf(PropTypes.string),
  cursorPosition: PropTypes.number,
};

export default Screen;
