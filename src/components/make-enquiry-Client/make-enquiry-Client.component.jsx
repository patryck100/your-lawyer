import React from "react";
//connects with redux, allowing to use structured selectors
import { connect } from "react-redux";
//Creates an structure to send or request state from Redux
import { createStructuredSelector } from "reselect";
//Selector from redux, fetches the current state of the user
import { selectCurrentUser } from "../../redux/user/user.selectors";

//Reusing styled components
import {
  Header1,
  Header2,
  SignInAndSignUpContainer,
  SelectContainer,
} from "../../pages/sign-in-and-sign-up/sign-in-and-sign-up.styles";
import { HomePageContainer } from "../../pages/homepage/homepage.styles";

//Importing reusable components to be rendered - Some of them from Material UI
import { TextField } from "@material-ui/core";
import Card from "../Card/Card";
import CardBody from "../Card/CardBody";
import CardFooter from "../Card/CardFooter";
import CardHeader from "../Card/CardHeader";
import CustomButton from "../custom-button/custom-button.component";

//This function add enquiries to firebase
import { addCollectionAndDocuments } from "../../firebase/firebase.utils";

class EnquiryComponent extends React.Component {
  state = {
    options: [
      { label: "No idea", value: "All" },
      { label: "Employment Law", value: "employment" },
      { label: "Family Law", value: "family" },
      { label: "Immigration Law", value: "immigration" },
      { label: "Property Law", value: "property" },
      { label: "Traffic Law", value: "traffic" },
      { label: "Criminal Law", value: "criminal" },
    ],
    specialization: "",
    enquiry: "",
    title: "",
  };

  //Handle submit when clicking on the button "Send your enquiry"
  handleSubmit = async (event) => {
    //if it does not meet all the requirements in this code, does not allow it to submit the form
    event.preventDefault();
    //allows access to state and props in this class
    var { specialization, enquiry, title } = this.state;
    const { currentUser } = this.props;

    //validates if any of the fiels is empty
    if (enquiry === "" || specialization === "" || title === "") {
      if (specialization === "") {
        alert("Please Select an specialization before submiting the enquiry");
      } else if (title === "") {
        alert("Sorry, please type a title for your equiry before submiting");
      } else {
        alert("Sorry, please type in your enquiry before submiting");
      }
      return; //do nothing
    }

    try {
      //try and catch to handle any erros
      specialization = specialization.value; //only needs the value from this obj
      const createdAt = new Date(); //current date and time it was created
      await addCollectionAndDocuments({
        //upload enquiry obj to firebase
        specialization,
        title,
        enquiry,
        createdAt,
        currentUser,
      });

      //after awaiting new registration, clear the form back to empty
      this.setState({
        specialization: "",
        enquiry: "",
        title: "",
      });

      //inform the user that the enquiry was uploaded sucessfully
      alert("Enquiry uploaded successfuly");
    } catch (error) {
      //handle errors
      alert("Something went wrong!");
      console.error(error);
    }
  };

  //Handle changes from the external component "SelectContainer"
  handleCallBack = (callBack) => {
    this.setState({ specialization: callBack });
    console.log(callBack);
  };

  //handle changes made in the form
  handleChange = (event) => {
    const { value, name } = event.target;
    //dynamically set the name according to the value
    this.setState({ [name]: value });
  };

  render() {
    const { options, specialization, enquiry, title } = this.state;
    return (
      <HomePageContainer>
        <Header1> Select an specialization for your enquiry</Header1>
        <SelectContainer
          onChange={this.handleCallBack}
          options={options}
          value={specialization}
          isSearchable
          placeholder="Select an specialization..."
        />
        <SignInAndSignUpContainer style={{ width: "380px", height: "auto" }}>
          <Card>
            <CardHeader
              style={{
                width: "auto",
                height: "80px",
                textAlign: "center",
              }}
            >
              <Header2> Make your Enquiry</Header2>
            </CardHeader>
            <CardBody
              style={{
                width: "auto",
                textAlign: "center",
                margin: "auto",
                padding: "20px 0",
                marginBottom: "15px",
              }}
            >
              <div style={{ marginBottom: "10px" }}>
                <TextField
                  name="title"
                  label="TITLE"
                  value={title}
                  placeholder="Title to your enquiry..."
                  onChange={this.handleChange}
                  variant="outlined"
                  required
                />
              </div>
              <div>
                <TextField
                  multiline
                  name="enquiry"
                  label="ENQUIRY"
                  value={enquiry}
                  placeholder="Make your enquiry here"
                  onChange={this.handleChange}
                  variant="outlined"
                  required
                />
              </div>
            </CardBody>
            <CardFooter
              style={{
                paddingTop: "0rem",
                justifyContent: "flex-end", //place the button on the right end of the card component
              }}
            >
              <CustomButton type="submit" onClick={this.handleSubmit}>
                Send your Enquiry
              </CustomButton>
            </CardFooter>
          </Card>
        </SignInAndSignUpContainer>
      </HomePageContainer>
    );
  }
}

//Gets the current state of the user from Redux
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

//by exporting, it allows this component to be called from another components
export default connect(mapStateToProps)(EnquiryComponent);
