import React from 'react';
import { TableList } from '../table-list';
import './table.css';

export const Table = ({columsData = [], bodyData = [], action = () => {}}) => {
    return (
        <div className="terminals-list-table table">
            <table cellSpacing="0">
                <tbody>
                    <tr className="table-header">
                        { columsData.map( item => <><td>{item.title}</td></> ) }
                    </tr>
                    {
                        bodyData.map((item, idx) => {
                            const obj = {...item, idx};
                            return <TableList data={obj} action={action} />
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}