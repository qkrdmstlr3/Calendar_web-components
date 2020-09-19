// lib
import shellHTML from 'lib/shellHTML';
import store from 'lib/shelldux/store';

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
  }

  render() {
    return [
      `
        <form>
          <div class="start__day">
            <span>시작일</span>
          </div>
          <div class="end__day">
            <span>종료일</span>
          </div>
          <input type="text" placeholder="일정을 입력해주세요" minlength="2" name="plan"/>
        </form>
      `,
      styleSheet,
    ];
  }
}

customElements.define('register-form', Register);
