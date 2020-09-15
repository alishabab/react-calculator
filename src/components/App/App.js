import React from 'react';

import ButtonPanel from '../ButtonPanel/ButtonPanel';
import Display from '../Display/Display';
import classes from './App.module.css';
import calculate from '../../logic/calculate';
import renderResult from '../../helpers/renderResult';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(buttonName) {
    const newState = calculate(this.state, buttonName);
    this.setState(newState);
  }

  render() {
    return (
      <div className={classes.App}>
        <Display result={renderResult(this.state)} />
        <ButtonPanel onClick={this.handleClick} />
      </div>
    );
  }
}

export default App;
