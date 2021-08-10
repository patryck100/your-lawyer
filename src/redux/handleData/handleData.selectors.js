import { createSelector } from "reselect";



const selectHandleData = (state) => state.data;


export const selectCollections = createSelector(
    [selectHandleData],
    data => data.enquiries
  );

  
export const selectIsEnquiriesFetching = createSelector(
  [selectHandleData],
  data => data.isFetching
);

//if there is no collections, isCollectionsLoaded will be false
export const selectIsEnquiriesLoaded = createSelector(
  [selectHandleData],
  data => !!data.enquiries // "!!" boolean if an object is empty or not
)
