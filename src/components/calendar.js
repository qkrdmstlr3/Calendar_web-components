// lib
import shellHTML from 'lib/shellHTML';
import store from 'lib/shelldux/store';

// util
import { makeCalendar, getNextDate } from 'util/calendar';

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
  }

  static get observedAttributes() {
    return ['position'];
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    if (oldVal !== newVal) {
      this.position = newVal;
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
