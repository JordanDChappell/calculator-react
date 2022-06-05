import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import childrenPropType from '../../../Utils/propTypes';

const StyledButton = styled.button`
  height: 4em;
  width: 4em;
  font-size: 1em;
  cursor: pointer;
  border: 0px;
  border-radius: 2em;
  color: ${(props) => props.theme.primaryText};
  background-color: ${(props) => props.theme.primary};
  grid-area: ${(props) => props.area};
`;

const Button = ({ area, shortcut, children, onClick }) => (
  <StyledButton area={area} onClick={onClick} title={`Keyboard: ${shortcut}`}>
    {children}
  </StyledButton>
);

Button.propTypes = {
  area: PropTypes.string.isRequired,
  shortcut: PropTypes.string,
  children: childrenPropType,
  onClick: PropTypes.func,
};

export default Button;
