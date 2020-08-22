import React from 'react';
import { useStore } from 'effector-react';
import { storeClient, sortClientTable } from '../../store';
import { Table } from '../table';

const columsData = [
    {
        title: 'ID Покупателя'
    },
    {
        title: 'Имя покупателя',
        filter: () => {}
    },
    {
        title: 'Средний чек',
        sort: () => sortClientTable('averageСheck'),
    },
    {
        title: 'Колличество покупок',
        sort: () => sortClientTable('allPurchases')
    },
    {
        title: 'Общая выручка ',
        sort: () => sortClientTable('total')
    },
]

export const BuyersPage = () => {
    const clientData  = useStore(storeClient);
    return (
        <div className="BuyersPage">
            <h1>Покупатели...</h1>
            <Table columsData={columsData} bodyData={clientData} />
        </div>
    )
}