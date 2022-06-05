import PropTypes from 'prop-types';

const childrenPropType = PropTypes.oneOfType([
  PropTypes.arrayOf(PropTypes.node),
  PropTypes.node,
]).isRequired;

export default childrenPropType;
