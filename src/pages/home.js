// lib
import Shellact from 'lib/shellact';

// shelldux
import 'lib/shelldux/store';

class HomeContainer extends Shellact {
  render() {
    return [`<div></div>`, null];
  }
}

customElements.define('home-container', HomeContainer);
