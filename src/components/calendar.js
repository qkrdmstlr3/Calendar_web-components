// lib
import { html } from 'lit-html';
import LitHTML from 'lib/litHTML';

class Calendar extends LitHTML(HTMLElement) {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.invalidate();
  }

  render() {
    return html` <div>calendar</div> `;
  }
}

customElements.define('calendar-page', Calendar);
