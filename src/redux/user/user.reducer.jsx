import {UserActionTypes} from './user.types'; 

//Initial state is set to null to avoid "undefined" errors
const INITIAL_STATE = {
    currentUser : null,
    TypeOfUser: null,
}

//if state is undefined, it uses the INITIAL_STATE through this sintax below "state = INITIAL_STATE"
const userReducer = (state = INITIAL_STATE, action) => {
    //can use if statement as well, but switch seem to be more readable
    switch(action.type) { //it will check every action's type
        case UserActionTypes.SET_CURRENT_USER: //in case of an "SET_CURRENT_USER"...
            return {
                ...state, //don't mind about the other states...
                currentUser: action.payload //set the currentUser to whatever payload is passed in
            };
        case UserActionTypes.SET_TYPE_OF_USER: //in case of...
            return {
                ...state,
                TypeOfUser: action.payload
            };

        //if no alteration is made, just return the current state as before
        default: 
            return state;
    }
}

//by exporting, it allows this function to be called from another components
export default userReducer;