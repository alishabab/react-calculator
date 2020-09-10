import React from 'react';
import Button from '../Button/Button';
import classes from './ButtonPanel.module.css';

const ButtonPanel = () => (
  <div>
    <div className={classes.row}>
      <Button buttonName="AC" color />
      <Button buttonName="+/-" color />
      <Button buttonName="%" color />
      <Button buttonName="÷" />
    </div>
    <div className={classes.row}>
      <Button buttonName="7" color />
      <Button buttonName="8" color />
      <Button buttonName="9" color />
      <Button buttonName="X" />
    </div>
    <div className={classes.row}>
      <Button buttonName="4" color />
      <Button buttonName="5" color />
      <Button buttonName="6" color />
      <Button buttonName="-" />
    </div>
    <div className={classes.row}>
      <Button buttonName="1" color />
      <Button buttonName="2" color />
      <Button buttonName="3" color />
      <Button buttonName="+" />
    </div>
    <div className={classes.row}>
      <Button buttonName="0" wide color />
      <Button buttonName="." color />
      <Button buttonName="=" />
    </div>
  </div>
);

export default ButtonPanel;
