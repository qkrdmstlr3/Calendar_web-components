// shelldux
import store from '../store';

export const chooseStartTab = () => {
  const state = store.getState();
  store.setState({
    ...state,
    tab: 'start',
  });
};

export const chooseEndTab = () => {
  const state = store.getState();
  store.setState({
    ...state,
    tab: 'end',
  });
};
