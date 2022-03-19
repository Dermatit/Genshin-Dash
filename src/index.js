// Файла с react кодом должны иметь расширение .jsx

// Хоть js и понимает, что на конце строки ты предполагаешь точку с запятой,
// но чаще всего следуют определенному стилю в разработке
// https://google.github.io/styleguide/jsguide.html#formatting-semicolons-are-required

import React from 'react'
import SmoothScroll from 'smoothscroll-for-websites'
import ReactDOM from 'react-dom'

import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { rootReducer } from './redux/reducer.js'

import MainPage from './mainPage/mainPage'
import './Index.css'

SmoothScroll({ stepSize: 111 })
// на самом деле для такого приложения redux лишний, но ради опыта норм
const store = createStore(rootReducer)

ReactDOM.render(
    <Provider store={store}>
      <MainPage/>
    </Provider>,

  document.getElementById('root')
)