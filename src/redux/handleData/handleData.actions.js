import handleDataTypes from "./handleData.types";
import {
  firestore,
  convertCollectionsSnapshotToMap,
} from "../../firebase/firebase.utils";

export const fetchEnquiriesStart = () => ({
  //does not return payload because it is just to update the state of "isFetching" or not
  type: handleDataTypes.FETCH_ENQUIRIES_START,
});

export const fetchEnquiriesSuccess = (collectionsMap) => ({
  type: handleDataTypes.FETCH_ENQUIRIES_SUCCESS,
  payload: collectionsMap,
});

export const fetchEnquiriesFailure = (errorMessage) => ({
  type: handleDataTypes.FETCH_ENQUIRIES_FAILURE,
  payload: errorMessage,
});

//redux-thunk allows the middleware to dispatch functions instead of objects
export const fetchEnquiriesStartAsync = (specialization) => {
  //returns a function
  return (dispatch) => {
    const collectionRef = firestore.collection(specialization);
    dispatch(fetchEnquiriesStart()); //dispatch the collectionsStart to inform that it has started fetching data

    //then begins the asyn request
    collectionRef
      .get()
      .then((snapshot) => {
        const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
        dispatch(fetchEnquiriesSuccess(collectionsMap)); //updates the collection with the data fetch from firestore
      }) //else if anything goes wrong, if catch the error and dispatch the error message to the fetchCollectionFailure function
      .catch((error) => dispatch(fetchEnquiriesFailure(error.message)));
  };
};

