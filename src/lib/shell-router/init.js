import { refreshRouter } from './store';

(function () {
  window.addEventListener('popstate', () => {
    refreshRouter(location.pathname);
  });
});
