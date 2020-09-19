// shelldux
import store from '../store';

// util
import { getPrevDate, getNextDate } from 'util/calendar';

export const getPrevCalendar = () => {
  const state = store.getState();

  const [year, month] = getPrevDate(state.calendarYear, state.calendarMonth);
  state.calendarYear = year;
  state.calendarMonth = month;

  store.setState(state);
};

export const getNextCalendar = () => {
  const state = store.getState();

  const [year, month] = getNextDate(state.calendarYear, state.calendarMonth);
  state.calendarYear = year;
  state.calendarMonth = month;

  store.setState(state);
};

export const chooseDate = (date, tab) => {
  const state = store.getState();
  store.setState({
    ...state,
    [tab]: date,
  });
};
