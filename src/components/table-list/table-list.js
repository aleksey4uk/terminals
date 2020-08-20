import React from 'react';
import { Button } from 'antd';

export const TableList = ({data, action}) => {
    const { idx, name, description } = data;
    return (
        <>
            <tr>
                <td>{idx + 1}</td>
                <td>{name}</td>
                <td>{description}</td>
                <td>
                    <Button type="dashed" size="small" onClick={() => action(idx)}>Удалить</Button>
                </td>
            </tr>
        </>
    )
}

