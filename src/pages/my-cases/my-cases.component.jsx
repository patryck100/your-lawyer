import React from "react";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "../../redux/user/user.selectors";

import {
  Header1,
  Header2,
} from "../sign-in-and-sign-up/sign-in-and-sign-up.styles";

import { HomePageContainer } from "../homepage/homepage.styles";

import EnquiryComponent from "../../components/enquiry/enquiry.component";
import Cards from "../../components/cards/cards.components";
import Directory from "../../components/directory/directory.component";
import { selectCollections } from "../../redux/handleData/handleData.selectors";
import { Grid } from "@material-ui/core";

class MyCases extends React.Component {
  render() {
    const { currentUser, enquiries } = this.props;

    return (
      //calling the component "Directory"
      <div>
        {`${currentUser.TypeOfUser}` === "Client" ? ( //the user need to be logged in otherwise its redirected to homepage. Can only be logged in as Client or Lawyer
          <HomePageContainer>
            <EnquiryComponent />
          </HomePageContainer>
        ) : (
          <HomePageContainer>
            <Header1> Solve a Client's enquiry </Header1>
            <Directory whatSteps="lawyer" />
            <Header2> Enquiries tagged with your specialization </Header2>
            <Grid container spacing={2} justifyContent="center">
              {enquiries.length ? ( //if the cartItems array has a length greater than 0, show the items
                enquiries.map((enquiry) => (
                  <Grid item key={enquiry.id}>
                    <Cards
                      specialization={enquiry.specialization}
                      contactInfo={enquiry.currentUser.email}
                      enquiry={enquiry.enquiry}
                    />
                  </Grid>
                ))
              ) : (
                //otherwise show empty-message
                <p>
                  {" "}
                  There is no enquiry tagged with "
                  {currentUser.specialization.toUpperCase()}" at the moment{" "}
                </p>
              )}
            </Grid>
          </HomePageContainer>
        )}
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  enquiries: selectCollections,
});

export default connect(mapStateToProps)(MyCases);
