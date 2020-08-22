import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'antd';

export const TableList = ({data, idx, action, render}) => {
    return (
        <>
            <tr>
                <td>{idx + 1}</td>
                { 
                    data.map((item, idx) => {
                        if(idx===0 && render) {
                            return (
                                <td key={idx}>
                                    <Link to={`/${data[0]}`}>{item}</Link>
                                </td>)
                        }
                        return (
                            <td key={idx}>{item}</td>
                        )
                        }) 
                }
                {
                    action ? (
                        <td>
                            <Button type="dashed" size="small" onClick={() => action(idx)}>Удалить</Button>
                        </td>
                    ) : null
                }
            </tr>
        </>
    )
}

/*
*/