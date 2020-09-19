export function querySelector(element, dom = document) {
  return dom.querySelector(element);
}

export function querySelectorAll(element, dom = document) {
  return dom.querySelectorAll(element);
}

export function createElement(dom) {
  return document.createElement(dom);
}

export function addClass(dom, className) {
  dom.classList.add(className);
}

export function initClass(dom) {
  dom.className = '';
}

export function addId(dom, idName) {
  dom.id = idName;
}

export function setText(dom, text) {
  dom.innerText = text;
}
