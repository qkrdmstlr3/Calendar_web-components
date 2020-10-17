import { refreshRouter } from './store';

(function () {
  console.log(1);
  window.addEventListener('popstate', () => {
    refreshRouter(location.pathname);
  });
})();
