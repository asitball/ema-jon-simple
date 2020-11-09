import React from 'react';
import './App.css';
import Header from './component/Header/Header';
import Shop from './component/Shop/Shop';
import Review from './component/Review/Review';
import Inventory from './component/Inventory/Inventory';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Notfound from './component/Not found/Notfound';


function App() {
  return (
    <div>
    <Header></Header>
    <Router>
      <Switch>
          <Route path="/shop">
          <Shop></Shop>
          </Route>
          <Route path ="/review">
            <Review></Review>
          </Route>
          <Route path ="/inventory">
            <Inventory></Inventory>
          </Route>
          <Route exact path="/">
          <Shop></Shop>
          </Route>
          <Route path ="/*">
            <Notfound></Notfound>
          </Route>
      </Switch>
    </Router>
    
    </div>
  );
}

export default App;
