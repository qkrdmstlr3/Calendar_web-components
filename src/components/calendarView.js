// lib
import Shellact from 'lib/shellact';
import { getNextCalendar, getPrevCalendar } from 'lib/shelldux/action/calendar';

// components
import './calendar';

// Style
import styleSheet from 'style/calendarView.scss';

class CalendarView extends Shellact {
  connectedCallback() {
    this.shadowRoot.addEventListener('click', (event) => {
      this.handleCalendar(event);
    });
  }

  handleCalendar(event) {
    const button = event.target.closest('button');

    if (!button) {
      return;
    }

    if (button.classList.contains('left__button')) {
      this.handleLeftBtn();
      return;
    }
    if (button.classList.contains('right__button')) {
      this.handleRightBtn();
      return;
    }
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
