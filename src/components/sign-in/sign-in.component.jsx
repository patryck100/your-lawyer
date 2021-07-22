import React from "react";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import "./sign-in.styles.scss";

import {auth, signInWithGoogle } from "../../firebase/firebase.utils";

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }

  //prevent the submit action 
  handleSubmit = async (event) => {
    event.preventDefault();

    //collects the email and password from the state (from the fields)
    const {email, password} = this.state;

    try {
        await auth.signInWithEmailAndPassword(email, password);

        //clear the fields
        this.setState({ email: "", password: "" });
    } catch (error) {
        console.log(error);
    }

    
  };

  handleChange = (event) => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="sign-in">
        <h2> I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            type="email"
            value={this.state.email}
            label="email"
            handleChange={this.handleChange}
            required
          />

          <FormInput
            name="password"
            type="password"
            value={this.state.password}
            label="password"
            handleChange={this.handleChange}
            required
          />
          <div className="buttons">
            <CustomButton type="submit"> Sign in</CustomButton>
            <CustomButton type='button' onClick={signInWithGoogle} isGoogleSignIn>
              Sign in with Google
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
