import {UserActionTypes} from './user.types';

export const setCurrentUser = user => ({
    type: UserActionTypes.SET_CURRENT_USER,
    payload: user
});

export const setTypeOfUser = TypeOfUser => ({
    type: UserActionTypes.SET_TYPE_OF_USER,
    payload: TypeOfUser
});

