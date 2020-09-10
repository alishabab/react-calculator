import React from 'react';
import PropTypes from 'prop-types';
import classes from './Display.module.css';

const Display = ({ result }) => (
  <div className={classes.Display}>
    <p>
      {result}
    </p>
  </div>
);

Display.propTypes = {
  result: PropTypes.string,
};

Display.defaultProps = {
  result: '0',
};

export default Display;
