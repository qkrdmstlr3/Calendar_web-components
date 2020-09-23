function renderOutside([html, css], dom) {
  dom.innerHTML = html;

  if (css) {
    const style = document.createElement('style');
    style.appendChild(document.createTextNode(css));
    dom.appendChild(style);
  }
}

class Shellact extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.rerender();
    this.state = {};
  }

  setState(state) {
    this.state = state;
    this.rerender();
  }

  render() {}

  rerender() {
    renderOutside(this.render(), this.shadowRoot);
  }
}

export default Shellact;
