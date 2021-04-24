import React from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import BadgesList from "../pages/badgesList";
import Layout from "../components/layout";
import BadgesNew from "../pages/badgesNew";
import 'bootstrap/dist/css/bootstrap.min.css';
import './main.css';

function App() {
    return (
      <BrowserRouter>
      <Layout>
        <Switch>
            <Route exact path="/" component={BadgesList} />
            <Route exact path="/badgesNew" component={BadgesNew} />
        </Switch>
      </Layout>
      </BrowserRouter>
    );
  }
  export default App