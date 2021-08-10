import React from 'react';
import { SpinnerContainer, SpinnerOverlay } from './with-spinner.styles';

//Returns a loading spinner if "isLoading" boolean is set to true, otherwise returns the wrapped component
const WithSpinner = WrappedComponent => {
    const Spinner = ({isLoading, ...otherProps}) => {
    //if loading is true, returns the spinner component
    return isLoading ? (
        <SpinnerOverlay>
            <SpinnerContainer/>
        </SpinnerOverlay>
    ) : ( //otherwise returns whatever component was wrapped
        <WrappedComponent {...otherProps}/>
    )
}
    return Spinner;
};

export default WithSpinner;