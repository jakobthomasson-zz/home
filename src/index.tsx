import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

import store from 'src/store';

const root = (
  <Provider store={store}>
    <BrowserRouter >
      <App />
    </BrowserRouter>
  </Provider>
);

ReactDOM.render(
  root,
  document.getElementById('root') as HTMLElement,
);

registerServiceWorker();
