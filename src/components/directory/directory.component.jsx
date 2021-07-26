import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectDirectorySections } from "../../redux/directory/directory.selectors";

import MenuItem from "../menu-item/menu-item.component";
import "./directory.styles.scss";

const Subtitle = (id) => {
  if(id === 1) {
    return "Your enquiry will be sent to the Lawyers registered in the app";
  } else if(id === 2){
    return "Specialised Lawyers will contact you";
  }else if(id === 3) {
    return "Make an agreement and solve your case!";
  }else {
    return "";
  }
}

const Directory = ({ sections }) => (
  /*maping through the sections by distructuring the section into
   * title, imageUrl and id. Then using id as key
   */
  /* can also be done like
  {this.state.sections.map(({id, ...otherSectionProps }) => (
  <MenuItem key={id} {...otherSectionProps}/>
  */
  
  <div className="directory-menu">
    {
      sections.map(({ title, imageUrl, id }) => (
      <MenuItem
        key={id}
        title={title}
        imageUrl={imageUrl}
        Subtitle={Subtitle(id)}
      />
    ))}
    
  </div>
);

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections,
});

export default connect(mapStateToProps)(Directory);
