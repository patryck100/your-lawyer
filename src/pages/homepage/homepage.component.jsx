import React from "react";

import "./homepage.styles.scss";

import Directory from "../../components/directory/directory.component";

const HomePage = () => (
  //calling the component "Directory"
  <div className="homepage">
    <div>
      <h1> Find a Lawyer to solve your case in a few steps</h1>
    </div>
    <Directory/>
  </div>
);

export default HomePage;
