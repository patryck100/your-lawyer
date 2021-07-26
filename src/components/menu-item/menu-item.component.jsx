import React from "react";
//function that takes a component as argument and returns a modified component
import { withRouter } from "react-router-dom"; //by using it, we will have access to history

import './menu-item.styles.scss';



const MenuItem = ({title, imageUrl, Subtitle}) => ( //{title} is the same as writing prop.title
  

    //toUpperCase() transform the text in capital letter
  <div 
  className="menu-item" > 
    <div className='background-image' 
    style={{
        //dinamically making style in the component by using url images to 
        //change each component accordly. If the url changes, the css value changes too
        backgroundImage: `url(${imageUrl})`
    }}>
    </div>
    <div className="content">
      <h1 className="title">{title.toUpperCase()}</h1> 
      <span className="subtitle">{`${Subtitle}`}</span>
    </div>
  </div>

);

export default withRouter(MenuItem);