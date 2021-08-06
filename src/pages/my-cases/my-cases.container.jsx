import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";

import { selectIsEnquiriesLoaded } from "../../redux/handleData/handleData.selectors";
import WithSpinner from "../../components/with-spinner/with-spinner.component";
import MyCases from "./my-cases.component";


//returns boolean to informa if the data is being fetch or has finished fetching data
//use it to set the withSpinner when it is true
const mapStateToProps = createStructuredSelector({
    /* it only loads the spinner if the boolean is true, in this case if there is no enquiries 
    the boolean will be false. For this reason the value has to be inverse */
    isLoading: (state) => !selectIsEnquiriesLoaded(state) //inverse the value from "loading"
});

/* Composes single-argument functions from right to left. 
 * The rightmost function can take multiple arguments as it provides
 * the signature for the resulting composite function.
 */
const MyCasesContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(MyCases);

export default MyCasesContainer;