import React, { useState } from 'react';
import { useId } from "react-id-generator";
import { useStore } from 'effector-react';
import { terminalStore, addTerminal, deleteTerminal } from '../../store';
import { Button } from 'antd';

export const TerminalsPage = () => {
    const [terminalForm, setTerminalForm] = useState({name: '', description: ''})
    const dataTerminal = useStore(terminalStore);

    const handleChange = (e) => {
        e.preventDefault();
        const { name, value } = e.currentTarget;

        setTerminalForm(state => ({
            ...state,
            [name]: value
        }))
    }

    const Finish = (form) => {
        if(!form.name.length) return;
        addTerminal(form);
    }

    return (
        <div className="terminals">
            <h1>Терминалы</h1>
            <div className="add-terminals">
                <div className="add-terminals-card">
                    <span>Название терминала</span><br/>
                    <input onChange={handleChange} value={terminalForm.name} name="name"/>
                </div>

                <div className="add-terminals-card">
                    <span>Описание</span><br/>
                    <input onChange={handleChange} value={terminalForm.description} name="description"/>
                </div>
                <Button onClick={() => Finish(terminalForm)} type="primary">Добавить</Button>
            </div>
            <TerminalTable data={dataTerminal}/>
        </div>
    )
}

const TerminalTable = ({data = []}) => {

    return (
        <div className="terminals-list-table">
            <table cellSpacing="0">
                <tbody>
                    <tr className="table-header">
                        <th>#</th>
                        <th>Название</th>
                        <th>Описание</th>
                        <th>Действие</th>
                    </tr>
                    {
                        data.map((item, idx) => {
                            const obj = {...item, idx};
                            return <TerminalTableList data={obj} action={deleteTerminal} />
                        })
                    }
                </tbody>
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