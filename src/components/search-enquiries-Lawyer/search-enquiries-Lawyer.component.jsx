import React from "react";

//connects with redux, allowing to use structured selectors
import { connect } from "react-redux";
//Creates an structure to send or request state from Redux
import { createStructuredSelector } from "reselect";

//Selects current state from redux
import { selectCurrentUser } from "../../redux/user/user.selectors";
import { selectCollections, selectCollectionsAll } from "../../redux/handleData/handleData.selectors";

//importing styled components
import {
  Header1,
  Header2,
} from "../../pages/sign-in-and-sign-up/sign-in-and-sign-up.styles";
import { HomePageContainer } from "../../pages/homepage/homepage.styles";

//Reusable components to be rendered
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
      //allows access to props coming from Redux
      const {enquiries, enquiriesAll} = this.props;
      //Setting variables to initialise "while" lops
      var maximumLength = 0;
      var maximumLength2 = 0;
      //Temporary array to accumulate the value of 2 different arrays
      var temporaryArray = [];
      //this will fill the temporary array with enquiries coming from the Lawyer specialization
      while (enquiries.length > maximumLength) { 
        temporaryArray[maximumLength] = enquiries[maximumLength]
        maximumLength++;
      }
      //this will fill the temporary array with enquiries coming from All collections of enquiries
      while (enquiriesAll.length > maximumLength2){ //keep populating the temporary array from where it stopped on the last loop
        temporaryArray[maximumLength] = enquiriesAll[maximumLength2];
        //increases both values of maximumLength so then it can keep populating in the right order
        maximumLength++;
        maximumLength2++;
      }
      //set the "enquiries" statement with the enquiries coming from both specialization collection and All collection
      this.setState({enquiries: temporaryArray});  
  }

  //handles any changes done in the search field
  handleChange = (event) => {
    this.setState({ searchField: event.target.value });
  };

  render() {
    //allows access to the props and state from this class
    const { currentUser} = this.props;
    const {searchField, enquiries } = this.state;

    //Filter out any object that does not match with what is written in the searchField
    const filteredEnquiries = enquiries.filter((enquiry) =>
      enquiry.title.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <HomePageContainer>
        <Header1> Solve a Client's enquiry </Header1>
        <Directory whatSteps="lawyer" /> {/* "whatSteps" was a way to inform Redux that I want the images related to Lawyer */}
        <Header2> Enquiries tagged with your specialization </Header2>
        <SearchBox
          placeholder="Search by title"
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

//Gets information from Redux
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  enquiries: selectCollections,
  enquiriesAll: selectCollectionsAll,
});


//by exporting, it allows this component to be called from another components
export default connect(mapStateToProps)(SearchEnquiry);
