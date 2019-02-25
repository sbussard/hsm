import machine, { states } from '../machines/trafficLight';
import makeMachineContextInterface from '../utilities/makeMachineContextInterface';

export default makeMachineContextInterface({ machine, states });
