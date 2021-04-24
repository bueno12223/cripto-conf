import express from 'express';
import dotenv from 'dotenv';
import webpack from 'webpack';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { renderRoutes } from 'react-router-config';
import { StaticRouter } from 'react-router-dom';
import helmet from 'helmet';
import axios from 'axios';
import serverRoutes from '../frontend/routes/index';
import reducer from '../frontend/reducers/index';
import getManifest from './getManifest';

dotenv.config();
const { ENV, PORT } = process.env;
const app = express();
app.use(express.json());

if (ENV  === 'development') {
  console.log('Development config');
  const webpackConfig = require('../../webpack.config');
  const webpackDevMiddleware = require('webpack-dev-middleware');
  const webpackHotMiddleware = require('webpack-hot-middleware');
  const compiler = webpack(webpackConfig);
  const { publicPath } = webpackConfig.output;
  const serverConfig = { serverSideRender: false, publicPath };

  app.use(webpackDevMiddleware(compiler, serverConfig));

}else{
  app.use((req, res, next) => {
    if (!req.hashManifest) req.hashManifest = getManifest();
    next();
  });
  app.use(express.static(`${__dirname}/public`));
}

const setResponse = (html, preloadedState, manifest) => {
  const mainStyles = manifest ? manifest['vendors.css'] : 'assets/app.css';
  const mainBuild = manifest ? manifest['main.js'] : 'assets/app.js';
  const vendorBuild = manifest ? manifest['vendors.js'] : 'assets/vendor.js';
  return (`
  <!DOCTYPE html>
  <html>
    <head>
    <link rel="icon" type="image/svg" href="assets/batata.svg" />
    <title>cripto-conf</title>
    <link rel="stylesheet" href='${mainStyles}' type="text/css">
    </head>
    <body>
      <div id="app">${html}</div>
      <script>
        window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}
      </script>
      <script src='${mainBuild}' type="text/javascript"></script>
      <script src="${vendorBuild}" type="text/javascript"></script>
    </body>
  </html>
  `);
};

const renderApp = async(req, res) => {
  const initialState = await axios.get(`http://${process.env.API}/api`);
  const store = createStore(reducer, initialState.data);
  const preloadedState = store.getState();
  const html = renderToString(
    <Provider store={store}>
      <StaticRouter location={req.url} context={{}}>
        {renderRoutes(serverRoutes)}
      </StaticRouter>
    </Provider>,
  );

  res.send(setResponse(html, preloadedState, req.hashManifest));
};

app.post("/auth/sign-up", async function (req, res, next) {
  const {firstName, lastName, email, type, nationality} = req.body;
  try {
    const result = await axios.post(`http://${process.env.API}/api`,{
      firstName, 
      lastName,
      email,
      type,
      nationality
    })
    console.log(result)
    if(result.status == 201 ){
      res.status(result.status).json({
        'message':'user post it succsessfully', 
        'id': result.data 
      })
    }else{
      res.status(result.status).json({
        'message': 'error in post data'})
    }
  } catch (error) {
    next(error);
  }
});

app.get('*', renderApp);

app.listen(PORT, (err) => {
    if (err) {console.log(err)
    }else{console.log('Server running on port 3000')
    };
  });