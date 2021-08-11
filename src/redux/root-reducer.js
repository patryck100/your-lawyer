import { combineReducers } from "redux";

import userReducer from "./user/user.reducer";
import directoryReducer from "./directory/directory.reducer";
import handleDataReducer from "./handleData/handleData.reducer";


//This is like creating an unique state for the entire application,
//allowing Redux to receive actions and update the state in all the reducers and components in the app
const rootReducer = combineReducers({
  user: userReducer,
  directory: directoryReducer,
  data: handleDataReducer
});

export default  rootReducer;
