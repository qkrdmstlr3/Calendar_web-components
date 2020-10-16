// lib
import Shellact from 'lib/shellact';

// components
import 'components/calendarView';
import 'components/register';
import 'components/plan';

class Main extends Shellact {
  render() {
    return [
      `
      <register-form></register-form>
      <calendar-view></calendar-view>
      <plan-list></plan-list>
      `,
      null,
    ];
  }
}

customElements.define('main-page', Main);
