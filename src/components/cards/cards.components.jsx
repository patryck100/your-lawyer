import React from "react";
// material-ui components
import { makeStyles } from "@material-ui/core/styles";
// core components
import Card from "../Card/Card.js";
import CardBody from "../Card/CardBody.js";
import CustomButton from "../custom-button/custom-button.component.jsx";

//Importing styles from Material UI
import {
  cardTitle,
  cardLink,
  cardSubtitle,
} from "../../assets/jss/material-kit-react.js";

const styles = {
  cardTitle,
  cardLink,
  cardSubtitle,
};


const useStyles = makeStyles(styles);

//by exporting, it allows this component to be called from another components
//This function renders the enquiries cards in the Lawyer enquiries page according to 
//argument passed in as props
export default function Cards({ title, specialization, contactInfo, enquiry }) {
  const classes = useStyles();
  return (
    <Card style={{ width: "18rem" }}>
      <CardBody>
        <h3 className={classes.cardTitle}>Title: {title.toUpperCase()}</h3>
        <h4 className={classes.cardSubtitle}>Specialisation: {specialization}</h4>
        <p>{enquiry}</p>
        
        <CustomButton onClick={(e) => {
          window.location = `mailto:${contactInfo}`; //on click, redirects the Lawyer to contact a client through email
          e.preventDefault();
      }} isCardsItem>
          CONTACT CLIENT
        </CustomButton>
      </CardBody>
    </Card>
  );
}
