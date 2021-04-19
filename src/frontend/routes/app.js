import React from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";

import Badges from "../pages/badgesList";
import Layout from "../components/Layout";
import BadgesNew from "../pages/badgesNew";

import './main.css';

function App() {
    return (
      <BrowserRouter>
      <Layout>
      <Switch>
           <Route exact path="/" component={Badges} />
           <Route exact path="/badgesNew" component={BadgesNew} />
      </Switch>
      </Layout>
      </BrowserRouter>
    );
  }
  export default App