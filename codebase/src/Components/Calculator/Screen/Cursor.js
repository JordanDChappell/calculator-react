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
  top: ${(props) => props.height}px;
  left: ${(props) => props.position * props.width}px;
  background-color: ${(props) => props.colour ?? 'black'};
  animation: ${blinkAnimation} 1s step-start infinite;
`;

const Cursor = ({ colour, height, width, position }) => (
  <Bar colour={colour} height={height} width={width} position={position} />
);

Cursor.propTypes = {
  colour: PropTypes.string,
  height: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
  position: PropTypes.number.isRequired,
};

export default Cursor;
