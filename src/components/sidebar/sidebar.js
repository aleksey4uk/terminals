import React from 'react';
import { useStore } from 'effector-react';
import { store } from '../../store';
import { Link } from 'react-router-dom';
import './sidebar.css';

export const Sidebar = () => {
    const { img } = useStore(store);
    
    const initStyle = () => {
        return {
            backgroundImage: `url(${img})`
        }
    }

    return (
        <div className="sidebar">
            <div className="sidebar-img" style={initStyle()}/>
            <Link className='active' id='0' to="/terminals">Терминалы</Link>
            <Link to="/buyers">Клиенты</Link>
            <p>Copyright © 2020 </p>
        </div>
    )
}