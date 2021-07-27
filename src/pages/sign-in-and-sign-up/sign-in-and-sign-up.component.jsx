import React from "react";
import Select from "react-select";

import SignIn from "../../components/sign-in/sign-in.component";
import SignUp from "../../components/sign-up/sign-up.component";

import "./sign-in-and-sign-up.styles.scss";

class SignInAndSignUpPage extends React.Component {
  constructor() {
    super();
    this.state = {
      SelectedOption: null,
    };
  }

  typeOfUser = [
    { label: "I already have an account", value: "" },
    { label: "Client", value: 1 },
    { label: "Lawyer", value: 2 },
  ];

  handleChange = (e) => {
    this.setState({ SelectedOption: e.target });
    console.log(this.SelectedOption);
  };

  render() {
    return (
      <div>
        <div className="register-header">
          <h1> You can register as a Client or as a Lawyer </h1>
        </div>
        <div className="type-of-user">
          <div className="client-option">
            <h2>Client</h2>
            <p>
              Are you looking for a solution to your judirical case? By
              registering as a client:
              <br />- You can select a specialization and Enquiry your case to
              professional Lawyers
              <br />- Specialist Lawyers registered in the app will contact you
              <br />- Make a deal and solve your case
              <br />- Rate our Lawyers and help us to improve our service
            </p>
          </div>

          <div className="lawyer-option">
            <h2>Lawyer</h2>
            <p>
              Are you looking for professional exposure? By registering as a
              Lawyer:
              <br />- You can register your specialization and receive cases
              from our Clients
              <br />- Consult your cases
              <br />- Solve cases and gain professional exposure
            </p>
          </div>
        </div>
        <hr />
        <div className="register-header">
          <h1> Select the type of your account </h1>
        </div>

        <Select
          value={this.SelectedOption}
          className="select"
          options={this.typeOfUser}
          onChange={this.handleChange}
          isSearchable={false}
          placeholder="Select type of user..."
        />
        <div className="sign-in-and-sign-up">
          <SignIn />
          <SignUp />
        </div>
        {/*`${this.SelectedOption}` === "" ? ( //gives the user the option to sign out in case he/she is sign in already
          <div className="sign-in-and-sign-up">
            <SignIn />
          </div>
        ) : (
          //otherwise it points to the page to sign in
          <div className="sign-in-and-sign-up">
            <SignUp />
          </div>
        )*/}
      </div>
    );
  }
}

export default SignInAndSignUpPage;
