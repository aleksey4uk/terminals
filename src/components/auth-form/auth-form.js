import React,{ useState } from 'react';
import './auth-form.css';

export const AuthForm = () => {
    const [formData, setFormData] = useState({login: '', password: ''});

    const handleChange = (event) => {
        event.preventDefault();
        const attributes = event.currentTarget.name;
        const value = event.currentTarget.value;

        setFormData(state => ({
            ...state,
            [attributes]: value, 
        }))
    }

    const Finish = (event) => {
        event.preventDefault();
        console.log(formData)
    }

    const сheckStringNormalize = (str) => {
        //Нужно сделать 3 проверки 
            //1. Проверка на количество символов(не менее 8)
            const checkStrLength = str => str.length >= 8 ? true : false;

            //2. Проверка на то, чтобы была хотя бы 1 прописная латинская буква
            const checkStrSymbol = str => {
                let result = false;

                const check = item => {
                    if (item.charCodeAt() >= 65 && item.charCodeAt() <= 122) {
                        let newSymbol = item;
                        if (newSymbol.toUpperCase() == item) {
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
    }

    return (
        <div className='form'>
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
                    >

                    </input>
                </div>

                <button type="submit">Войти</button>
            </form>
        </div>    
    )
}