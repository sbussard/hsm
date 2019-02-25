import React, { useContext } from 'react';
import machineContext from '../../contexts/machine';
import View from './view';

export default () => {
  const { state, actions } = useContext(machineContext.context);
  return <View state={state} {...actions} />;
};
