import React from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom"

import Home from "./pages/home"
import Badges from "./pages/badgesList"
import Layout from "./components/Layout"
import BadgesNew from "./pages/badgesNew"

function App() {
    return (
      <BrowserRouter>
      <Layout>
      <Switch>
           <Route exact path="/" component={Home} />
           <Route exact path="/badges" component={Badges} />
           <Route exact path="/badgesNew" component={BadgesNew} />
      </Switch>
      </Layout>
      </BrowserRouter>
    );
  }
  export default App