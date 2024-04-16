import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import UserReducer from './components/UserReducer';


const loadState = () => {
  try {
    const serializedState = localStorage.getItem('reduxState');
    if(serializedState === null){
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err){
    return undefined;
  }
};

const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('reduxState', serializedState)
  } catch(err){
    return undefined
  }
};

const preloadedState = loadState();

const store= configureStore({
  reducer: {
    users: UserReducer
  }, 
  preloadedState: preloadedState
});

store.subscribe(()=> {
  saveState(store.getState());
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
