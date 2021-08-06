import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import {
  selectDirectoryClient,
  selectDirectoryLawyer,
} from "../../redux/directory/directory.selectors";

import MenuItem from "../menu-item/menu-item.component";
import { DirectoryMenuContainer } from "./directory.styles";

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

const mapStateToProps = createStructuredSelector({
  clientSteps: selectDirectoryClient,
  lawyerSteps: selectDirectoryLawyer,
});

export default connect(mapStateToProps)(Directory);
