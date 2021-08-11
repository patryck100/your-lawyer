import React from "react";
//function that takes a component as argument and returns a modified component
import { withRouter } from "react-router-dom"; //by using it, we will have access to history

//Reusing styled components
import { MenuItemContainer, BackgroundImageContainer, ContentContainer, ContentTitle, ContentSubtitle } from "./menu-item.styles";


//The 3 images seen in the homepage or in the "search-enquiries" component
//takes as parameter what is necessary to populate the component
const MenuItem = ({title, imageUrl, Subtitle,  history, linkUrl}) => ( 
  

    //toUpperCase() transform the text in capital letter
    //when clicked in any of the images, it will be redirected to the link being passed in as a prop
  <MenuItemContainer  
  onClick={() => history.push(`${linkUrl}`)}> 
  <BackgroundImageContainer className="background-image" imageUrl= {imageUrl} />
    <ContentContainer className="content">
      <ContentTitle>{title.toUpperCase()}</ContentTitle> 
      <ContentSubtitle>{`${Subtitle}`}</ContentSubtitle>
    </ContentContainer>
  </MenuItemContainer>

);
//by exporting, it allows this component to be called from another components
export default withRouter(MenuItem);