import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
// import { Home } from './components/home/home';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css';
import bootstrap from "bootstrap";
import { FakestoreProducts } from './components/TimeEvents/fakestore-products';
import { DataBinding } from './components/data-binding/data-binding';
import { DataBinding2 } from './components/data-binding/example-2';
// import { Login } from './login';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  {/*<FakestoreProducts/>*/}
  <DataBinding2/>
  <DataBinding/>
    {/*<Login/>*/}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
