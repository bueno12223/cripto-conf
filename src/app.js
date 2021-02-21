import React from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom"

import Home from "./pages/home"

import "./assets/app.css"




function App() {
    return (
      <BrowserRouter>

      <Switch>
           <Route exact path="/" component={Home} />
          

           </Switch>


    
           

      </BrowserRouter>
    );
  }
  export default App