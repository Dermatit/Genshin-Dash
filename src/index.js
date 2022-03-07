import React from 'react';
import SmoothScroll from 'smoothscroll-for-websites';
import ReactDOM from 'react-dom';
import MainPage from './mainPage/mainPage';
import './Index.css';

SmoothScroll({ stepSize: 100 })

ReactDOM.render(
  <React.StrictMode>
    <MainPage/>
  </React.StrictMode>,
  document.getElementById('root')
);