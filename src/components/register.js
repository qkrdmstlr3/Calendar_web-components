// lib
import shellHTML from 'lib/shellHTML';
import store from 'lib/shelldux/store';
import { chooseStartTab, chooseEndTab } from 'lib/shelldux/action/register';

// Style
import styleSheet from 'style/register.scss';

class Register extends shellHTML(HTMLElement) {
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

  handleTabClick(event) {
    if (event.target.classList.contains('start__day')) {
      chooseStartTab();
      return;
    }
    if (event.target.classList.contains('end__day')) {
      chooseEndTab();
      return;
    }
  }

  render() {
    const { tab, startTab, endTab } = store.getState();

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
