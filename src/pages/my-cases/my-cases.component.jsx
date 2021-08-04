import React from "react";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "../../redux/user/user.selectors";

import { Header1 } from "../sign-in-and-sign-up/sign-in-and-sign-up.styles";

import { HomePageContainer } from "../homepage/homepage.styles";

import EnquiryComponent from "../../components/enquiry/enquiry.component";

const MyCases = (currentUser) => (
  //calling the component "Directory"
  <HomePageContainer>
    {`${currentUser.currentUser.TypeOfUser}` === "Client" ? ( //the user need to be logged in otherwise its redirected to homepage. Can only be logged in as Client or Lawyer
      <div>
        <EnquiryComponent />
      </div>
    ) : (
      <Header1> You are logged in as a Lawyer </Header1>
    )}
  </HomePageContainer>
);

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

export default connect(mapStateToProps)(MyCases);
