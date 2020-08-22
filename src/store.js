import { createStore, createEvent } from 'effector';
import { useStore } from 'effector-react';

//store authorization
const authorization = createEvent('authorization');
const loadUserIcon = createEvent('load user icon');

const store = createStore({authorization: false, img: null})
    .on(authorization, (state, payload) => ({...state, authorization: payload}))
    .on(loadUserIcon, (state, payload) => ({...state, img: payload}));

store.watch((state) => console.log('текущее состояние store: ',state));


//store terminals////////////////////////////////////
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



////////////////////////////////////////////
const storeLoad = createEvent('load store');
const storeClientOld = createStore([])
    .on(storeLoad, (state, payload) => payload);

//////////////////////////////////////////
const clientData = [
        {
            id: 0,
            name: 'Вася',
            averageСheck: 340,
            allPurchases: 2,
            total: 50
        },
        {
            id: 240,
            name: 'Петя',
            averageСheck: 500,
            allPurchases: 2,
            total: 1000
        },
        {
            id: 30,
            name: 'Дима',
            averageСheck: 600,
            allPurchases: 3,
            total:3000
        },
        {
            id: 80,
            name: 'Вася',
            averageСheck: 120,
            allPurchases: 2,
            total: 240
        },
        {
            id: 43,
            name: 'Алексей',
            averageСheck: 100,
            allPurchases: 4,
            total: 400
        },
        {
            id: 20,
            name: 'Владислав',
            averageСheck: 80,
            allPurchases: 6,
            total: 600
        },
        {
            id: 4,
            name: 'Владимир',
            averageСheck: 200,
            allPurchases: 6,
            total: 1200
        },
        {
            id: 17,
            name: 'Николай',
            averageСheck: 400,
            allPurchases: 4,
            total: 1200
        },
        {
            id: 18,
            name: 'Всевлад',
            averageСheck: 1000,
            allPurchases: 10,
            total: 10000
        },
        {
            id: 19,
            name: 'Святогор',
            averageСheck: 500,
            allPurchases: 2,
            total: 1000
        },
        {
            id: 20,
            name: 'Петя',
            averageСheck: 500,
            allPurchases: 3,
            total: 1500
        },
        {
            id: 21,
            name: 'Инокентий',
            averageСheck: 700,
            allPurchases: 3,
            total: 2100
        },
        {
            id: 99,
            name: 'Марат',
            averageСheck: 300,
            allPurchases: 2,
            total: 600
        },
        {
            id: 777,
            name: 'Максим',
            averageСheck: 10000,
            allPurchases: 10,
            total: 10000
        },
        {
            id: 888,
            name: 'Максимилиан',
            averageСheck: 100,
            allPurchases: 1,
            total: 100
        }
]

const tempClientData = [];
const sortClientTable = createEvent('sort');
const filterClientTable = createEvent('filter');
const clearFilterTable = createEvent('clear');

const storeClient = createStore({clientData, tempClientData})
    .on(sortClientTable, (state, payload) => {
        const {clientData} = state;

        let oldArr = clientData.slice();
        let newElement = clientData.sort((a, b) => a[payload]-b[payload])

        if (oldArr[0].id === newElement[0].id) {
            newElement = oldArr.sort((a, b) => b[payload] - a[payload]);
        }

        return {...state, clientData: [...newElement]}
    })
    .on(filterClientTable, (state, payload) => {
        let newArr = state.filter(item => item.name === payload)
        return newArr;
    })
    .on(clearFilterTable, (state, payload)=> {
        
    })



export { 
    store,
    filterClientTable, 
    clearFilterTable,
    storeClient,
    sortClientTable,
    authorization,
    loadUserIcon,
    terminalStore,
    addTerminal,
    deleteTerminal,
    storeClientOld
};