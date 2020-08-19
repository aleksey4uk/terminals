import { createStore, createEvent } from 'effector';

const authorization = createEvent('authorization');

const store = createStore(false);
    store.on(authorization, (state) => true);

store.watch(console.log)

export { store, authorization };