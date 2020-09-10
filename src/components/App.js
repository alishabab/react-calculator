import React from 'react';

import ButtonPanel from './ButtonPanel';
import Display from './Display';

const App = () => (
  <div>
    <header>
      <h1>Calculator App</h1>
      <Display result="0" />
      <ButtonPanel />
    </header>
  </div>
);

export default App;
