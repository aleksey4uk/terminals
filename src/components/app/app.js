import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { AuthPage } from '../pages/auth-page';
import { TerminalsPage } from '../pages/terminals-page';
import { BuyersPage } from '../pages/buyers-page';
import { Header } from '../header/';

function App() {
  return (
    <div className="App">
      <Header/>
      <Switch>
        <Route path="/" exact component={AuthPage}/>
        <Route path="/terminals" component={TerminalsPage}/>
        <Route path="/buyers" exact component={BuyersPage}/>
        <Route path="/buyers/:id ">
          <BuyersPage/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
