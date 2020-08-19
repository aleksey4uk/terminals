import React from 'react';
import './auth-form.css';

export const AuthForm = () => {
    return (
        <div className='form'>

            <form className="auth-form">
                <h1>Авторизация</h1>
                <div className="login">
                    <label for="name">Логин:</label>
                    <input name="name" type="text" placeholder="Введите логин..."></input>
                </div>

                <div className="password">
                    <label for="password">Пароль:</label>
                    <input name="password" placeholder="Введите пароль..." type="password"></input>
                </div>

                <button type="submit">Войти</button>
            </form>
        </div>    
    )
}