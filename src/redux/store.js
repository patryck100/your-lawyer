//createStore connects the rootReducer to the middlewares, in a way that every time an action
//is sent to Redux, the middleware intercepts and do something with it
import { createStore, applyMiddleware } from "redux"; //has to import "yarn add redux"

//loggs every action intercepted by the middleware in the console
import logger from "redux-logger"; //has to import "yarn add redux-logger"

//allows to handle multiple async events and multiple actions by catching all functions and dispatching it through the middleware
import thunk from 'redux-thunk'; //has to import "yarn add redux-thunk" 

import rootReducer from "./root-reducer"; 

//this is just to make it scalable, to increase with the input
const middlewares = [thunk];

//it can be development, production or test
//when run yarn start it sets to development, whereas "build" set it to production because it is going to be deployed
//this way it will only push the logger information through the middleware when the application is in development mode
if(process.env.NODE_ENV === 'development') { 
    middlewares.push(logger);
}

//...middlewares basically spread in the "applyMiddleware()" function each logger as individual argument
//when actions come through being dispached by any action, it updates the reducer and the middlewares intercept the info and do something
export const store = createStore(rootReducer, applyMiddleware(...middlewares));


