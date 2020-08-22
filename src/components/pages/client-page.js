import React from 'react';
import { useParams, Redirect } from 'react-router-dom';
import { useStore } from 'effector-react';
import { storeClient } from '../../store';
import { Card } from 'antd';

export const ClientPage = () => {
    const {id} = useParams();
    const { clientData } = useStore(storeClient);

    const client = clientData.find(item => +id === item.id);

    if (!client) return <Redirect to="/404"/>

    const {id:ID, name, averageСheck, allPurchases, total} = client;

    return (
        <>
            <h1>Страница покупателя</h1>
            <Card type="inner" title="ID покупателя:">
                {ID}
            </Card>
            <Card
                style={{ marginTop: 16 }}
                type="inner"
                title="Имя покупателя"
            >
                {name}
            </Card>
            <Card
                style={{ marginTop: 16 }}
                type="inner"
                title="Средний чек"
            >
                {averageСheck}
            </Card>
            <Card
                style={{ marginTop: 16 }}
                type="inner"
                title="Количество покупок"
            >
                {allPurchases}
            </Card>
            <Card
                style={{ marginTop: 16 }}
                type="inner"
                title="Общая Выручка"
            >
                {total}
            </Card>
            </>
    )
}