// lib
import Shellact from 'lib/shellact';
import 'lib/shell-router/init';
import 'lib/shell-router/router';

// shelldux
import 'lib/shelldux/store';

// pages
import './banner';
import './main';

class HomeContainer extends Shellact {
  render() {
    return [`<div></div>`, null];
  }
}

customElements.define('home-container', HomeContainer);
