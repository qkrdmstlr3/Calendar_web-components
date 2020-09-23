import * as calendars from './calendar';
import * as plans from './plan';

export function handleGetPrevCalendar() {
  return {
    type: calendars.GET_PREV_CALENDAR,
  };
}

export function handleGetNextCalendar() {
  return {
    type: calendars.GET_NEXT_CALENDAR,
  };
}

export function handleChooseDate(date, tab) {
  return {
    type: calendars.CHOOSE_DATE,
    tab,
    date,
  };
}

export function handleChooseStartTab() {
  return {
    type: calendars.CHOOSE_START_TAB,
  };
}

export function handleChooseEndTab() {
  return {
    type: calendars.CHOOSE_END_TAB,
  };
}

export function handleMakePlan(startDay, endDay, plan) {
  return {
    type: plans.MAKE_PLAN,
    startDay,
    endDay,
    plan,
  };
}
