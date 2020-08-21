import React from 'react';
import { Table } from '../table';

const columsData = [
    {title: 'ID Покупателя'},
    {title: 'Имя покупателя'},
    {title: 'Средний чек'},
    {title: 'Колличество покупок'},
    {title: 'Общая выручка '},
]

const bodyData = [
    {
        id: 0,
        name: 'Вася',
        orders: '22',
        all: '2',
        allMoney: '2'
    }
]

export const BuyersPage = () => {
    return (
        <div className="BuyersPage">
            <h1>Покупатели...</h1>
            <Table columsData={columsData} bodyData={bodyData}/>
        </div>
    )
}