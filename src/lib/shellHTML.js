function render([html, css], dom) {
  dom.innerHTML = html;

  if (css) {
    const style = document.createElement('style');
    style.appendChild(document.createTextNode(css));
    dom.appendChild(style);
  }
}

export default (base) =>
  class extends base {
    render() {}

    async invalidate(instant) {
      if (!this.needsRender) {
        if (!instant) {
          // 여길 거치면 모았다가 한번에 렌더링 됨
          this.needsRender = true;
          await 0;
          this.needsRender = false;
        }
        render(this.render(), this.shadowRoot);
      }
    }
  };