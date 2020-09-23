import * as actions from '../action/plan';

const initialState = {
  planList: [],
};

const planReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.MAKE_PLAN: {
      const planList = state.planList.concat();
      const newPlan = {
        startDay: action.startDay,
        endDay: action.endDay,
        plan: action.plan,
      };
      planList.push(newPlan);

      return {
        ...state,
        planList: planList,
      };
    }
    default: {
      return state;
    }
  }
};

export default planReducer;
