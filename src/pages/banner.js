// lib
import Shellact from 'lib/shellact';
import 'lib/shell-router/link';

// style
import stylesheet from 'style/pages/banner.scss';

class Banner extends Shellact {
  render() {
    return [
      `
      <div>
        <h1>BANNER</h1>
        <router-link to="/calendar">메인으로 이동</router-link>
      </div>
    `,
      stylesheet,
    ];
  }
}

customElements.define('banner-page', Banner);
