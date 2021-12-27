import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import * as serviceWorkerRegistration from './service-worker/service-worker-registration';
import reportWebVitals from './report-web-vitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorkerRegistration.unregister();
reportWebVitals();
