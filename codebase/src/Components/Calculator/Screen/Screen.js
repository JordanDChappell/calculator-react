import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

/* Components */
import SixteenSegmentDisplay from './SixteenSegmentDisplay';
import Cursor from './Cursor';

const Container = styled.div`
  position: relative;
  width: 320px;
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
  right: ${(props) => 60 - (props.offset ?? 0)}px;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  gap: 10px;
`;

/**
 * Display a list of digits on a segmented screen.
 * @param {array} props.symbols
 */
const Screen = ({ symbols, cursorPosition }) => {
  const displayWidth = 5;
  const cursorOffset = symbols.length - cursorPosition;
  const positionDifference = cursorOffset - displayWidth;
  const screenOffset =
    cursorOffset >= displayWidth ? positionDifference * 50 : 0;

  const emptySegments = [
    'null',
    'null',
    'null',
    'null',
    'null',
    'null',
    'null',
  ];

  return (
    <Container>
      <SymbolsContainer>
        {emptySegments.map((symbol, index) => (
          <SixteenSegmentDisplay
            key={`${index}-${symbol}`}
            symbol={symbol}
            height="80px"
            width="40px"
          />
        ))}
      </SymbolsContainer>
      <SymbolsContainer offset={screenOffset}>
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
        position={
          positionDifference >= 0
            ? symbols.length - displayWidth
            : cursorPosition
        }
        availablePositions={symbols.length}
        gap={10}
      />
    </Container>
  );
};

Screen.propTypes = {
  symbols: PropTypes.arrayOf(PropTypes.string),
  cursorPosition: PropTypes.number,
};

export default Screen;
