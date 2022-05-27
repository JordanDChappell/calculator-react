import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

/* Components */
import Segments from './Segments';

const Container = styled.div`
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
const Screen = ({ symbols }) => (
  <Container>
    {symbols.map((symbol, index) => (
      <Segments
        key={`${index}-${symbol}`}
        symbol={symbol}
        height="100px"
        width="50px"
      />
    ))}
  </Container>
);

Screen.propTypes = {
  symbols: PropTypes.arrayOf(PropTypes.string),
};

export default Screen;
