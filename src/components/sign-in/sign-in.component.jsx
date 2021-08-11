import React from "react";

//Importing reusable components to be rendered
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

//Reusing styled components
import { SignInContainer, SignInTitle, ButtonsBarContainer } from "./sign-in.styles";

//Utils to allow connection to database
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

    //allows access to current state of this class
    const {email, password} = this.state;

    try { //try and catch to handle errors
      //Validate login through firebase API
      await auth.signInWithEmailAndPassword(email, password);


        //clear the fields
        this.setState({ email: "", password: "" });
       
    } catch (error) { // if try fails, handle errors
        alert("Sorry, email or password incorret!")
        console.log(error);
    }

  };

  //Update state of this class accoring to changes in the form
  handleChange = (event) => {
    const { value, name } = event.target;
    //dynamically set the name according to the value
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

//by exporting, it allows this component to be called from another components
export default SignIn;
