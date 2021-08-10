import React from "react";
//function that takes a component as argument and returns a modified component
import { withRouter } from "react-router-dom"; //by using it, we will have access to history

//import './menu-item.styles.scss';
import { MenuItemContainer, BackgroundImageContainer, ContentContainer, ContentTitle, ContentSubtitle } from "./menu-item.styles";



const MenuItem = ({title, imageUrl, Subtitle,  history, linkUrl}) => ( //{title} is the same as writing prop.title
  

    //toUpperCase() transform the text in capital letter
  <MenuItemContainer  
  onClick={() => history.push(`${linkUrl}`)}> 
  <BackgroundImageContainer className="background-image" imageUrl= {imageUrl} />
    <ContentContainer className="content">
      <ContentTitle>{title.toUpperCase()}</ContentTitle> 
      <ContentSubtitle>{`${Subtitle}`}</ContentSubtitle>
    </ContentContainer>
  </MenuItemContainer>

);

export default withRouter(MenuItem);