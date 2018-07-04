// bootstrap react app ito real dom

import React from "react";

// diffing, patching real dom
import {render} from "react-dom";

//import {App} from "./app/App";

import Routes from "./app/Routes";

import store from "./app/store";

import {Provider} from "react-redux";


//binding real and virtual dom
// store shall be exposed as context
render (<Provider store={store}>
             <Routes/> 
        </Provider>,
     document.getElementById("root"))//real dom