//uses this to connect with Redux and have access to the state of the application
import { connect } from "react-redux";

import { createStructuredSelector } from "reselect";

/* Composes single-argument functions from right to left. 
 * The rightmost function can take multiple arguments as it provides
 * the signature for the resulting composite function.
 */
import { compose } from "redux";

import { selectIsEnquiriesLoaded } from "../../redux/handleData/handleData.selectors";
import WithSpinner from "../../components/with-spinner/with-spinner.component";
import EnquiriesPage from "./enquiries-page.component";


//returns boolean to informa if the data has already loaded or not
const mapStateToProps = createStructuredSelector({
    /* it only loads the spinner if the boolean is true, in this case if there is no enquiries 
    the boolean will be false. For this reason the value has to be inverse */
    isLoading: (state) => !selectIsEnquiriesLoaded(state) //inverse the value from "loading" using (!) symbol
});


//Wraps the EnquiriesPage using the "mapStateToProps" as argument, and depending on
//the argument condition it can render the page or a spinner to inform the user that
//whatever data is still being loaded
const EnquiriesPageContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(EnquiriesPage);

//by exporting, it allows this component to be called from another components
export default EnquiriesPageContainer;