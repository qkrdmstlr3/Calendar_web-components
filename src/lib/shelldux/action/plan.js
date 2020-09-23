export const MAKE_PLAN = 'MAKE_PLAN';

export const makePlan = (plan) => {
  const state = store.getState();
  const { startTab, endTab } = state;

  if (!startTab || !endTab) {
    alert('날짜를 모두 입력해주십시오');
    return;
  }

  const planList = state.planList;
  planList.push({
    startDay: startTab,
    endDay: endTab,
    plan,
  });

  store.setState({
    ...state,

    startTab: '',
    endTab: '',
    planList,
  });
};
