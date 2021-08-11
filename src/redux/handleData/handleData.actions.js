import handleDataTypes from "./handleData.types";
import {
  firestore,
  convertCollectionsSnapshotToMap,
} from "../../firebase/firebase.utils";

//set the Enquiries back to null to avoid data leaking
export const setEnquiriesToNull = () => ({
  type: handleDataTypes.SET_ENQUIRIES_NULL,
});

export const fetchEnquiriesStart = () => ({
  //does not return payload because it is just to update the state of "isFetching" or not
  type: handleDataTypes.FETCH_ENQUIRIES_START,
});

//updates the state of the enquiries and set "isFetching" to false because the data now will be already loaded
export const fetchEnquiriesSuccess = (collectionsMap) => ({
  type: handleDataTypes.FETCH_ENQUIRIES_SUCCESS,
  payload: collectionsMap,
});

//updates the state of the enquiries and set "isFetching" to false because the data now will be already loaded
export const fetchEnquiriesSuccessAll = (collectionsMap) => ({
  type: handleDataTypes.FETCH_ENQUIRIES_ALL_SUCCESS,
  payload: collectionsMap,
});

//in case of failure, it passes the error message
export const fetchEnquiriesFailure = (errorMessage) => ({
  type: handleDataTypes.FETCH_ENQUIRIES_FAILURE,
  payload: errorMessage,
});

//redux-thunk allows the middleware to dispatch functions instead of objects
export const fetchEnquiriesStartAsync = (specialization) => {
  //returns a function
  return (dispatch) => {
    const collectionRef = firestore.collection(specialization);
    const collectionRefAll = firestore.collection("All");
    dispatch(fetchEnquiriesStart()); //dispatch the collectionsStart to inform that it has started fetching data

    //then begins the asyn request
    collectionRef
      .get()
      .then((snapshot) => {
        const collectionsMap = convertCollectionsSnapshotToMap(snapshot); //gets the collections of enquiries from firestore in a readable way
        dispatch(fetchEnquiriesSuccess(collectionsMap)); //updates the collection with the data fetch from firestore
      }) //else if anything goes wrong, it catches the error and dispatches the error message to the fetchCollectionFailure function
      .catch((error) => dispatch(fetchEnquiriesFailure(error.message)));
      
    //then begins the asyn request
    collectionRefAll
      .get()
      .then((snapshot) => {
        const collectionsMap = convertCollectionsSnapshotToMap(snapshot); //gets the collections of enquiries from firestore in a readable way
        dispatch(fetchEnquiriesSuccessAll(collectionsMap)); //updates the collection with the data fetch from firestore
      }) //else if anything goes wrong, it catches the error and dispatches the error message to the fetchCollectionFailure function
      .catch((error) => dispatch(fetchEnquiriesFailure(error.message)));
  };
};

