import React, { createContext } from 'react';
import useMachine from '../hooks/useMachine';

import machine, { states } from '../machines/trafficLight';
// import makeMachineContextInterface from '../utilities/makeMachineContextInterface';

const makeMachineContextInterface = ({ machine, states }) => {
  const context = createContext();

  return {
    states,
    context,
    Provider: ({ children }) => {
      const value = useMachine(machine);
      return <context.Provider value={value}>{children}</context.Provider>;
    }
  };
};

export default makeMachineContextInterface({ machine, states });
