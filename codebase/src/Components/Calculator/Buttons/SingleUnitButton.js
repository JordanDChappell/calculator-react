import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import childrenPropType from '../../../Utils/propTypes';

const Button = styled.button``;

const SingleUnitButton = ({ children, onClick }) => (
  <Button onClick={onClick}>{children}</Button>
);

SingleUnitButton.propTypes = {
  children: childrenPropType,
  onClick: PropTypes.func,
};

export default SingleUnitButton;
