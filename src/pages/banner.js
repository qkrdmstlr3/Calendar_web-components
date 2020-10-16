// lib
import Shellact from 'lib/shellact';

class Banner extends Shellact {
  render() {
    return [`<div></div>`, null];
  }
}

customElements.define('banner-page', Banner);
