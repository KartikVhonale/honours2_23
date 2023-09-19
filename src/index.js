import logo from './logo.svg';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
const image = <img src={logo}/>;

//with jsx
// const element = <a href='http://www.rknec.edu' target='_blank'>RCOEM</a>
//without jsx
const element=React.createElement('h1',{className:'h1',id:'hello'},'Hello World')


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
