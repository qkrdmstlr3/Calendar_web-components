// Dependencies
import { addRouter, removeRouter } from './store';

class Router extends HTMLElement {
  connectedCallback() {
    this.renderComponent();
    addRouter(this);
  }

  disconnectedCallback() {
    removeRouter(this);
  }

  renderComponent(nextPath) {
    this.routes = this.innerHTML.split('</routes>');
    this.routes.pop();
    this.paths = this.innerHTML.match(/(?<=path=").+(?=" )/g);
    this.components = this.innerHTML.match(/(?<=component=").+(?=")/g);

    if (nextPath) {
      this.existNextPath(nextPath);
      return;
    }

    this.notExistNextPath();
  }

  existNextPath(nextPath) {
    const pathIndex = this.paths.findIndex((path) => nextPath === path);
    if (pathIndex === -1) {
      return;
    }

    history.pushState(null, null, this.paths[pathIndex]);
    this.setInnerHTML(this.components[pathIndex]);
  }

  notExistNextPath() {
    const currentPath = location.pathname;
    const pathIndex = this.paths.findIndex((path) => currentPath === path);
    const exactRouteIndex = this.routes.findIndex((route) =>
      route.includes('exact')
    );

    if (pathIndex !== -1) {
      this.setInnerHTML(this.components[pathIndex]);
      return;
    }

    history.pushState(null, null, this.paths[exactRouteIndex]);
    this.setInnerHTML(this.components[exactRouteIndex]);
  }

  setInnerHTML(componentName) {
    if (!this.lastChild.length) {
      this.removeChild(this.lastChild);
    }

    this.innerHTML = `${this.innerHTML}<${componentName}></${componentName}>`;
  }
}

customElements.define('router-router', Router);
