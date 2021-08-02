import React from "react";
import Select from "react-select";
import { connect } from "react-redux";

import SignIn from "../../components/sign-in/sign-in.component";
import SignUp from "../../components/sign-up/sign-up.component";
import CenteredTabs from "../../components/centered-tabs/centered-tabs.components";

import "./sign-in-and-sign-up.styles.scss";
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
    setTypeOfUser(SelectedOption);
  };
  

  render() {
    const { typeOfUser, SelectedOption } = this.state;

    return (
      <div>
        <div className="register-header">
          <h1> You can register as a Client or as a Lawyer </h1>
        </div>
        <div className="type-of-user">
          <CenteredTabs />
        </div>
        <div className="register-header">
          <h2> Select an option to sign in or sign up </h2>
        </div>

        <Select
          className="select"
          options={typeOfUser}
          onChange={this.handleChange}
          isSearchable={false}
          placeholder="Select an option..."
        />
        {`${SelectedOption}` === "" ? ( //gives the user the option to sign in if the user already has an account
          <div className="sign-in-and-sign-up">
            <SignIn />
          </div>
        ) : (
          //or sign up as a client or lawyer depending on the type of user is selected
          <div className="sign-in-and-sign-up">
            <SignUp typeOfUser={typeOfUser.value} />
          </div>
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
