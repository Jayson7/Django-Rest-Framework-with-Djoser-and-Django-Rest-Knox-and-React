import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { devToolsEnhancer } from '@redux-devtools/extension'
import Navigation from './components/Navigation/nav'
import AuthReducer from './Redux/Reducers/authReducer'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { combineReducers } from 'redux'

const allReducers = combineReducers({
  authStore: AuthReducer,
})
const store = createStore(allReducers, devToolsEnhancer())

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Navigation />
    </Provider>
  </React.StrictMode>,
)
