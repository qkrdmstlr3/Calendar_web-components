// lib
import Shellact from 'lib/shellact';
import store from 'lib/shelldux/store';

// Style
import styleSheet from 'style/plan.scss';

class Plan extends Shellact {
  connectedCallback() {
    this.reRender = () => this.rerender();
    store.observe(this, this.reRender);
  }

  render() {
    const { planList } = store.getState();

    let plans = '';

    planList.forEach((plan) => {
      plans += `
        <li>
          <span>${plan.startDay}</span>
          <span>${plan.endDay}</span>
          <span>${plan.plan}</span>
        </li>
      `;
    });

    return [
      `
        <ul>
          ${plans}
        </ul>
      `,
      styleSheet,
    ];
  }
}

customElements.define('plan-list', Plan);
