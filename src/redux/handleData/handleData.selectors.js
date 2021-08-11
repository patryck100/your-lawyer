/*
 *Selectors can compute derived data, allowing Redux to store the minimal possible state.
 *Selectors are efficient. A selector is not recomputed unless one of its arguments changes.
 *Selectors are composable. They can be used as input to other selectors. 
 */
import { createSelector } from "reselect";

 //returns the data object from state
const selectHandleData = (state) => state.data;

//returns the collections of Enquiries for an specialization
export const selectCollections = createSelector(
    [selectHandleData],
    data => data.enquiries
  );

//returns the collections of Enquiries for an specialization
export const selectCollectionsAll = createSelector(
  [selectHandleData],
  data => data.enquiriesAll
);

//returns boolean if the Enquiries are still being fetched or not
export const selectIsEnquiriesFetching = createSelector(
  [selectHandleData],
  data => data.isFetching
);

//if there is no collections, isCollectionsLoaded will be false
export const selectIsEnquiriesLoaded = createSelector(
  [selectHandleData],
  data => !!data.enquiries // "!!" boolean if an object is empty or not
)
