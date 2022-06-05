import React from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';

const blinkAnimation = keyframes`
  50% {
    opacity: 0;
  }
`;

const Bar = styled.div`
  position: absolute;
  height: 5px;
  width: ${(props) => props.width}px;
  top: ${(props) => props.height + 5}px;
  left: ${(props) => props.left};
  background-color: ${(props) => props.colour ?? 'black'};
  animation: ${blinkAnimation} 1s step-start infinite;
`;

const Cursor = ({ colour, height, width, position, gap }) => (
  <Bar
    colour={colour}
    height={height}
    width={width}
    position={position}
    left={`${position * width + position * gap}px`}
  />
);

Cursor.propTypes = {
  colour: PropTypes.string,
  height: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
  position: PropTypes.number.isRequired,
  gap: PropTypes.number,
};

export default Cursor;
