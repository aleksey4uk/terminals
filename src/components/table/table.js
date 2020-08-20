import React from 'react';
import './table.css';

export const TerminalTable = ({data = [], actions=[]}) => {

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
                            return <TerminalTableList data={obj} action={actions} />
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}