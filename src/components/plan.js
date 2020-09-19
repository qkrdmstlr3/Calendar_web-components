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
        <ul>
          <li>
            <span>2020년 --월 --일</span>
            <span>2020년 --월 --일</span>
            <span>러시아 여행</span>
          </li>
          <li>
            <span>2020년 --월 --일</span>
            <span>2020년 --월 --일</span>
            <span>뭐시기뭐시기 프로젝트</span>
          </li>
        </ul>
      `,
      styleSheet,
    ];
  }
}

customElements.define('plan-list', Plan);
