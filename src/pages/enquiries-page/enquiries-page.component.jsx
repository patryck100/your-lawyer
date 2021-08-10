import React from "react";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "../../redux/user/user.selectors";


import EnquiryComponent from "../../components/make-enquiry/enquiry.component";
import SearchEnquiry from "../../components/search-enquiries/search-enquiries.component";

class EnquiriesPage extends React.Component {

  render() {
    const { currentUser} = this.props;

    return (
      //calling the component "Directory"
      <div>
        {`${currentUser.TypeOfUser}` === "Client" ? ( //the user need to be logged in otherwise its redirected to homepage. Can only be logged in as Client or Lawyer
            <EnquiryComponent />
        ) : (
          <SearchEnquiry/>
        )}
      </div>
    );
  }
}


const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});




export default connect(mapStateToProps)(EnquiriesPage);
