import React from "react";

//Switch allows when the path in Route matches, it only render the component in that route
//The path in the Route is what will be rendered to the user
//Redirect allows it to block or redirects certain path
import { Switch, Route, Redirect } from "react-router-dom"; //has to import "yarn add react-router-dom"

//Connect is a way to connect Redux to the application, this way it can communicate and update the state
import { connect } from "react-redux"; //has to import "yarn add react-redux"
//Creates a structure to allow the application to select an action from Redux and do something with the state
import { createStructuredSelector } from "reselect"; //has to import "yarn add reselect"


import { GlobalStyle } from "./global.styles"; //unique Global style that affects all the components in the app

//Importing content to be dispayed to the user
import Header from "./components/header/header.component";
import HomePage from "./pages/homepage/homepage.component";
import Footer from "./components/Footer/Footer";
import EnquiriesPageContainer from "./pages/enquiries-page/enquiries-page.container";
import EnquiriesPage from "./pages/enquiries-page/enquiries-page.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";

//Importing actions and functions
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { setCurrentUser, setTypeOfUser } from "./redux/user/user.actions";
import { selectCurrentUser } from "./redux/user/user.selectors";
import {
  fetchEnquiriesStartAsync, //when the user logs in, it fetches the enquiries related to that user
  setEnquiriesToNull, //when the user logs out, it sets the state of the enquiries back to null to avoid data leaking
} from "./redux/handleData/handleData.actions";

class App extends React.Component {
  //use it to avoid memory leaks of authentication. Set authentication to null
  unsubscribeFromAuth = null;

  //when a user log in, the state will change to the name of the user
  componentDidMount() {
    //gives the function access to the set methods through the props
    const {
      setCurrentUser,
      setTypeOfUser,
      fetchEnquiriesStartAsync,
      setEnquiriesToNull,
    } = this.props;

    //using auth library from firebase to listen to any changes that happen (e.g if a user login or logout)
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        //if the authorization is successful
        //get the user object and pass in to the createUser function
        const userRef = await createUserProfileDocument(userAuth); //if the user is not registered, create a new userRef doc

        //collecting the data from database to the application
        userRef.onSnapshot((snapShot) => {
          //whenever the snapshot updates (set new data, delete, create...)
          setCurrentUser({
            //this function is dispatched through redux to update the state of the current user
            //distructuor the data from currentUser coming from firebase in a way to be passed as payload to redux
            id: snapShot.id,
            ...snapShot.data(),
          });
          setTypeOfUser({
            //set the type of user according to data coming from the login
            TypeOfUser: snapShot.data().TypeOfUser,
          });

          //if the user is a Lawyer
          if (snapShot.data().TypeOfUser === "Lawyer") {
            //fetches the user's specialization and pass as a prop to collect the enquiries tagged with this specialization
            fetchEnquiriesStartAsync(snapShot.data().specialization);
          }
          //When the user logs in, displays a greeting to the user
          //alert("Login successful! Hello " + snapShot.data().displayName);
        });
      } else {
        //set state of the current user to null again
        setCurrentUser(userAuth);
        setEnquiriesToNull(); //set Enquiries statement to null to avoid data leaking
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
      <div>
        <GlobalStyle/>
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
              // if the user is NOT logged in, it redirects and does not allow user to go to "mycases" page
              !this.props.currentUser ? (
                <Redirect to="/signin" /> // redirects to the sign in page
              ) : //whereas if the user is logged in as a Lawyer, it uses the EnquiriesPageContainer
              //to display a spinner while the data is not loaded yet and avoid errors, otherwise displays the data itself
              this.props.currentUser.TypeOfUser === "Lawyer" ? (
                <EnquiriesPageContainer /> // redirects to homepage
              ) : (
                //Since the client EnquiriesPage does not need to fetch data, it does not need the spinner "EnquiriesPageContainer".
                <EnquiriesPage />
              )
            }
          />
        </Switch>
        <Footer />
      </div>
    );
  }
} // end of App Class

//Gets the current state from Redux and pass in as a props
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

//dispatch is just a way to inform redux that this is an action obj to be sent to every reducer
//basically those actions updates the state of the application in Redux, and allows Redux to update the props in the entire application
const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
  setTypeOfUser: (TypeOfUser) => dispatch(setTypeOfUser(TypeOfUser)),
  fetchEnquiriesStartAsync: (specialization) =>
    dispatch(fetchEnquiriesStartAsync(specialization)),
  setEnquiriesToNull: () => dispatch(setEnquiriesToNull()),
});

//Connect is a way to connect Redux to the application, this way it can communicate and update the state
export default connect(mapStateToProps, mapDispatchToProps)(App);
