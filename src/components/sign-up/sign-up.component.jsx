import React from "react";

//Importing reusable components to be rendered
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import SelectSpecialization from "../select-option/select-option.component";

//Utils to allow connection to database
import {
  auth,
  createUserProfileDocument,
  signInWithGoogle,
} from "../../firebase/firebase.utils";

//Reusing styled components
import { SignUpContainer, SignUpTitle } from "./sign-up.styles.jsx";
import { ButtonsBarContainer } from "../sign-in/sign-in.styles";

//Connection with redux to update state in the entire application
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectTypeOfUser } from "../../redux/user/user.selectors";


class SignUp extends React.Component {
  constructor(props) {
    super(props);
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

  //When the user click on the sign up button
  handleSubmit = async (event) => {
    //if it does not meet all the requirements in this code, does not allow it to submit the form
    event.preventDefault(); 

    //allows this function to have access to the state in this class
    const { displayName, email, password, confirmPassword, license, specialization } =
      this.state;
    const {TypeOfUser} = this.props;

    if (password !== confirmPassword) {
      //validate password
      alert("password don't match");
      return; //do nothing
    }

    try { //uses try and catch to handle errors
      //creates a new user associated with email and password and also login
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );  

      if (TypeOfUser === "Lawyer") { //if the user is a Lawyer, create a user profile document with license and specialization
        await createUserProfileDocument(user, { displayName, license, specialization, TypeOfUser });
      } else { //otherwise just the regular user information "display name and the type of user"
        await createUserProfileDocument(user, { displayName, TypeOfUser });
      }

      //after awaiting new registration, clear the form back to empty
      this.setState({
        specialization: "",
        license: "",
        displayName: "",
        email: "",
        password: "",
        confirmPassword: "",
      });

      //inform the user that the register was sucessfull
      alert("Account registered successfuly");
    } catch (error) {
      //otherwise handle errors

      alert("Sorry, something went wrong! " + error);
      console.error(error);
    }
  };

  //every time the input change in the form, update the state accordly
  handleChange = (event) => {
    const { name, value } = event.target;
    //dynamically set the name according to the value
    this.setState({ [name]: value });
  };

  //Handle changes from the external component "SelectSpecialization"
  handleCallBack = (callBack) => {
    this.setState({specialization: callBack})
  }

  render() {
    //gives access to the current states of this class
    const {
      displayName,
      email,
      password,
      confirmPassword,
      license,
    } = this.state;


    return (
      <SignUpContainer>
        <SignUpTitle> I do not have an account</SignUpTitle>
        <span>Sign up with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          {`${this.props.TypeOfUser}` === "Lawyer" ? ( //if user choose to register as a Lawyer, it must include a Professional License
            <div>
              <SelectSpecialization callBack={this.handleCallBack} />
              <FormInput
                type="text"
                name="license"
                value={license}
                onChange={this.handleChange}
                label="Professional License"
                required
              />
            </div>
          ) : null /* Otherwise don't need to render anything */}
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
          <ButtonsBarContainer>
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
          </ButtonsBarContainer>
        </form>
      </SignUpContainer>
    );
  }
}

//Gets the current Type of user from Redux
const mapStateToProps = createStructuredSelector({
  TypeOfUser: selectTypeOfUser,
});

//by exporting, it allows this component to be called from another components
export default connect(mapStateToProps)(SignUp);
