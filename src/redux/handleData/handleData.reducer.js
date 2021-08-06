import handleDataTypes from "./handleData.types";

const INITIAL_STATE = {
  enquiries: null,
  isFetching: false, //if the data is being fetch (same as loading)
  errorMessage: undefined,
};

const handleDataReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case handleDataTypes.FETCH_ENQUIRIES_START:
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
    case handleDataTypes.FETCH_ENQUIRIES_FAILURE:
      return {
        ...state,
        isFetching: false, //has finished fetching the data
        errorMessage: action.payload, //stores the error message catched from the failed call
      };
    //if no alteration is made, just return the current state as before
    default:
      return state;
  }
};

export default handleDataReducer;
