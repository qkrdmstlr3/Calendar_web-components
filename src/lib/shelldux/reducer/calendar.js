// util
import { getPrevDate, getNextDate } from 'util/calendar';

import * as actions from '../action/calendar';

const todayDate = new Date();
const initialState = {
  todayDay: todayDate.getDate(),
  todayMonth: todayDate.getMonth() + 1,
  todayYear: todayDate.getFullYear(),
  calendarMonth: todayDate.getMonth() + 1,
  calendarYear: todayDate.getFullYear(),

  tab: 'start',
  startTab: '',
  endTab: '',
};

const calendarReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.GET_PREV_CALENDAR: {
      const [year, month] = getPrevDate(
        state.calendarYear,
        state.calendarMonth
      );
      return {
        ...state,
        calendarYear: year,
        calendarMonth: month,
      };
    }
    case actions.GET_NEXT_CALENDAR: {
      const [year, month] = getNextDate(
        state.calendarYear,
        state.calendarMonth
      );
      return {
        ...state,
        calendarYear: year,
        calendarMonth: month,
      };
    }
    case actions.CHOOSE_DATE: {
      return {
        ...state,
        [action.tab]: action.date,
      };
    }
    case actions.CHOOSE_START_TAB: {
      return {
        ...state,
        tab: 'start',
      };
    }
    case actions.CHOOSE_END_TAB: {
      return {
        ...state,
        tab: 'end',
      };
    }
    default: {
      return state;
    }
  }
};

export default calendarReducer;
