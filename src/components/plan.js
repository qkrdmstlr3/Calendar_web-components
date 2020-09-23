// lib
import Shellact from 'lib/shellact';

// shelldux
import { selector, observe } from 'lib/shelldux';

// Style
import styleSheet from 'style/plan.scss';

class Plan extends Shellact {
  connectedCallback() {
    observe('plan', this, this.rerender);
  }

  render() {
    const { planList } = selector((state) => state.plan);

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
