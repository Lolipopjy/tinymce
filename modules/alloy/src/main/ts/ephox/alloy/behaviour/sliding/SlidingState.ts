import { Cell, Fun } from '@ephox/katamari';

import { nuState } from '../common/BehaviourState';
import { SlidingConfig, SlidingState } from './SlidingTypes';

const init = (spec: SlidingConfig): SlidingState => {
  const state = Cell(spec.expanded);

  const readState = () => {
    return 'expanded: ' + state.get();
  };

  return nuState({
    isExpanded() { return state.get() === true; },
    isCollapsed() { return state.get() === false; },
    setCollapsed: Fun.curry(state.set, false),
    setExpanded: Fun.curry(state.set, true),
    readState
  });
};

export {
  init
};
