import { createStore, applyMiddleware } from "redux";
import { persistStore } from "redux-persist";
import logger from "redux-logger";

import rootReducer from "./root-reducer";

//this is just to make it scalable, to increase with the input
const middlewares = [];

//it can be development, production or test
//when run yarn start it sets to development, whereas "build" set it to production because it is going to be deployed
//this way it will only push the logger information through the middleware when the application is in development mode
if(process.env.NODE_ENV === 'development') { 
    middlewares.push(logger);
}

//...middlewares basically spread in the "applyMiddleware()" function each logger as individual argument
//when actions come through being dispached by any action, it updates the reducer and the middlewares intercept the info and do something
export const store = createStore(rootReducer, applyMiddleware(...middlewares));

//allows the browser to catch or store data depending on configuration option
export const persistor = persistStore(store);

//export default { store, persistor };
