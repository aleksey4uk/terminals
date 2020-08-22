import React, { useState } from 'react';
import { useStore } from 'effector-react';
import { store } from '../../store';
import { Link } from 'react-router-dom';
import './sidebar.css';

export const Sidebar = () => {
    const [ selectedLink, setSelectedLink ] = useState(null)

    const { img } = useStore(store);
    
    
    const initStyle = () => {
        return {
            backgroundImage: `url(${img})`
        }
    }

    return (
        <div className="sidebar">
            <div className="sidebar-img" style={initStyle()}/>
            <Link 
                onClick={ () => setSelectedLink('0') } 
                className={ selectedLink == '0' ? 'active' : null } 
                id='0'
                to="/terminals"
            >
                    Терминалы
            </Link>
            <Link 
                className={ selectedLink == '1' ? 'active' : null } 
                onClick={() => setSelectedLink('1')}
                id='1' 
                to="/buyers"
            >
                Клиенты
            </Link>
            <p>Copyright © 2020 </p>
        </div>
    )
}