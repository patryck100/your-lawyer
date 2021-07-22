/*
 *Selectors can compute derived data, allowing Redux to store the minimal possible state.
 *Selectors are efficient. A selector is not recomputed unless one of its arguments changes.
 *Selectors are composable. They can be used as input to other selectors. 
 */
 import { createSelector } from "reselect";

 //returns the user object from state
 const selectUser = state => state.user;
 
 
 
 export const selectCurrentUser = createSelector(
     [selectUser],
     user => user.currentUser
 );