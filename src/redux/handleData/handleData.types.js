const handleDataTypes = {
    FETCH_ENQUIRIES_START: 'FETCH_ENQUIRIES_START', //before fetching any data, initial state (same as onNext)
    FETCH_ENQUIRIES_SUCCESS: 'FETCH_ENQUIRIES_SUCCESS', //when the data is fetch (same as onComplete)
    FETCH_ENQUIRIES_ALL_SUCCESS: 'FETCH_ENQUIRIES_ALL_SUCCESS', //same as above, but for ALL specialisation collection
    FETCH_ENQUIRIES_FAILURE: 'FETCH_ENQUIRIES_FAILURE', //in case of failure, handle it (same as onError)
    SET_ENQUIRIES_NULL: 'SET_ENQUIRIES_NULL', //set the Enquiries back to null to avoid data leaking
};

//other components can access this function when it is exported
export default handleDataTypes;