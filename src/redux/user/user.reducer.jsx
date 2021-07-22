import {UserActionTypes} from './user.types';

const INITIAL_STATE = {
    currentUser : null
}

//if state is undefined, it uses the INITIAL_STATE through this sintax below "state = INITIAL_STATE"
const userReducer = (state = INITIAL_STATE, action) => {
    //can use if statement as well
    switch(action.type) { //it will check every action's type
        case UserActionTypes.SET_CURRENT_USER: //in case of an "SET_CURRENT_USER"
            return {
                ...state, //we don't mind about the other states...
                currentUser: action.payload //set the currentUser to whatever payload is passed in
            }

        //if no alteration is made, just return the current state as before
        default: 
            return state;
    }
}

export default userReducer;