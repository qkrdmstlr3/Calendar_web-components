// lib
import litHTML from 'lib/litHTML';
import { html } from 'lit-html';

// components
import './calendar';

class CalendarView extends litHTML(HTMLElement) {
  constructor() {
    super();

    this.attachShadow({ mode: 'open' });
    this.invalidate();
  }

  render() {
    return html`
      ${style}
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
    `;
  }
}

const style = html`
  <style>
    section {
      height: 60%;
      display: flex;
      justify-content: space-around;
      align-items: center;
      padding: 0 60px;
    }
    button {
      width: 60px;
      height: 60px;
      color: white;
      background-color: #dccab3;
      border: none;
      border-radius: 20px;
      font-size: 35px;
      font-weight: bold;
      cursor: pointer;
      outline: none;
    }
    button:hover {
      background-color: #ffd19b;
    }
    ul {
      width: 60%;
      height: 80%;
      padding: 0;
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
    }
  </style>
`;

customElements.define('calendar-view', CalendarView);
