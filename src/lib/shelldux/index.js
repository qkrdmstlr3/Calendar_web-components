import reducer from './reducer';

class Shelldux {
  constructor() {
    this.reducers = null;
    this.states = null;
  }

  dispatch(result) {
    Object.entries(this.reducers).forEach(([key, reducer]) => {
      const state = reducer(this.states[key], result);
      if (state !== reducer(undefined, '')) {
        this.states[key] = state;
      }
    });
  }
}

const shelldux = new Shelldux();
reducer();

export function combineReducers(reducers) {
  shelldux.reducers = reducers;
  const states = {};

  Object.entries(reducers).forEach(([key, reducer]) => {
    states[key] = reducer(undefined, '');
  });
  shelldux.states = states;
}

export function selector(fn) {
  return fn(shelldux.states);
}

export function dispatch(result) {
  shelldux.dispatch(result);
}

export default shelldux;
