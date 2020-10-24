import store from "./store";

import { addBug, deleteBug, resolveBug } from "./actions";

const unsubscribe = store.subscribe(() => {
  console.log("Store changed", store.getState());
});

store.dispatch(addBug("a nice bug"));

store.dispatch(resolveBug(1));

unsubscribe();

store.dispatch(deleteBug(1));

console.log(store.getState());
