import reducer from './reducer';

class Shelldux {
  constructor() {
    this.reducers = null;
    this.states = null;
    this.observingList = null;
  }

  dispatch(result) {
    Object.entries(this.reducers).forEach(([key, reducer]) => {
      const state = reducer(this.states[key], result);
      if (state !== reducer(undefined, '')) {
        this.states[key] = state;
        this.observingList[key].forEach(([document, fn]) => {
          fn.call(document);
        });
      }
    });
  }

  observe(key, component, fn) {
    this.observingList[key].push([component, fn]);
  }
}

let shelldux = null;

export function combineReducers(reducers) {
  shelldux.reducers = reducers;
  const states = {};
  const observingList = {};

  Object.entries(reducers).forEach(([key, reducer]) => {
    states[key] = reducer(undefined, '');
    observingList[key] = [];
  });
  shelldux.states = states;
  shelldux.observingList = observingList;
}

export function selector(fn) {
  return fn(shelldux.states);
}

export function dispatch(result) {
  shelldux.dispatch(result);
}

export function observe(key, component, fn) {
  shelldux.observe(key, component, fn);
}

export function createStore(reducer) {
  shelldux = new Shelldux();
  reducer();
}

export default shelldux;
