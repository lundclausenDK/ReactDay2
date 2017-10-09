import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Resource from "./Resource";
import registerServiceWorker from './registerServiceWorker';

//ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<Resource />, document.getElementById('root'));
registerServiceWorker();
