import React from 'react';

import ButtonPanel from './ButtonPanel';
import Display from './Display';

const App = () => (
  <div>
    <header>
      <h1>Calculator App</h1>
    </header>
    <Display result="0" />
    <ButtonPanel />
  </div>
);

export default App;
