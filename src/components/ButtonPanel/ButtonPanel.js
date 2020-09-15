import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button/Button';
import classes from './ButtonPanel.module.css';

const ButtonPanel = ({ onClick }) => (
  <div>
    <div className={classes.row}>
      <Button buttonName="AC" color onClick={onClick} />
      <Button buttonName="+/-" color onClick={onClick} />
      <Button buttonName="%" color onClick={onClick} />
      <Button buttonName="÷" onClick={onClick} />
    </div>
    <div className={classes.row}>
      <Button buttonName="7" color onClick={onClick} />
      <Button buttonName="8" color onClick={onClick} />
      <Button buttonName="9" color onClick={onClick} />
      <Button buttonName="X" onClick={onClick} />
    </div>
    <div className={classes.row}>
      <Button buttonName="4" color onClick={onClick} />
      <Button buttonName="5" color onClick={onClick} />
      <Button buttonName="6" color onClick={onClick} />
      <Button buttonName="-" onClick={onClick} />
    </div>
    <div className={classes.row}>
      <Button buttonName="1" color onClick={onClick} />
      <Button buttonName="2" color onClick={onClick} />
      <Button buttonName="3" color onClick={onClick} />
      <Button buttonName="+" onClick={onClick} />
    </div>
    <div className={classes.row}>
      <Button buttonName="0" wide color onClick={onClick} />
      <Button buttonName="." color onClick={onClick} />
      <Button buttonName="=" onClick={onClick} />
    </div>
  </div>
);

ButtonPanel.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default ButtonPanel;
