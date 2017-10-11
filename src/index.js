import React from 'react';
import ReactDOM from 'react-dom';

//import Gallery from "./Gallery";
//import Converter from "./Converter";
import DataStore from "./DataStore";
import registerServiceWorker from './registerServiceWorker';

//ReactDOM.render(<Gallery />, document.getElementById('root'));
//ReactDOM.render(<Converter />, document.getElementById('root'));
ReactDOM.render(<DataStore />, document.getElementById('root'));

registerServiceWorker();
