import React from 'react';
import Button from './Button';

const styles = {
  display: 'flex',
};

const ButtonPanel = () => (
  <div>
    <div style={styles}>
      <Button buttonName="AC" />
      <Button buttonName="+/-" />
      <Button buttonName="%" />
      <Button buttonName="÷" />
    </div>
    <div style={styles}>
      <Button buttonName="7" />
      <Button buttonName="8" />
      <Button buttonName="9" />
      <Button buttonName="X" />
    </div>
    <div style={styles}>
      <Button buttonName="4" />
      <Button buttonName="5" />
      <Button buttonName="6" />
      <Button buttonName="-" />
    </div>
    <div style={styles}>
      <Button buttonName="1" />
      <Button buttonName="2" />
      <Button buttonName="3" />
      <Button buttonName="+" />
    </div>
    <div style={styles}>
      <Button buttonName="0" />
      <Button buttonName="." />
      <Button buttonName="=" />
    </div>
  </div>
);

export default ButtonPanel;
