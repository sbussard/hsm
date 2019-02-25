import React, { useContext } from 'react';
import machineContext, { states } from '../../contexts/machine';

const format = state => JSON.stringify(state).replace(/[\{\}\"]/g, '');

export default () => {
  const { state, actions } = useContext(machineContext.context);
  const buttons = Object.keys(actions).map(actionName => (
    <button onClick={actions[actionName]}>{actionName}</button>
  ));

  switch (state) {
    case 'GREEN':
      return (
        <div>
          <h1>totally green</h1>
          {buttons}
        </div>
      );
    case 'YELLOW':
      return (
        <div>
          <h1>yellow, not green</h1>
          {buttons}
        </div>
      );
    default:
      return 'missing';
  }
};
