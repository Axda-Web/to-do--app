import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './app/App';
import reportWebVitals from './reportWebVitals';

import { store } from './app/store'

const root = ReactDOM.createRoot(document.getElementById('root'));

function reduxRender() {
  
  root.render(
    <React.StrictMode>
      <App  state={store.getState()}
            dispatch={store.dispatch}
          />
    </React.StrictMode>
    );
  }

reduxRender()

store.subscribe(reduxRender)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
