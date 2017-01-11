// import './main.css';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
// import visualizeData from './reducers';
import sideBarReducerArr from './reducers/SideBarReducer';

let store = createStore(sideBarReducerArr, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

const mountingPoint = document.createElement('div');
mountingPoint.className = 'app';
document.body.appendChild(mountingPoint);

ReactDOM.render(
  <Provider store={ store }>
    <App />
  </Provider>, 
  mountingPoint
);