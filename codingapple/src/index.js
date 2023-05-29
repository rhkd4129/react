import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Counter from './Practice/Counter';
import reportWebVitals from './reportWebVitals';
// import Pra from './Practice/new'
import App4 from './Practice/CounterPra';
import TodoListPra from './Practice/TodoListPra';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
    <Counter color='red'/>
    <Counter color='green'/>
    <Counter color='blue'/>
    <App4 text = 'abc'/>
    <TodoListPra></TodoListPra>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
