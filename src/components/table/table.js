import React from 'react';
import { TableList } from '../table-list';
import './table.css';

export const Table = ({columsData = [], bodyData = [], action = null}) => {
    return (
        <div className="terminals-list-table table">
            <table cellSpacing="0">
                <tbody>
                    <tr className="table-header">
                        <th>#</th>
                        { columsData.map( (item, idx) => <><td key={idx}>{item.title}</td></> ) }
                    </tr>
                    {
                        bodyData.map((item, idx) => {
                            const dataList = Object.values(item);
                            return <TableList data={dataList} idx={idx} action={action} />
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}