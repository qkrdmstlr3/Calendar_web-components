// lib
import shellHTML from 'lib/shellHTML';
import { getNextCalendar, getPrevCalendar } from 'lib/shelldux/action';

// util
import { _sqs } from 'util/module';

// components
import './calendar';

// Style
import styleSheet from 'style/calendarView.scss';

class CalendarView extends shellHTML(HTMLElement) {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.invalidate(true);
  }

  connectedCallback() {
    _sqs
      .call(this, '.left__button')
      .addEventListener('click', this.handleLeftBtn);
    _sqs
      .call(this, '.right__button')
      .addEventListener('click', this.handleRightBtn);
  }

  handleLeftBtn() {
    getPrevCalendar();
  }

  handleRightBtn() {
    getNextCalendar();
  }

  render() {
    return [
      `
      <section>
        <button class="left__button">
          <font-awesome icon="fas fa-chevron-left"><</font-awesome>
        </button>
        <ul>
          <calendar-page position="left"></calendar-page>
          <calendar-page position="right"></calendar-page>
        </ul>
        <button class="right__button">
          <fa-i class="fas fa-chevron-left">></fa-i>
        </button>
      </section>
    `,
      styleSheet,
    ];
  }
}

customElements.define('calendar-view', CalendarView);
