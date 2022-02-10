import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// Redux for state management
import { Provider } from 'react-redux'
import { createStore } from 'redux';
import FlowchartDataReducer from './Redux/Reducers/FlowchartDataReducer'

// redux store
const store = createStore(FlowchartDataReducer);

ReactDOM.render(
  <Provider store={store}>
      <App />
  </Provider>,
  document.getElementById('root')
);
