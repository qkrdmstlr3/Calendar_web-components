export function _sqs(element) {
  return this.shadowRoot.querySelector(element);
}

export function _sqsa(element) {
  return this.shadowRoot.querySelectorAll(element);
}

export function createElement(dom) {
  return document.createElement(dom);
}

export function addClass(dom, className) {
  dom.classList.add(className);
}

export function addId(dom, idName) {
  dom.id = idName;
}

export function setText(dom, text) {
  dom.innerText = text;
}
