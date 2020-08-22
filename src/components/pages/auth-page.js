import React from 'react';
import { AuthForm } from '../auth-form';
import { Redirect } from 'react-router-dom';

export const AuthPage = () => {
    const login = false;

    if(login) return <Redirect to="/terminals"/> 
    return <AuthForm />   
}


/*
    function loadGithubUser(name) {
        return fetch(`https://api.github.com/users/${name}`)
          .then(response => response.json())
          .then(console.log);
      }

      loadGithubUser('aleksey4uk')
*/