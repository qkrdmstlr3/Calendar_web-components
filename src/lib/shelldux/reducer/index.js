// Dependencies
import { combineReducers } from '../index';

// Reducer
import calendarReducer from './calendar';
import planReducer from './plan';

const reducer = () =>
  combineReducers({
    calendar: calendarReducer,
    plan: planReducer,
  });

export default reducer;
