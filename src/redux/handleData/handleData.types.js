const handleDataTypes = {
    FETCH_ENQUIRIES_START: 'FETCH_ENQUIRIES_START', //before fetching any data, initial state (same as onNext)
    FETCH_ENQUIRIES_SUCCESS: 'FETCH_ENQUIRIES_SUCCESS', //when the data is fetch (same as onComplete)
    FETCH_ENQUIRIES_FAILURE: 'FETCH_ENQUIRIES_FAILURE', //in case of failure, handle it (same as onError)
};

export default handleDataTypes;