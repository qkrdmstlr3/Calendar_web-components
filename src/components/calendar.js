// lib
import Shellact from 'lib/shellact';

// shelldux
import { selector, dispatch, observe } from 'lib/shelldux';
import { handleChooseDate } from 'lib/shelldux/action';

// util
import { compareDate, makeCalendar, getNextDate } from 'util/calendar';
import { initClass, addClass, querySelectorAll } from 'util/module';

// Style
import styleSheet from 'style/calendar.scss';

class Calendar extends Shellact {
  connectedCallback() {
    const rerender = () => {
      this.rerender();
      this.drawColorToCalendar();
    };
    observe('calendar', this, rerender);

    this.shadowRoot.addEventListener('click', (event) => {
      this.calendarEventControl(event);
    });
  }

  static get observedAttributes() {
    return ['position'];
  }

  attributeChangedCallback(attrName, oldValue, newValue) {
    if (oldValue !== newValue) {
      this.setState({
        position: newValue,
      });
    }
  }

  calendarEventControl(event) {
    event.stopPropagation();
    if (event.target.classList.contains('calendar-restday')) {
      this.handleDayControl(event.target);
    }
  }

  handleDayControl(day) {
    const { tab, startTab, endTab } = selector((state) => state.calendar);

    if (tab === 'start') {
      this.ifTabIsStart(day, startTab, endTab);
      this.drawColorToCalendar();
      return;
    }
    this.ifTabIsEnd(day, startTab, endTab);
    this.drawColorToCalendar();
  }

  ifTabIsStart(day, startTab, endTab) {
    dispatch(handleChooseDate(day.id, 'startTab'));
    if (!startTab && endTab && compareDate(day.id, endTab)) {
      dispatch(handleChooseDate('', 'endTab'));
      return;
    }
    if (endTab && !compareDate(endTab, day.id)) {
      dispatch(handleChooseDate('', 'endTab'));
    }
  }

  ifTabIsEnd(day, startTab, endTab) {
    if (!startTab) {
      dispatch(handleChooseDate(day.id, 'endTab'));
      return;
    }
    if (!endTab) {
      if (compareDate(startTab, day.id)) {
        dispatch(handleChooseDate(day.id, 'startTab'));
        return;
      }
      dispatch(handleChooseDate(day.id, 'endTab'));
      return;
    }
    if (compareDate(day.id, startTab)) {
      dispatch(handleChooseDate(day.id, 'endTab'));
      return;
    }
    dispatch(handleChooseDate('', 'endTab'));
    dispatch(handleChooseDate(day.id, 'startTab'));
  }

  drawColorToCalendar() {
    const { startTab, endTab } = selector((state) => state.calendar);

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
    const { calendarYear, calendarMonth } = selector((state) => state.calendar);

    if (this.state.position === 'right') {
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
