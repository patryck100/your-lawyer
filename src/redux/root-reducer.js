import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; //tells redux persist to store in the local window browser

import userReducer from "./user/user.reducer";
import directoryReducer from "./directory/directory.reducer";

import handleDataReducer from "./handleData/handleData.reducer";

//just a json object that informs redux to start storing from the root in the path storage an arraylist containing the name of the reducer to be stored
const persistConfig = {
  key: "root",
  storage,
}; 

const rootReducer = combineReducers({
  user: userReducer,
  directory: directoryReducer,
  data: handleDataReducer
});

export default persistReducer(persistConfig, rootReducer);
