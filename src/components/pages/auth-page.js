import React from 'react';
import { AuthForm } from '../auth-form';
import { Redirect } from 'react-router-dom';

export const AuthPage = () => {
    const login = false;

    if(login) return <Redirect to="/terminals"/> 
    return <AuthForm />   
}
