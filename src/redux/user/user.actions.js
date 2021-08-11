import {UserActionTypes} from './user.types'; 

//When this action is called, updates the state of the current user
export const setCurrentUser = user => ({
    type: UserActionTypes.SET_CURRENT_USER,
    payload: user
});

//When this action is called, updates the type of user "Client or Lawyer"
export const setTypeOfUser = TypeOfUser => ({
    type: UserActionTypes.SET_TYPE_OF_USER,
    payload: TypeOfUser
});

