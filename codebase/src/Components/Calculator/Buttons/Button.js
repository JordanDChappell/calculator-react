import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

/* Library */
import childrenPropType from '../../../Utils/propTypes';
import lightenDarkenColour from '../../../Utils/colourUtils';

const StyledButton = styled.button`
  height: 4em;
  width: 4em;
  font-size: 1em;
  cursor: pointer;
  border: 0px;
  border-radius: 2em;
  color: ${(props) => props.theme.primaryText};
  background-color: ${(props) =>
    lightenDarkenColour(props.theme.primary, props.secondary ? -50 : 0)};
  grid-area: ${(props) => props.area};
`;

const Button = ({ area, shortcut, secondary, children, onClick }) => (
  <StyledButton
    area={area}
    secondary={secondary}
    onClick={onClick}
    title={`Keyboard: ${shortcut}`}
  >
    {children}
  </StyledButton>
);

Button.propTypes = {
  area: PropTypes.string.isRequired,
  shortcut: PropTypes.string,
  secondary: PropTypes.bool,
  children: childrenPropType,
  onClick: PropTypes.func,
};

export default Button;
