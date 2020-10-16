import { rerenderRouters } from './store';

(function () {
  window.addEventListener('popstate', () => {
    rerenderRouters(location.pathname);
  });
})();
