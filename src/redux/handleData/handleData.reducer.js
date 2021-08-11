import handleDataTypes from "./handleData.types";

//Initial state is set to null to avoid "undefined" errors
const INITIAL_STATE = {
  enquiries: null,
  enquiriesAll: null,
  isFetching: false, //if the data is being fetch (same as loading)
  errorMessage: undefined,
};

//if state is undefined, it uses the INITIAL_STATE through this sintax below "state = INITIAL_STATE"
const handleDataReducer = (state = INITIAL_STATE, action) => {
  //can use if statement as well, but switch seem to be more readable
  switch (
    action.type //it will check every action's type
  ) {
    case handleDataTypes.FETCH_ENQUIRIES_START: //in case of...
      return {
        ...state,
        isFetching: true,
      };
    case handleDataTypes.FETCH_ENQUIRIES_SUCCESS:
      return {
        ...state,
        isFetching: false, //has finished fetching the data
        enquiries: action.payload, //updates the collections
      };
    case handleDataTypes.FETCH_ENQUIRIES_ALL_SUCCESS:
      return {
        ...state,
        isFetching: false, //has finished fetching the data
        enquiriesAll: action.payload, //updates the collections
      };
    case handleDataTypes.FETCH_ENQUIRIES_FAILURE:
      return {
        ...state,
        isFetching: false, //has finished fetching the data
        errorMessage: action.payload, //stores the error message catched from the failed call
      };
    case handleDataTypes.SET_ENQUIRIES_NULL:
      return {
        ...state,
        enquiries: null,
      };
    //if no alteration is made, just return the current state as before
    default:
      return state;
  }
};

//by exporting, it allows this function to be called from another components
export default handleDataReducer;
