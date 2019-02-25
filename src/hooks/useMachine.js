import { useState, useMemo, useEffect } from 'react';
import { interpret } from 'xstate';
import get from 'lodash/get';

const useMachine = machine => {
  const [state, setState] = useState(get(machine, ['initialState'], ''));
  const [actionTypes, setActionTypes] = useState([]);

  const makeActionParser = machine => stateValue => {
    const isSubState = typeof stateValue === 'object';
    const getActions = location =>
      Object.keys(get(machine, ['states', location, 'on'], {}));

    if (isSubState) {
      const machineState = Object.keys(stateValue).pop();
      const subMachine = get(machine, ['states', machineState], {});
      const subActions = makeActionParser(subMachine)(stateValue[machineState]);

      return getActions(machineState).concat(subActions);
    } else {
      return getActions(stateValue);
    }
  };

  const rootParser = makeActionParser(machine);

  const service = useMemo(
    () =>
      interpret(machine)
        .onTransition(state => {
          setActionTypes(rootParser(state.value));
          setState(state);
        })
        .start(),
    []
  );

  useEffect(() => () => service.stop(), []);

  const merge = (accumulator, item) => Object.assign(accumulator, item);
  const actions = actionTypes
    .map(type => ({ [type]: () => service.send(type) }))
    .reduce(merge, {});

  return { state: state.value, actions };
};

export default useMachine;
