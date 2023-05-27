import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './Practice/App';
import Pra from './Pratice';
import App2  from './Practice/App4';
import Counter from './Practice/Counter';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
    <Counter color='red'/>
    <Counter color = 'green'/>
    <Counter color='blue'/>
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
