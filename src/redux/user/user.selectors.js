/*
 *Selectors can compute derived data, allowing Redux to store the minimal possible state.
 *Selectors are efficient. A selector is not recomputed unless one of its arguments changes.
 *Selectors are composable. They can be used as input to other selectors. 
 */
 import { createSelector } from "reselect"; //has to import "yarn add reselect"

 //returns the user object from state
 const selectUser = state => state.user;

 //returns the type of user "Client or Lawyer"
 const typeOfUser = state => state.user.TypeOfUser;

 
 //When this function is called, it returns the state of the current user
 export const selectCurrentUser = createSelector(
     [selectUser],
     user => user.currentUser
 );

 //When this function is called, it returns the type of user logged in or who will sign up
 export const selectTypeOfUser = createSelector(
     [typeOfUser],
     TypeOfUser => TypeOfUser
 );

