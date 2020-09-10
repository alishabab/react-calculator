import React from 'react';

import ButtonPanel from '../ButtonPanel/ButtonPanel';
import Display from '../Display/Display';
import classes from './App.module.css';

const App = () => (
  <div className={classes.App}>
    <Display result="0" />
    <ButtonPanel />
  </div>
);

export default App;
