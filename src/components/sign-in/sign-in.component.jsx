import React from "react";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { SignInContainer, SignInTitle, ButtonsBarContainer } from "./sign-in.styles";

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
      /* const { user } =  */ await auth.signInWithEmailAndPassword(email, password);
     // const userRef = firestore.doc(`users/${user.uid}`);
     // const displayName = await (await userRef.get()).data().displayName;

        //clear the fields
        this.setState({ email: "", password: "" });
       // alert("Login successful! Hello " + displayName);
    } catch (error) {
        alert("Sorry, email or password incorret!")
        console.log(error);
    }

    
  };

  handleChange = (event) => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    return (
      <SignInContainer>
        <SignInTitle> I already have an account</SignInTitle>
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
          <ButtonsBarContainer>
            <CustomButton type="submit"> Sign in</CustomButton>
            <CustomButton type='button' onClick={signInWithGoogle} isGoogleSignIn>
              Sign in with Google
            </CustomButton>
          </ButtonsBarContainer>
        </form>
      </SignInContainer>
    );
  }
}

export default SignIn;
