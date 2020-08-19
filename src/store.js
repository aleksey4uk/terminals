import { createStore, createEvent } from 'effector';

const increment = createEvent('incrrement');

const store = createStore(0);
    store.on(increment, (state) => state + 1);

store.watch(console.log)

export { store, increment };