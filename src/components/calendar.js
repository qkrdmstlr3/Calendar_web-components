// lib
import { html } from 'lit-html';
import LitHTML from 'lib/litHTML';
import store from 'lib/shelldux/store';

// util
import { makeCalendar, getNextDate } from 'util/calendar';

class Calendar extends LitHTML(HTMLElement) {
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
      return html`${style} ${makeCalendar(year, month)}`;
    }
    return html` ${style} ${makeCalendar(calendarYear, calendarMonth)} `;
  }
}
const style = html`
  <style>
    li {
      list-style: none;
      width:
    }

    h2 {
      display: block;
      width: 100%:
      margin: 15px 0;
      text-align: center;
      font-weight: bold;
    }

    div {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    span {
      display: inline-block;
      width: 48px;
      height: 48px;
      display: flex;
      justify-content: center;
      align-items: center;
      box-sizing: border-box;

      border-radius: 24px;
      font-weight: bold;
      font-size: 14px;
    }
    .header__calendar-restday {
      cursor: pointer;
    }
    .header__calendar-restday:hover {
      border: 1px solid black;
    }
    .header__calendar-oldday {
      opacity: 0.5;
    }
  </style>
`;

customElements.define('calendar-page', Calendar);
