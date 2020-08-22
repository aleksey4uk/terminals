import React, { useState } from 'react';
import { TableList } from '../table-list';
import { Radio } from 'antd';
import { SortAscendingOutlined, FilterOutlined } from '@ant-design/icons';
import './table.css';

const FilterTable = ({data=[], func}) => {
    const [filter, setFilter] = useState(false);
    const [radioSelect, setRadioSelect] = useState(null);
    const newFilterData = uniqData(data);

    const visibleFilter = () => setFilter(state => !state);

    const onChange = (e) => {
        const idx = e.target.value;
        setRadioSelect(idx)
        let name = newFilterData[idx].name
        func(name)
    }

    function uniqData(arr) {
        let result = [];

        for(let key of arr) {
            if(!result.find(item => item.name === key.name)) {
                result.push(key);
            }
        }

        return result;
    } 

    return (
        <div style={{display: "inline", position: 'relative'}}>
            <button onClick={ visibleFilter }><FilterOutlined /></button>
            {
                filter ? (
                    <Radio.Group style={{position: 'absolute', right: 0, top: 20, listStyle: 'none', backgroundColor: 'white', border: '1px solid black'}} onChange={onChange} value={radioSelect}>
                        {
                            newFilterData.map((item, idx) => {
                                return <Radio value={idx}>{item.name}</Radio>
                            })
                        }
                    </Radio.Group>
                ) : null
            }
        </div>
    )
}

export const Table = ({columsData = [], bodyData = [], action = null}) => {

    const editFilterData = (name) => {
        const newArr = bodyData.filter(item => item.name === name);
        return newArr;
    }

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
                                            sort ? <button onClick={sort}>: {<SortAscendingOutlined />}</button> :
                                            filter ? <FilterTable data={bodyData} func={editFilterData}/> : null
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