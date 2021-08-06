import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import "./App.css";

import { firestore } from "./firebase/firebase.utils";

import Header from "./components/header/header.component";
import HomePage from "./pages/homepage/homepage.component";
import Footer from "./components/Footer/Footer";
//import MyCasesContainer from "./pages/my-cases/my-cases.container";
import MyCases from "./pages/my-cases/my-cases.component";

import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { setCurrentUser, setTypeOfUser } from "./redux/user/user.actions";
import { selectCurrentUser } from "./redux/user/user.selectors";
import { createStructuredSelector } from "reselect";
import { convertCollectionsSnapshotToMap } from "./firebase/firebase.utils";
import {fetchEnquiriesStartAsync} from "./redux/handleData/handleData.actions";


class App extends React.Component {
  //use it to avoid memory leaks of authentication. Set authentication to null
  unsubscribeFromAuth = null;

  //when a user log in, the state will change to the name of the user
  componentDidMount() {
    const { setCurrentUser, setTypeOfUser, fetchEnquiriesStartAsync, currentUser } = this.props;

    //using auth library from firebase to listen to any changes that happen (e.g if a user login or logout)
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        //if the authorization is successful
        //get the user object and pass in to the createUser function
        const userRef = await createUserProfileDocument(userAuth); //if the user is not registered, create a new userRef doc

        //collecting the data from database to the application, by setting state to the user properties
        userRef.onSnapshot((snapShot) => {
          //whenever the snapshot updates (set new data, delete, create...)
          setCurrentUser({
            //uses redux to set the current user state in the application to the object from the database
            id: snapShot.id,
            ...snapShot.data(),
          });
          setTypeOfUser({
            //when the user logs in, set the type of user in the app
            TypeOfUser: snapShot.data().TypeOfUser,
          });

          //if the user is a Lawyer
          if (snapShot.data().TypeOfUser === "Lawyer") {
            //fetches the user's specialization and pass as a prop to collect the enquiries tagged with this specialization
            fetchEnquiriesStartAsync(snapShot.data().specialization);
          }

        });
      } else {
        //set state of the current user to null again
        setCurrentUser(userAuth);
      }
    });
  }

  //closes the subscription "logout" by setting state of authentication to null
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      //exact is an argument true or false that uses the path. True the path must be exacly
      //the same as written in the "path" in order to render the component
      //Switch allows when the path in Route matches, it only render the component in that route
      //Swtich helps to render only what we want
      //by placing the Header outside the Switch, it will always be displayed and rendered
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route
            exact
            path="/signin"
            render={() =>
              // if the user is logged in, it redirects and does not allow user to go to signin page
              this.props.currentUser ? (
                <Redirect to="/" /> // redirects to homepage
              ) : (
                <SignInAndSignUpPage />
              )
            }
          />
          <Route
            exact
            path="/mycases"
            render={() =>
              // if the user is not logged in, it redirects and does not allow user to go to "mycases" page
              !this.props.currentUser ? (
                <Redirect to="/" /> // redirects to homepage
              ) : (
                <MyCases />
              )
            }
          />
        </Switch>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

//dispatch is just a way to inform redux that this is an action obj to be sent to every reducer
const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
  setTypeOfUser: (TypeOfUser) => dispatch(setTypeOfUser(TypeOfUser)),
  fetchEnquiriesStartAsync: (specialization) => dispatch(fetchEnquiriesStartAsync(specialization)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
