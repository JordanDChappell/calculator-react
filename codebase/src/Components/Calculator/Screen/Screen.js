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
 * @param {array} props.digits
 */
const Screen = ({ digits }) => (
  <Container>
    {digits.map((digit, index) => (
      <Segments
        key={`${index}-${digit}`}
        symbol={digit}
        height="100px"
        width="50px"
      />
    ))}
  </Container>
);

Screen.propTypes = {
  digits: PropTypes.arrayOf(PropTypes.string),
};

export default Screen;
