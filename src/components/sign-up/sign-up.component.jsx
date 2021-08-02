import React from "react";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import SelectSpecialization from "../select-option/select-option.component";

import {
  auth,
  createUserProfileDocument,
  signInWithGoogle,
} from "../../firebase/firebase.utils";
import "./sign-up.styles.scss";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectTypeOfUser } from "../../redux/user/user.selectors";


class SignUp extends React.Component {
  constructor() {
    super();
    this.state = {
      TypeOfUser: "",
      license: "",
      displayName: "",
      email: "",
      password: "",
      confirmPassword: "",
      specialization: "",
    };
  }

  

  handleSubmit = async (event) => {
    event.preventDefault();

    const { displayName, email, password, confirmPassword, license, specialization } =
      this.state;

    if (password !== confirmPassword) {
      //validate password
      alert("password don't match");
      return; //do nothing
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      ); //creates a new user associated with email and password and also login

      const {TypeOfUser} = this.props;

      if (TypeOfUser === "Lawyer") { //if the user is a Lawyer, create an user profile document with license and specialization
        await createUserProfileDocument(user, { displayName, license, specialization, TypeOfUser });
      }

      await createUserProfileDocument(user, { displayName, TypeOfUser });
      

      //after awaiting new registration, clear the form back to empty
      this.setState({
        specialization: "",
        license: "",
        displayName: "",
        email: "",
        password: "",
        confirmPassword: "",
      });

      //inform the user that the register was sucessfully
      alert("Account registered successfuly");
    } catch (error) {
      //handle errors

      alert("Something went wrong!");
      console.error(error);
    }
  };

  handleChange = (event) => {
    const { name, value } = event.target;

    //dynamically set the name according to the value
    this.setState({ [name]: value });
  };

  handleCallBack = (callBack) => {
    this.setState({specialization: callBack})
  }

  render() {
    const {
      displayName,
      email,
      password,
      confirmPassword,
      license,
    } = this.state;


    return (
      <div className="sign-up">
        <h2 className="title"> I do not have an account</h2>
        <span>Sign up with your email and password</span>
        <form className="sign-up-form" onSubmit={this.handleSubmit}>
          {`${this.props.TypeOfUser}` === "Lawyer" ? ( //if user choose to register as a Lawyer, it must include a Professional License
            <div>
              <SelectSpecialization callBack={this.handleCallBack}/>
              <FormInput
                type="text"
                name="license"
                value={license}
                onChange={this.handleChange}
                label="Professional License"
                required
              />
            </div>
          ) : null}
          <FormInput
            type="text"
            name="displayName"
            value={displayName}
            onChange={this.handleChange}
            label="Display Name"
            required
          />
          <FormInput
            type="email"
            name="email"
            value={email}
            onChange={this.handleChange}
            label="Email"
            required
          />
          <FormInput
            type="password"
            name="password"
            value={password}
            onChange={this.handleChange}
            label="Password"
            required
          />
          <FormInput
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            onChange={this.handleChange}
            label="Confirm Password"
            required
          />
          <div className="buttons">
            <CustomButton type="submit"> Sign up</CustomButton>
            {`${this.props.TypeOfUser}` === "Client" ? ( //Client has the option to sign in with google
              <CustomButton
                type="button"
                onClick={signInWithGoogle}
                isGoogleSignIn
              >
                Sign up with Google
              </CustomButton>
            ) : null}
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  TypeOfUser: selectTypeOfUser,
});

export default connect(mapStateToProps)(SignUp);
