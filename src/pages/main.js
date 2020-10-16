// lib
import Shellact from 'lib/shellact';

class Main extends Shellact {
  render() {
    return [`<div></div>`, null];
  }
}

customElements.define('main-page', Main);
