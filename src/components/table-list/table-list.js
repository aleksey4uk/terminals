import React from 'react';
import { Button } from 'antd';

export const TableList = ({data, idx, action}) => {
    return (
        <>
            <tr>
                <td>{idx + 1}</td>
                { 
                    data.map((item, idx) => (
                        <td key={idx}>{item}</td>)) 
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