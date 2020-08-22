import React, { useState, useEffect } from 'react';
import { TableList } from '../table-list';
import { Radio } from 'antd';
import { SortAscendingOutlined, FilterOutlined } from '@ant-design/icons';
import './table.css';

const FilterTable = ({data=[]}) => {
    const [filter, setFilter] = useState(false)
    const visibleFilter = () => setFilter(state => !state);

    const datas = [
        'vasya',
        'vasya',
        'petya'
    ]

    function onChange(e, item) {
        console.log(`checked = ${e.target.checked}`);
        console.log(`item : ${item}`)
    }

    return (
        <div style={{display: "inline", position: 'relative'}}>
            <button onClick={ visibleFilter }><FilterOutlined />
            </button>
            {
                //
                    filter ? (
                        <Radio.Group style={{position: 'absolute', right: 0, top: 20, listStyle: 'none', backgroundColor: 'white', border: '1px solid black'}} onChange={this.onChange} value={this.state.value}>
                            {
                                datas.map(item => (
                                    <Radio value={item}>{item}</Radio>
                                ))
                            }
                         </Radio.Group>
                    ) : null
            }
        </div>
    )
}

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
                                            sort ? <button onClick={sort}>: {<SortAscendingOutlined />}</button> :
                                            filter ? <FilterTable /> : null
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