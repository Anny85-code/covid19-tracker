import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './Redux/configureStore';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';


ReactDOM.render(
      <Provider store={store}>
        <BrowserRouter>
        <React.StrictMode>
          <App />
        </React.StrictMode>,
        </BrowserRouter>
      </Provider>,
  document.getElementById('root')
);


