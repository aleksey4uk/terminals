import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { AuthPage } from '../pages/auth-page';
import { TerminalsPage } from '../pages/terminals-page';
import { BuyersPage } from '../pages/buyers-page';
import { NotPage } from '../pages/not-page';
import { Sidebar } from '../sidebar';
import './app.css';


function App() {
//  if (!Store.authorization) return <AuthPage/>

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
          <Route component={NotPage}/>
        </Switch>
      </div>
    </div>
  );
}

export default App;
