import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
//import { AuthPage } from '../pages/auth-page';// eslint-disable-next-line
import { TerminalsPage } from '../pages/terminals-page';
import { BuyersPage } from '../pages/buyers-page';
import { Sidebar } from '../sidebar';
import './app.css';


function App() {
//  if (!Store.authorization) return <AuthPage/>// eslint-disable-next-line

  return (
    <div className="App">
      <Sidebar />
      <div className='content'>
        <Switch>
          <Route path="/terminals" component={TerminalsPage}/>
          <Route path="/buyers/" exact component={BuyersPage}/>
          <Route path="/buyers/:id ">
            <BuyersPage/>
          </Route>
          <Redirect to="/terminals"/>
        </Switch>
      </div>
    </div>
  );
}

export default App;
