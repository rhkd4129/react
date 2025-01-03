import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Counter from "./component/Counter";
import TodoList from "./component/TodoList";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
      <div style={{display:"flex",gap:"30px"}}>
          <Counter bgColor={"red"} startNumber={0}></Counter>
          <Counter bgColor={"blue"} startNumber={0}></Counter>
          <Counter bgColor={"green"} startNumber={0}></Counter>
      </div>
      <div>
          <TodoList></TodoList>
      </div>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
