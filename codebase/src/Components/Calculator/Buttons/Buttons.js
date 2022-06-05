import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import SingleUnitButton from './SingleUnitButton';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: ${(props) => props.width};
`;
const Row = styled.div`
  display: flex;

  > button {
    flex: 1;
  }
`;

const Buttons = ({ width, onButtonPressed }) => (
  <Container width={width}>
    <Row>
      <SingleUnitButton onClick={() => onButtonPressed('7')}>
        7
      </SingleUnitButton>
      <SingleUnitButton onClick={() => onButtonPressed('8')}>
        8
      </SingleUnitButton>
      <SingleUnitButton onClick={() => onButtonPressed('9')}>
        9
      </SingleUnitButton>
    </Row>
  </Container>
);

Buttons.propTypes = {
  width: PropTypes.string,
  onButtonPressed: PropTypes.func,
};

export default Buttons;
