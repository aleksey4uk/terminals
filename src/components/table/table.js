import React, { useState, useEffect } from 'react';
import { TableList } from '../table-list';
import './table.css';

export const Table = ({columsData = [], bodyData = [], action = null}) => {
    const [sorted, setSorted] = useState(false);

    const filter = () => {}

    return (
        <div className="terminals-list-table table">
            <table cellSpacing="0">
                <tbody>
                    <tr className="table-header">
                        <th>#</th>
                        { 
                            columsData.map( (item, idx) => {
                                const {title, filter, sort} = item;
                                return (
                                <>
                                    <th key={idx}>
                                        {title}
                                        {
                                            sort ? <button onClick={sort}>sort</button> : null
                                        }
                                    </th>
                                </>
                                )  
                            } )
                        }
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