import React from 'react';
import ReactDOM from 'react-dom';

import './index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';
import baseConfig from './config';

import { datadogRum } from '@datadog/browser-rum';

datadogRum.init({
  applicationId: 'a8bda64d-dcd9-4a37-a21c-5c194ff1b5d8',
  clientToken: 'pub62ae029f39300877515466e145ab5892',
  site: 'datadoghq.com',
  service: 'seer-frontend',
  env: baseConfig.env,
  version: '1.0.0',
  sampleRate: 100,
  trackInteractions: true,
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
