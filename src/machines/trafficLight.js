import { Machine } from 'xstate';
import { configuration as pedestrianMachine } from './pedestrian';

export const states = {
  GREEN: 'GREEN',
  YELLOW: 'YELLOW',
  RED: 'RED'
};

export const configuration = {
  initial: states.GREEN,
  states: {
    [states.GREEN]: { on: { turnYellow: states.YELLOW } },
    [states.YELLOW]: { on: { turnRed: states.RED } },
    [states.RED]: {
      on: { turnGreen: states.GREEN },
      ...pedestrianMachine
    }
  }
};

export default Machine(configuration);
