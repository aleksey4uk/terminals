import React, { useState } from 'react';
import { useId } from "react-id-generator";
import { useStore } from 'effector-react';
import { terminalStore, addTerminal, deleteTerminal } from '../../store';
import { Button } from 'antd';
import { Table } from '../table';

const columsDataTerminal = [
    { title: "#" },
    { title: "Название" },
    { title: "Описание" },
    { title: "Действие" },
]

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
            {<Table columsData={columsDataTerminal} bodyData={dataTerminal} action={deleteTerminal}/> }
        </div>
    )
}
