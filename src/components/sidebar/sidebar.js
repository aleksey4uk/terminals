import React, { useState } from 'react';
import { useStore } from 'effector-react';
import { store } from '../../store';
import { Link } from 'react-router-dom';
import './sidebar.css';

export const Sidebar = () => {
    const tempUriGithub = 'https://avatars2.githubusercontent.com/u/49910077?s=460&u=b19fa26a56ccc8ef5b3919f4f9c891d1b0879c89&v=4';
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