import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux'
import { store } from './store'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    // 이 부분이 있다면, 개발 환경에서 이중 렌더링이 발생
   // <React.StrictMode>
    <Provider store={store}>
            <App />
    </Provider>
  // {/*</React.StrictMode>*/}
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
