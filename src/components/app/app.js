import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { useStore } from 'effector-react';
import { store } from '../../store';
import { AuthPage } from '../pages/auth-page';
import { TerminalsPage } from '../pages/terminals-page';
import { BuyersPage } from '../pages/buyers-page';
import { Header } from '../header/';
import { Footer } from '../footer';
import './app.css';


function App() {
  const Authorization = useStore(store);

  if (!Authorization) return <AuthPage/>
  return (
    <div className="App">
      <Header/>
      <Switch>
        <Route path="/terminals" component={TerminalsPage}/>
        <Route path="/buyers" exact component={BuyersPage}/>
        <Route path="/buyers/:id ">
          <BuyersPage/>
        </Route>
      </Switch>
      <Footer/>
    </div>
  );
}

export default App;
