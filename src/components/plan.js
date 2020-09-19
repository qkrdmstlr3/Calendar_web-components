// lib
import shellHTML from 'lib/shellHTML';
import store from 'lib/shelldux/store';

// Style
import styleSheet from 'style/plan.scss';

class Plan extends shellHTML(HTMLElement) {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.invalidate();
  }

  connectedCallback() {
    this.reRender = () => this.invalidate();
    store.observe(this, this.reRender);

    this.shadowRoot.addEventListener('click', (event) => {
      this.handleTabClick(event);
    });
  }

  render() {
    return [
      `
        <div>plan</div>
      `,
      styleSheet,
    ];
  }
}

customElements.define('plan-list', Plan);
