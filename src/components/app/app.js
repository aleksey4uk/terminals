import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { useStore } from 'effector-react';
import { store } from '../../store';
import { AuthPage } from '../pages/auth-page';
import { TerminalsPage } from '../pages/terminals-page';
import { BuyersPage } from '../pages/buyers-page';
import { Sidebar } from '../sidebar';
import './app.css';


function App() {
  const Store = useStore(store);

  if (!Store.authorization) return <AuthPage/>
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
