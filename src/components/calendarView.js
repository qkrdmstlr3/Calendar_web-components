// lib
import litHTML from 'lib/litHTML';
import { html } from 'lit-html';

class CalendarView extends litHTML(HTMLElement) {
  constructor() {
    super();

    this.attachShadow({ mode: 'open' });
    this.invalidate();
  }

  render() {
    return html` <div>calendar</div> `;
  }
}

customElements.define('calendar-view', CalendarView);
