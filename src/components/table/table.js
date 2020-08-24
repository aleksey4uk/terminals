import React, { useState } from 'react';
import { TableList } from '../table-list';
import { Radio } from 'antd';
import { SortAscendingOutlined, FilterOutlined } from '@ant-design/icons';
import './table.css';

const FilterTable = ({data=[], func, clear}) => {
    const [filter, setFilter] = useState(false);
    const [radioSelect, setRadioSelect] = useState(null);
    const newFilterData = uniqData(data);

    const visibleFilter = () => setFilter(state => !state);

    const onChange = (e) => {
        const idx = e.target.value;

        setRadioSelect(idx)

        let name = newFilterData[idx].name
        func(name)

        visibleFilter(false);
        setRadioSelect(null);
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
            <button onClick={clear}>clear</button>
        </div>
    )
}

export const Table = ({columsData = [], bodyData = [], action = null }) => {
    const [pagination, setPagination] = useState(15);
    const [activeButton, setActiveButton] = useState(pagination);

    const incPagination = () => {
        if(pagination === bodyData.length) return;
        setPagination(state => state+5);
        setActiveButton(pagination + 5)
    }

    const ligthButton = (e) => {
        let {name:num} = e.target;
        setActiveButton(+num)
        setPagination(+num)
    }

    return (
        <div className="terminals-list-table table">
            <table cellSpacing="0">
                <tbody>
                    <tr className="table-header">
                        <th>#</th>
                        { 
                            columsData.map( (item, idx) => {
                                const {title, filter, sort, clearFilter} = item;
                                return (
                                <>
                                    <th key={idx}>
                                        {title}
                                        {
                                            sort ? <button onClick={sort}>: {<SortAscendingOutlined />}</button> :
                                            filter ? <FilterTable data={bodyData} func={filter} clear={clearFilter}/> : null
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
                            let render = columsData.find(item => item.render);                       

                            if(idx+1 > pagination) return null; 

                            return <TableList data={dataList} idx={idx} action={action} render={render}/>
                        })
                    }
                </tbody>
                
            </table>

            <button onClick={incPagination} className="pagination-btn">{`...`}</button>

            <div className="pagination">
                <h3>Колличество отображаемых строк</h3>
                    <button 
                        name={5} 
                        onClick={ligthButton} 
                        className={`pagination-btn ${activeButton === 5 ? 'active' : null}`}
                    >
                        5
                    </button>
                    <button 
                        name={10} 
                        onClick={ligthButton} 
                        className={`pagination-btn ${activeButton === 10 ? 'active' : null}`}
                    >
                        10
                    </button>
                    <button 
                        name={15} 
                        onClick={ligthButton} 
                        className={`pagination-btn ${activeButton === 15 ? 'active' : null}`}
                    >
                        15
                    </button>

            </div>
        </div>
    )
}