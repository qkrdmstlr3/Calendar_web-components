// lib
import Shellact from 'lib/shellact';

// shelldux
import { selector, observe, disObserve } from 'lib/shelldux';

// Style
import styleSheet from 'style/plan.scss';

class Plan extends Shellact {
  connectedCallback() {
    observe('plan', this, this.rerender);
  }

  disconnectedCallback() {
    disObserve('plan', this);
  }

  render() {
    const { planList } = selector((state) => state.plan);

    return [
      `
        <ul>
          ${planList.reduce((acc, cur) => {
            return (acc += `
              <li>
                <span>${cur.startDay}</span>
                <span>${cur.endDay}</span>
                <span>${cur.plan}</span>
              </li>
              `);
          }, '')}
        </ul>
      `,
      styleSheet,
    ];
  }
}

customElements.define('plan-list', Plan);
