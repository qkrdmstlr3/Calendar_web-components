// lib
import shellHTML from 'lib/shellHTML';
import store from 'lib/shelldux/store';
import { chooseDate } from 'lib/shelldux/action/calendar';

// util
import { compareDate, makeCalendar, getNextDate } from 'util/calendar';

// Style
import styleSheet from 'style/calendar.scss';

class Calendar extends shellHTML(HTMLElement) {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.invalidate();
  }

  connectedCallback() {
    this.reRender = () => this.invalidate();
    store.observe(this, this.reRender);

    this.shadowRoot.addEventListener('click', (event) => {
      this.calendarEventControl(event);
    });
  }

  static get observedAttributes() {
    return ['position'];
  }

  attributeChangedCallback(attrName, oldValue, newValue) {
    if (oldValue !== newValue) {
      this.position = newValue;
    }
  }

  calendarEventControl(event) {
    event.stopPropagation();
    if (event.target.classList.contains('calendar-restday')) {
      this.handleDayControl(event.target);
    }
  }

  handleDayControl(day) {
    const { tab } = store.getState();
    if (tab === 'start') {
      this.ifTabIsStart(day);
      return;
    }
    this.ifTabIsEnd(day);
  }

  ifTabIsStart(day) {
    const { startTab, endTab } = store.getState();
    if (!startTab) {
      if (!endTab) {
        //시작 종료 둘다 없을 때
        chooseDate(day.id, 'startTab');
      } else {
        // 종료만 있을 때
        if (compareDate(day.id, endTab)) {
          //종료가 시작보다 클 때
          chooseDate(day.id, 'startTab');
          chooseDate('', 'endTab');
        } else {
          chooseDate(day.id, 'startTab');
        }
      }
    } else {
      if (!endTab) {
        //시작만 있을 때
        chooseDate(day.id, 'startTab');
      } else {
        if (compareDate(endTab, day.id)) {
          // 종료보다 시작이 작을 때
          chooseDate(day.id, 'startTab');
        } else {
          chooseDate('', 'endTab');
          chooseDate(day.id, 'startTab');
        }
      }
    }
  }

  ifTabIsEnd(day) {
    const { startTab, endTab } = store.getState();
    if (!startTab) {
      if (!endTab) {
        //시작 종료 둘다 없을 때
        chooseDate(day.id, 'endTab');
        return;
      } else {
        // 종료만 있을 때
        chooseDate(day.id, 'endTab');
      }
    } else {
      if (!endTab) {
        //시작만 있을 때
        if (compareDate(startTab, day.id)) {
          chooseDate(day.id, 'startTab');
          return;
        } else {
          chooseDate(day.id, 'endTab');
        }
      } else {
        if (compareDate(day.id, startTab)) {
          chooseDate(day.id, 'endTab');
          return;
        }
        chooseDate('', 'endTab');
        chooseDate(day.id, 'startTab');
      }
    }
  }

  render() {
    const { calendarYear, calendarMonth } = store.getState();

    if (this.position === 'right') {
      const [year, month] = getNextDate(calendarYear, calendarMonth);

      return [`${makeCalendar(year, month).outerHTML}`, styleSheet];
    }

    return [
      ` ${makeCalendar(calendarYear, calendarMonth).outerHTML} `,
      styleSheet,
    ];
  }
}

customElements.define('calendar-page', Calendar);
