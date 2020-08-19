import React from 'react';

export const AuthPage = () => {
    function loadGithubUser(name) {
        return fetch(`https://api.github.com/users/${name}`)
          .then(response => response.json())
          .then(console.log);
      }

      loadGithubUser('aleksey4uk')

    return <h1>Авторизация...</h1>
}