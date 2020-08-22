import React from 'react';
import { useStore } from 'effector-react';
import { Switch, Route } from 'react-router-dom';
import { AuthPage } from '../pages/auth-page';
import { TerminalsPage } from '../pages/terminals-page';
import { BuyersPage } from '../pages/buyers-page';
import { NotPage } from '../pages/not-page';
import { ClientPage } from '../pages/client-page';
import { Sidebar } from '../sidebar';
import { store } from '../../store';
import './app.css';


function App() {
  const Store = useStore(store);
  if (!Store.authorization) return <AuthPage/>

  return (
    <div className="App">
      <Sidebar />
      <div className='content'>
        <Switch>
          <Route path="/" exact component={TerminalsPage} />
          <Route path="/terminals" component={TerminalsPage} />
          <Route path="/buyers/" exact component={BuyersPage} />
          <Route path="/buyers/:id" >
            <ClientPage/>
          </Route>
          <Route component={NotPage}/>
        </Switch>
      </div>
    </div>
  );
}

export default App;
