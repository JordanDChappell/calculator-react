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
  top: ${(props) => props.height + 10}px;
  right: 10px;
  margin-right: ${(props) => props.right};
  background-color: ${(props) => props.theme.secondaryText ?? 'black'};
  animation: ${blinkAnimation} 1s step-start infinite;
`;

const Cursor = ({ height, width, position, availablePositions, gap }) => (
  <Bar
    height={height}
    width={width}
    position={position}
    right={`${
      (availablePositions - position) * width +
      (availablePositions - position) * gap
    }px`}
  />
);

Cursor.propTypes = {
  height: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
  position: PropTypes.number.isRequired,
  availablePositions: PropTypes.number,
  gap: PropTypes.number,
};

export default Cursor;
