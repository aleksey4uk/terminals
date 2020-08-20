import { createStore, createEvent } from 'effector';

const authorization = createEvent('authorization');
const loadUserIcon = createEvent('load user icon');

const store = createStore({authorization: false, img: null});
    store.on(authorization, (state, payload) => ({...state, authorization: payload}))
    store.on(loadUserIcon, (state, payload) => ({...state, img: payload}));

store.watch((state) => console.log('текущее состояние store: ',state));
    
export { 
    store, 
    authorization,
    loadUserIcon 
};