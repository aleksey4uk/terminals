import React,{ useState } from 'react';
import { authorization, loadUserIcon } from '../../store';
import { Alert } from 'antd';
import "antd/dist/antd.css";
import './auth-form.css';

export const AuthForm = () => {
    const [formData, setFormData] = useState({login: '', password: ''});
    const [error, setError] = useState({error: false, message: null});

    const handleChange = (event) => {
        event.preventDefault();
        const attributes = event.currentTarget.name;
        const value = event.currentTarget.value;

        setFormData(state => ({
            ...state,
            [attributes]: value, 
        }))
    }

    const Finish = async (event) => {
        event.preventDefault();
        const result = (сheckFormNormalize(formData.password) && await checkGithubUser(formData.login));

        authorization(result);
    }

    const сheckFormNormalize = (str) => {
        //3 проверки 

            //1. Проверка на количество символов(не менее 8)
            const checkStrLength = str => str.length >= 8 ? true : false;

            //2. Проверка на то, чтобы была хотя бы 1 прописная латинская буква
            const checkStrSymbol = str => {
                let result = false;

                const check = item => {
                    if (item.charCodeAt() >= 65 && item.charCodeAt() <= 122) {
                        let newSymbol = item;
                        if (newSymbol.toUpperCase() === item) {
                            result = true;
                        }
                    }
                }

                Array.from(str).forEach(check);
                return result;
            }

            //3. Проверка на то, чтобы была хотя бы 1 цифра.
            const checkStrNumber = str => {
                let result = false;

                Array.from(str).forEach( item => {
                    if (item.charCodeAt() >= 48 && item.charCodeAt() <=57) result = true; 
                })

                return result;
            }

            if (checkStrLength(str) && checkStrSymbol(str) && checkStrNumber(str)) {
               return true;
            } 
            setError({error: true, message: 'Неккоректные данные ввода'})
            return false;
    }

    const loadGithubUser = (name) => {
        return fetch(`https://api.github.com/users/${name}`)
          .then(response => response.json());
    }

    const checkGithubUser = async (name) => {
        const user = await loadGithubUser(name);
        if (user.message) {
            setError((state) => ({error: true, message: 'Нет такого пользователя'}));
            return false;
        }
        loadUserIcon(user.avatar_url);
        return true;
    }

    const closeError = () => {
        setTimeout(() => {
            setError((state) => ({error: false, message:null}))
        }, 2500);
    }

    if (error.error) closeError();
    return (
        <div className='form'>
            { error.error ? <Alert className="auth-error" message={error.message} type="error" showIcon/> : null }
            <form className="auth-form" onSubmit={Finish}>
                <h1>Авторизация</h1>
                <div className="login">
                    <label htmlFor="login">Логин:</label>
                    <input 
                        onChange={handleChange}
                        name="login" 
                        type="text" 
                        placeholder="Введите логин..." 
                        value={formData.login}
                    />     
                </div>

                <div className="password">
                    <label htmlFor="password">Пароль:</label>
                    <input 
                        name="password" 
                        onChange={handleChange}
                        placeholder="Введите пароль..." 
                        value={formData.password} 
                        type="password"
                    />
                </div>

                <button type="submit">Войти</button>
            </form>
        </div>    
    )
}