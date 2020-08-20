import React, { useState } from 'react';
import { Button } from 'antd';

const data = [
    {
        name: 'Королина',
        description: 'стоит в магазине'
    },
    {
        name: 'Королина',
        description: 'стоит в магазине'
    },
    {
        name: 'Королина',
        description: 'стоит в магазине'
    },
]

export const TerminalsPage = () => {
    const [terminalForm, setTerminalForm] = useState({name: null, description: null})

    const handleChange = (e) => {
        e.preventDefault();

        const name = e.currentTarget.name;
        const value = e.currentTarget.value;

        setTerminalForm(state => ({
            ...state,
            [name]: value
        }))
    }

    const Finish = (data) => {
        //Получаем нашу форму
        //Отправляем нашу форму в наш глобальный state
        //Обновляем его и перерендирваем наш компонер  с новыми данными
        //таблица снизу получает новые данные и рендерит их
    }

    return (
        <div className="terminals">
            <h1>Терминалы</h1>
            <div className="add-terminals">
                <div className="add-terminals-card">
                    <span>Название терминала</span><br/>
                    <input onChange={handleChange} name="name"/>
                </div>

                <div className="add-terminals-card">
                    <span>Описание</span><br/>
                    <input onChange={handleChange} name="description"/>
                </div>
                <Button type="primary">Добавить</Button>
            </div>
            <TerminalTable data={data}/>
        </div>
    )
}

const TerminalTable = ({data = []}) => {
    const action = (idx) => console.log(idx);

    return (
        <div className="terminals-list-table">
            <table cellspacing="0">
                <tr className="table-header">
                    <th>#</th>
                    <th>Название</th>
                    <th>Описание</th>
                    <th>Действие</th>
                </tr>
                {
                    data.length ? 
                    data.map((item, idx) => {
                        const obj = {...item, idx, action};
                        return <TerminalTableList data={obj} action={action} />
                    }) : 
                    <h1>Нет данных...</h1>
                }
            </table>
        </div>
    )
}

const TerminalTableList = ({data, action}) => {
    const { idx, name, description } = data;
    
    return (
        <>
            <tr>
                <td>{idx + 1}</td>
                <td>{name}</td>
                <td>{description}</td>
                <td><Button type="dashed" size="small" onClick={() => action(idx)}>Удалить</Button></td>
            </tr>
        </>
    )
}