import React from "react";

import Directory from "../../components/directory/directory.component";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "../../redux/user/user.selectors";

import {
  Header1,
  Header2,
  SelectContainer,
} from "../sign-in-and-sign-up/sign-in-and-sign-up.styles";
import FormInput from "../../components/form-input/form-input.component";

import { HomePageContainer } from "../homepage/homepage.styles";

class MyCases extends React.Component {
  state = {
    options: [
      { label: "No idea", value: "" },
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

  handleCallBack = (callBack) => {
    this.setState({ specialization: callBack });
  };

  handleChange = (event) => {
    this.setState({ enquiry: event.target.value });
    console.log(event.target.value);
  };

  render() {
    const { options, enquiry } = this.state;
    const { currentUser } = this.props;
    return (
      //calling the component "Directory"
      <HomePageContainer>
        {`${currentUser.TypeOfUser}` === "Client" ? ( //the user need to be logged in otherwise its redirected to homepage. Can only be logged in as Client or Lawyer
          <Header1> You are logged in as a Client </Header1>
        ) : (
          <Header1> You are logged in as a Lawyer </Header1>
        )}

        <Directory />
        <div>
          <Header2> Select an specialization for your enquiry</Header2>
          <SelectContainer
            onChange={this.handleCallBack}
            options={options}
            isSearchable
            placeholder="Select an specialization..."
          />
          <FormInput
            type="text"
            name="license"
            value={enquiry}
            onChange={this.handleChange}
            label="Make your enquiry here"
            required
          />
        </div>
      </HomePageContainer>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

export default connect(mapStateToProps)(MyCases);
