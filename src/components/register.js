// lib
import Shellact from 'lib/shellact';

// shelldux
import { selector, dispatch, observe } from 'lib/shelldux';
import {
  handleChooseStartTab,
  handleChooseEndTab,
  handleMakePlan,
} from 'lib/shelldux/action';

// Util
import { querySelector } from 'util/module';

// Style
import styleSheet from 'style/register.scss';

class Register extends Shellact {
  connectedCallback() {
    observe('calendar', this, this.rerender);
    this.shadowRoot.addEventListener('click', (event) => {
      this.handleTabClick(event);
    });
    this.shadowRoot.addEventListener('submit', (event) => {
      this.handleMakePlan(event);
    });
  }

  handleTabClick(event) {
    if (event.target.closest('.start__day')) {
      dispatch(handleChooseStartTab());
      return;
    }
    if (event.target.closest('.end__day')) {
      dispatch(handleChooseEndTab());
      return;
    }
  }

  handleMakePlan(event) {
    event.preventDefault();
    if (event.target.closest('form')) {
      const plan = querySelector('input[name="plan"]', this.shadowRoot).value;
      const { startTab, endTab } = selector((state) => state.calendar);

      dispatch(handleMakePlan(startTab, endTab, plan));
      return;
    }
  }

  render() {
    const { tab, startTab, endTab } = selector((state) => state.calendar);

    return [
      `
        <form>
          <div class="start__day ${tab === 'start' ? 'selected' : ''}">
            <span>시작일 / ${startTab}</span>
          </div>
          <div class="end__day ${tab === 'end' ? 'selected' : ''}">
            <span>종료일 / ${endTab}</span>
          </div>
          <input type="text" placeholder="일정을 입력해주세요" minlength="2" name="plan"/>
        </form>
      `,
      styleSheet,
    ];
  }
}

customElements.define('register-form', Register);
