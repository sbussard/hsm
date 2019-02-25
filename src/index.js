import React from 'react';
import ReactDOM from 'react-dom';

import machine from './contexts/machine';
import MachinePanel from './components/MachinePanel';

const App = () => (
  <machine.Provider>
    <MachinePanel />
  </machine.Provider>
);

ReactDOM.render(<App />, document.getElementById('root'));
