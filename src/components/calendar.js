// lib
import Shellact from 'lib/shellact';
import store from 'lib/shelldux/store';
import { chooseDate } from 'lib/shelldux/action/calendar';

// util
import { compareDate, makeCalendar, getNextDate } from 'util/calendar';
import { initClass, addClass, querySelectorAll } from 'util/module';

// Style
import styleSheet from 'style/calendar.scss';

class Calendar extends Shellact {
  connectedCallback() {
    this.reRender = () => {
      this.rerender();
      this.drawColorToCalendar();
    };
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
    const { tab, startTab, endTab } = store.getState();

    if (tab === 'start') {
      this.ifTabIsStart(day, startTab, endTab);
      return;
    }
    this.ifTabIsEnd(day, startTab, endTab);
  }

  ifTabIsStart(day, startTab, endTab) {
    chooseDate(day.id, 'startTab');
    if (!startTab && endTab && compareDate(day.id, endTab)) {
      chooseDate('', 'endTab');
      return;
    }
    if (endTab && !compareDate(endTab, day.id)) {
      chooseDate('', 'endTab');
    }
  }

  ifTabIsEnd(day, startTab, endTab) {
    if (!startTab) {
      chooseDate(day.id, 'endTab');
      return;
    }
    if (!endTab) {
      if (compareDate(startTab, day.id)) {
        chooseDate(day.id, 'startTab');
        return;
      }
      chooseDate(day.id, 'endTab');
      return;
    }
    if (compareDate(day.id, startTab)) {
      chooseDate(day.id, 'endTab');
      return;
    }
    chooseDate('', 'endTab');
    chooseDate(day.id, 'startTab');
  }

  drawColorToCalendar() {
    const { startTab, endTab } = store.getState();

    const days = querySelectorAll('.calendar-restday', this.shadowRoot);
    days.forEach((day) => {
      initClass(day);
      addClass(day, 'calendar-restday');

      if (startTab === day.id || endTab === day.id) {
        addClass(day, 'color__black');
        return;
      }

      if (
        startTab &&
        endTab &&
        compareDate(day.id, startTab) &&
        compareDate(endTab, day.id)
      ) {
        addClass(day, 'color__gray');
        return;
      }

      addClass(day, 'color__main');
    });
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
