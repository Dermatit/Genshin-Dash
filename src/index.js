import React from 'react';
import SmoothScroll from 'smoothscroll-for-websites';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { rootReducer } from './redux/reducer.js';
import MainPage from './main/index.jsx';
import './Index.css';

SmoothScroll({ stepSize: 111 });

const store = createStore(rootReducer);

ReactDOM.render(
    <Provider store={store}>
      <MainPage/>
    </Provider>,

  document.getElementById('root')
);