import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";

//import registerServiceWorker from './archive/registerServiceWorker';
//import Gallery from "./Gallery";
//import Converter from "./Converter";
//import DataStore from "./DataStore";
//import ShoppingList from "./ShoppingList";
//import ShoppingListCustom from "./ShoppingListCustom";
import MyRouter from "./MyRouter";

//ReactDOM.render(<Gallery />, document.getElementById('root'));
//ReactDOM.render(<Converter />, document.getElementById('root'));
//ReactDOM.render(<DataStore />, document.getElementById('root'));
//ReactDOM.render(<ShoppingList />, document.getElementById("root"));
//ReactDOM.render(<ShoppingListCustom />, document.getElementById("root"));
ReactDOM.render((

    <BrowserRouter>
        <MyRouter/>
    </BrowserRouter>

), document.getElementById("root"));

//registerServiceWorker();
