import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import { selectCollections } from "../../redux/handleData/handleData.selectors";

import {
  Header1,
  Header2,
} from "../../pages/sign-in-and-sign-up/sign-in-and-sign-up.styles";
import { HomePageContainer } from "../../pages/homepage/homepage.styles";
import { Grid } from "@material-ui/core";
import Cards from "../cards/cards.components";
import Directory from "../directory/directory.component";
import { SearchBox } from "../search-box/search-box.components";

class SearchEnquiry extends React.Component {
  state = {
    enquiries: [],
    title: "",
    searchField: "",
  };

  componentDidMount(){
      const {enquiries} = this.props;
      console.log(enquiries);
      this.setState({enquiries: enquiries});
  }

  handleChange = (event) => {
    this.setState({ searchField: event.target.value });
    console.log(event.target.value);
  };

  render() {
    const { currentUser} = this.props;
    const {searchField, enquiries } = this.state;


    const filteredEnquiries = enquiries.filter((enquiry) =>
      enquiry.title.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <HomePageContainer>
        <Header1> Solve a Client's enquiry </Header1>
        <Directory whatSteps="lawyer" />
        <Header2> Enquiries tagged with your specialization </Header2>
        <SearchBox
          placeholder="Search enquiry"
          handleChange={this.handleChange}
        />
        <Grid container spacing={2} justifyContent="center">
          {filteredEnquiries.length ? ( //if the cartItems array has a length greater than 0, show the items
            filteredEnquiries.map((enquiry) => (
              <Grid item key={enquiry.id}>
                <Cards
                  title={enquiry.title}
                  specialization={enquiry.specialization}
                  contactInfo={enquiry.currentUser.email}
                  enquiry={enquiry.enquiry}
                />
              </Grid>
            ))
          ) : (
            //otherwise show empty-message
            <p>
              There is no enquiry tagged with "
              {currentUser.specialization.toUpperCase()}" at the moment
            </p>
          )}
        </Grid>
      </HomePageContainer>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  enquiries: selectCollections,
});



export default connect(mapStateToProps)(SearchEnquiry);
