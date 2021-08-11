import React from "react";

//connects with redux, allowing to use structured selectors
import { connect } from "react-redux";
//Creates an structure to send or request state from Redux
import { createStructuredSelector } from "reselect";

//Selector from redux, fetches the current state of the user
import { selectCurrentUser } from "../../redux/user/user.selectors";

//Components to be rendered in the page
import EnquiryComponent from "../../components/make-enquiry-Client/make-enquiry-Client.component";
import SearchEnquiry from "../../components/search-enquiries-Lawyer/search-enquiries-Lawyer.component";

class EnquiriesPage extends React.Component {

  render() {
    //gives access to the state of the user from Redux
    const { currentUser} = this.props;

    //the user need to be logged in otherwise its redirected to homepage. Can only be logged in as Client or Lawyer
    return (
      <div>
        {`${currentUser.TypeOfUser}` === "Client" ? ( //if the user is logged in as a Client render something, otherwise something else
            <EnquiryComponent />
        ) : (
          <SearchEnquiry/>
        )}
      </div>
    );
  }
}

//selects the current state of the user from Redux
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});



//by exporting, it allows this component to be called from another components
export default connect(mapStateToProps)(EnquiriesPage);
