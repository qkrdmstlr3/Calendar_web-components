// Dependencies
import { rerenderRouters } from './store';

class Link extends HTMLElement {
  connectedCallback() {
    this.renderComponent();
    this.addEventListener('click', (event) => {
      this.handleClick(event);
    });
  }

  handleClick(event) {
    event.preventDefault();
    rerenderRouters(this.nextPath);
  }

  static get observedAttributes() {
    return ['to'];
  }

  attributeChangedCallback(attrName, oldValue, newValue) {
    if (attrName === 'to') {
      this.nextPath = newValue;
    }
  }

  renderComponent() {
    this.innerHTML = `<a href="${this.nextPath}">${this.innerHTML}</a>`;
  }
}

customElements.define('router-link', Link);
