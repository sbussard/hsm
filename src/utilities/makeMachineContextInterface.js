import React, { createContext } from 'react';
import useMachine from '../hooks/useMachine';

export default ({ machine, states }) => {
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
