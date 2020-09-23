import * as actions from '../action/plan';

const initialState = {
  planList: [],
};

const planReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.MAKE_PLAN: {
      const newPlan = {
        startDay: action.startDay,
        endDay: action.endDay,
        plan: action.plan,
      };
      return {
        ...state,
        planList: state.planList.concat().push(newPlan),
      };
    }
    default: {
      return state;
    }
  }
};

export default planReducer;
