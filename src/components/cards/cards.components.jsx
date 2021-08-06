import React from "react";
// material-ui components
import { makeStyles } from "@material-ui/core/styles";
// core components
import Card from "../Card/Card.js";
import CardBody from "../Card/CardBody.js";
import CustomButton from "../custom-button/custom-button.component.jsx";

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

export default function Cards({ specialization, contactInfo, enquiry }) {
  const classes = useStyles();
  return (
    <Card style={{ width: "18rem" }}>
      <CardBody>
        <h3 className={classes.cardTitle}>{specialization}</h3>
        <h4 className={classes.cardSubtitle}>{contactInfo}</h4>
        <p>{enquiry}</p>
        
        <CustomButton onClick={(e) => e.preventDefault()} isCardsItem>
          CONTACT CLIENT
        </CustomButton>
      </CardBody>
    </Card>
  );
}
