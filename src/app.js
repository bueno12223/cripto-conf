import React from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom"

import Home from "./pages/home"
import Badges from "./pages/badgesList"
import Layout from "./components/Layout"







function App() {
    return (
      <BrowserRouter>
      <Layout>
      <Switch>
           <Route exact path="/" component={Home} />
           <Route exact path="/badges" component={Badges} />
      </Switch>
      </Layout>
      </BrowserRouter>
    );
  }
  export default App