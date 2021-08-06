import React from "react";
import { connect } from "react-redux";

import SignIn from "../../components/sign-in/sign-in.component";
import SignUp from "../../components/sign-up/sign-up.component";
import CenteredTabs from "../../components/centered-tabs/centered-tabs.components";


import {
  TypeOfUserContainer,
  SignInAndSignUpContainer,
  Header1,
  Header2,
  SelectContainer,
} from "./sign-in-and-sign-up.styles";
import { setTypeOfUser } from "../../redux/user/user.actions";

class SignInAndSignUpPage extends React.Component {
  constructor() {
    super();
    this.state = {
      typeOfUser: [
        { label: "I already have an account", value: "" },
        { label: "Sign up as a Client", value: "Client" },
        { label: "Sign up as a Lawyer", value: "Lawyer" },
      ],
      SelectedOption: "",
    };
  }

  handleChange = (SelectedOption) => {
    const { setTypeOfUser } = this.props;
    this.setState({ SelectedOption: SelectedOption.value });
    setTypeOfUser(SelectedOption.value);
  };
  

  render() {
    const { typeOfUser, SelectedOption } = this.state;

    return (
      <div>
        <Header1> You can register as a Client or as a Lawyer </Header1>
        <TypeOfUserContainer>
          <CenteredTabs />
        </TypeOfUserContainer>
        <Header2> Select an option to sign in or sign up </Header2>

        <SelectContainer
          options={typeOfUser}
          onChange={this.handleChange}
          isSearchable={false}
          placeholder="Select an option..."
        />
        {`${SelectedOption}` === "" ? ( //gives the user the option to sign in if the user already has an account
          <SignInAndSignUpContainer>
            <SignIn />
          </SignInAndSignUpContainer>
        ) : (
          //or sign up as a client or lawyer depending on the type of user is selected
          <SignInAndSignUpContainer>
            <SignUp typeOfUser={typeOfUser.value} />
          </SignInAndSignUpContainer>
        )}
      </div>
    );
  }
}

//dispatch is just a way to inform redux that this is an action obj to be sent to every reducer
const mapDispatchToProps = (dispatch) => ({
  setTypeOfUser: (TypeOfUser) => dispatch(setTypeOfUser(TypeOfUser)),
});

export default connect(null, mapDispatchToProps)(SignInAndSignUpPage);
