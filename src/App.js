import React from "react";
import {Route} from "react-router-dom";
import "./App.css";
import NavBar from "./components/navbar/NavBar";
import Home from './components/home/Home';
import Characters from './components/characters/Characters';
function App() {
  return(
    <div>
        <Route
          path='/'
          render={() => <NavBar/>}
        />
        <Route
          exact path='/'
          render={() => <Home/>}
        />
        <Route
          path='/characters'
          render={() => <Characters/>}
        />             
    </div>
  )
}
export default App;
