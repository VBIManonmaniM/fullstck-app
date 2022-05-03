import React from 'react';
import Router from './view/routers'
import { Provider } from 'react-redux';
import store from './application/store'
import './view/styles/index.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <b>Coin base Interview</b>
      </Provider>
    </div>
  );
}

export default App;
