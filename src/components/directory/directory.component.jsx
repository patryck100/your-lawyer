import React from "react";
//connects with redux, allowing to use structured selectors
import { connect } from "react-redux";
//Creates an structure to send or request state from Redux
import { createStructuredSelector } from "reselect";

//Reusing styled components
import {
  selectDirectoryClient,
  selectDirectoryLawyer,
} from "../../redux/directory/directory.selectors";
import { DirectoryMenuContainer } from "./directory.styles";

//Importing component to be rendered
import MenuItem from "../menu-item/menu-item.component";

//This component render the 3 steps to use the application according to the argument being passed in as props
const Directory = ({ clientSteps, lawyerSteps, whatSteps }) => (
  <DirectoryMenuContainer>
    {`${whatSteps}` === "lawyer" //if whatSteps props is lawyer, render the steps for the lawyer
      ? lawyerSteps.map(({ title, imageUrl, id, linkUrl, Subtitle }) => (
          <MenuItem
            key={id}
            title={title}
            imageUrl={imageUrl}
            Subtitle={Subtitle}
            linkUrl={linkUrl}
          />
        ))
      : //otherwise render the steps for the client
        clientSteps.map(({ title, imageUrl, id, linkUrl, Subtitle }) => (
          <MenuItem
            key={id}
            title={title}
            imageUrl={imageUrl}
            Subtitle={Subtitle}
            linkUrl={linkUrl}
          />
        ))
      }
  </DirectoryMenuContainer>
);

//Selector allows to select the current state from Redux
const mapStateToProps = createStructuredSelector({
  clientSteps: selectDirectoryClient,
  lawyerSteps: selectDirectoryLawyer,
});

//by exporting, it allows this component to be called from another components
export default connect(mapStateToProps)(Directory);
