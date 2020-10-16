const routerStore = [];

export function addRouter(router) {
  routerStore.push(router);
}

export function removeRouter(router) {
  const index = routerStore.findIndex((r) => r === router);
  routerStore.splice(index, 1);
}

export function rerenderRouters(nextPath) {
  routerStore.forEach((router) => {
    router.renderComponent(nextPath);
  });
}

export function moveToNextPath(nextPath) {
  rerenderRouters(nextPath);
}
