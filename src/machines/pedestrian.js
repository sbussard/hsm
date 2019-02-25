import { Machine } from 'xstate';

export const states = {
  WALK: 'WALK',
  WAIT: 'WAIT',
  STOP: 'STOP'
};

export const configuration = {
  initial: states.WALK,
  states: {
    [states.WALK]: { on: { countdown: states.WAIT } },
    [states.WAIT]: { on: { countdown: states.STOP } },
    [states.STOP]: {}
  }
};

export default Machine(configuration);
