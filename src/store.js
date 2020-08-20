import { createStore, createEvent } from 'effector';

const authorization = createEvent('authorization');
const loadUserIcon = createEvent('load user icon');

const store = createStore({authorization: false, img: null})
    .on(authorization, (state, payload) => ({...state, authorization: payload}))
    .on(loadUserIcon, (state, payload) => ({...state, img: payload}));

store.watch((state) => console.log('текущее состояние store: ',state));


const addTerminal = createEvent('add terminal');
const deleteTerminal = createEvent('delete terminal');

const terminalStore = createStore([])
    .on(addTerminal, (state, payload) => {
        return [
            ...state,
            payload
        ]
    })
    .on(deleteTerminal, (state, payload) => {
        return state.filter((item, idx) => idx !== payload)
    })

export { 
    store, 
    authorization,
    loadUserIcon,
    terminalStore,
    addTerminal,
    deleteTerminal
};