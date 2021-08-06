import { createSelector } from "reselect";



const selectHandleData = (state) => state.data;


export const selectCollections = createSelector(
    [selectHandleData],
    data => data.enquiries
  );

  export const selectCollectionsForPreview = createSelector(
    [selectHandleData],
    //get the values from the object in an specific key
    (enquiries) => //handle error of fetching data by render the items if exist, otherwise render null value 
    enquiries ? Object.keys(enquiries).map((key) => enquiries[key]) : []
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
