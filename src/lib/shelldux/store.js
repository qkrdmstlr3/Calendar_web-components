class Store {
  constructor(state) {
    this.state = state;
    this.observingObject = [];
  }

  observe(object, fn) {
    this.observingObject.push([object, fn]);
  }

  setState(state) {
    this.state = state;
    this.observingObject.forEach(([object, fn]) => {
      fn.call(object);
    });
  }

  getState() {
    return this.state;
  }
}

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

  planList: [],
};

const store = new Store(initialState);
export default store;
