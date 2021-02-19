import React from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom"

import Home from "./components/navbar"

import "./assets/app.css"




function App() {
    return (
      <BrowserRouter>
      <Layout>
      <Switch>
           <Route exact path="/" component={Home} />
          

           </Switch>

      </Layout>
    
           

      </BrowserRouter>
    );
  }
  export default App