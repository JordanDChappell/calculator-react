import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import childrenPropType from '../../../Utils/propTypes';

const StyledButton = styled.button`
  height: 4em;
  width: 8.5em;
  font-size: 1em;
  cursor: pointer;
  border: 0px;
  border-radius: 2em;
  color: ${(props) => props.theme.secondaryText};
  background-color: ${(props) => props.theme.secondary};
  grid-area: ${(props) => props.area};
`;

const DoubleWideButton = ({ area, shortcut, children, onClick }) => (
  <StyledButton area={area} onClick={onClick} title={`Keyboard: ${shortcut}`}>
    {children}
  </StyledButton>
);

DoubleWideButton.propTypes = {
  height: PropTypes.string,
  width: PropTypes.string,
  area: PropTypes.string,
  shortcut: PropTypes.string,
  children: childrenPropType,
  onClick: PropTypes.func,
};

export default DoubleWideButton;
