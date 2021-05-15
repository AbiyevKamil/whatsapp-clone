import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Reducer, { initialState } from "./redux/Reducer";
import { StateProvider } from "./redux/StateProvider";

ReactDOM.render(
  <React.StrictMode>
    <StateProvider initialState={initialState} reducer={Reducer}>
      <App />
    </StateProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

