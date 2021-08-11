import React from "react";

//uses this to connect with Redux and have access to the state of the application
import { connect } from "react-redux";

//importing components to be rendered in the page
import SignIn from "../../components/sign-in/sign-in.component";
import SignUp from "../../components/sign-up/sign-up.component";
import CenteredTabs from "../../components/centered-tabs/centered-tabs.components";

//importing styled components
import {
  TypeOfUserContainer,
  SignInAndSignUpContainer,
  Header1,
  Header2,
  SelectContainer,
} from "./sign-in-and-sign-up.styles";

//Dispatch the type of user to Redux
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

  //Whatever type of user is selected here, is set to the state of the page and the state in Redux, to inform other
  //components that might use this same state
  handleChange = (SelectedOption) => {
    const { setTypeOfUser } = this.props;
    this.setState({ SelectedOption: SelectedOption.value });
    setTypeOfUser(SelectedOption.value);
  };
  

  render() {
    //makes the state of this class accessible by the render method
    const { typeOfUser, SelectedOption } = this.state;

    return ( //content to be rendered goes here
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
          //or sign up as a client or lawyer depending on the type of user selected
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
  //updates the state of the type of user on Redux
  setTypeOfUser: (TypeOfUser) => dispatch(setTypeOfUser(TypeOfUser)),
});

//by exporting, it allows this component to be called from another components
export default connect(null, mapDispatchToProps)(SignInAndSignUpPage);
