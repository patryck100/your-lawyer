import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "../../redux/user/user.selectors";

import {Header1, Header2, SignInAndSignUpContainer,SelectContainer
} from "../../pages/sign-in-and-sign-up/sign-in-and-sign-up.styles";

import { TextField } from "@material-ui/core";
import Card from "../Card/Card";
import CardBody from "../Card/CardBody";
import CardFooter from "../Card/CardFooter";
import CardHeader from "../Card/CardHeader";
import CustomButton from "../custom-button/custom-button.component";
import { addCollectionAndDocuments } from "../../firebase/firebase.utils";

class EnquiryComponent extends React.Component {
  state = {
    options: [
      { label: "No idea", value: "*" },
      { label: "Employment Law", value: "employment" },
      { label: "Family Law", value: "family" },
      { label: "Immigration Law", value: "immigration" },
      { label: "Property Law", value: "property" },
      { label: "Traffic Law", value: "traffic" },
      { label: "Criminal Law", value: "criminal" },
    ],
    specialization: "",
    enquiry: "",
  };

  handleSubmit = async (event) => {
    event.preventDefault();

    var { specialization, enquiry } =
      this.state;

    if (enquiry === "" || specialization === "") {
      if(enquiry === ""){
        alert("Sorry, you can enquiry an empty field");
      } else {
        alert("Please Select an specialization before submiting the enquiry")
      }
      return; //do nothing
    }

    try {
      const {currentUser} = this.props;
      specialization = specialization.value; //only needs the value from this obj
      const createdAt = new Date(); //current date and time it was created
      await addCollectionAndDocuments({ specialization, enquiry, createdAt, currentUser });
      

      //after awaiting new registration, clear the form back to empty
      this.setState({
        specialization: "",
        enquiry: "",
      });

      //inform the user that the register was sucessfully
      alert("Enquiry upload successfuly");
    } catch (error) {
      //handle errors
      alert("Something went wrong!");
      console.error(error);
    }
  };

  handleCallBack = (callBack) => {
    this.setState({ specialization: callBack });
    console.log(callBack)
  };

  handleChange = (event) => {
    this.setState({ enquiry: event.target.value });
    console.log(event.target.value);
  };

  render() {
    const { options, specialization, enquiry } = this.state;
    return (
      <div>
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
              <TextField
                multiline
                label="ENQUIRY"
                value={enquiry}
                placeholder="Make your enquiry here"
                onChange={this.handleChange}
                variant="outlined"
                required
              />
            </CardBody>
            <CardFooter
              style={{
                paddingTop: "0rem",
                justifyContent: "flex-end", //allows the buttom to be place on the right end of the card component
              }}
            >
              <CustomButton type="submit" onClick={this.handleSubmit}>Send your Enquiry</CustomButton>
            </CardFooter>
          </Card>
        </SignInAndSignUpContainer>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

export default connect(mapStateToProps)(EnquiryComponent);
