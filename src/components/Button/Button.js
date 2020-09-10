import React from 'react';
import PropTypes from 'prop-types';
import classes from './Button.module.css';

const Button = ({ buttonName, wide, color }) => (
  <div className={wide ? classes.wide : classes.Button}>
    <button type="button" className={color ? classes.color : null}>
      { buttonName }
    </button>
  </div>
);

Button.propTypes = {
  buttonName: PropTypes.string.isRequired,
  wide: PropTypes.bool,
  color: PropTypes.bool,
};

Button.defaultProps = {
  wide: false,
  color: false,
};

export default Button;
