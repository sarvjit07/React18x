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
import { DataBinding3 } from './components/data-binding/example-3';
import { DataBinding4 } from './components/28-Nov-2024/data-binding1-Array';
import { DataBinding5 } from './components/28-Nov-2024/data-binding2-Array';
import { DataBinding6 } from './components/28-Nov-2024/data-binding3-Object';
import { FakestoreIndex } from './components/01-01-2025/FakeStore/fakestore-index';
// import { Login } from './login';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  {/*<FakestoreProducts/>*/}
 {/* <DataBinding/>
  <DataBinding2/>
  <DataBinding3/> }
  <DataBinding4/>
  <DataBinding5/>
  <DataBinding6/> */}
    {/*<Login/>*/}

    <FakestoreIndex /> 
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
