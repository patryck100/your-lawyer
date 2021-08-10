import styled from "styled-components";

export const MenuItemContainer = styled.div`
  min-width: 30%;
  height: 240px;
  flex: 1 1 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  margin: 0 7.5px 15px;
  //avoids the image to overflow the box where it is inserted
  overflow: hidden;

  
  &:hover { //works in everthing under menu-item instead having to use ".menu-item:bla bla"
    //mouse coursor should look like it is about to click on something
    cursor: pointer;

    //the background image gives the impression as it is coming closer when it is hovered over
    //cubic-bezier allows a smother transition by calculating its time to increase
    & .background-image{
      transform: scale(1.1);
      transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
    }

    //the content in the middle changes the colour when hover over
    & .content {
      opacity: 0.9;
    }
  }
`;

//the background image of the menu item always stay in the center and cover the whole thing
export const BackgroundImageContainer = styled.div`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;

  //dinamically making style in the component by using url images to
  //change each component accordly. If the url changes, the css value changes too
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
`;

export const ContentContainer = styled.div`
    height: 160px;
    width: 20%;
    padding: 0 25px;
    display: flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    border: 1px solid black;
    //white box which locates the content like "hats", "womens"...
    background-color: white;
    opacity: 0.7;
    //no matter the elements in the page, the position will be always according position calculation
    position:absolute;
    overflow:auto;
`;

export const ContentTitle = styled.span`
  font-weight: bold;
  margin-bottom: 6px;
  font-size: 22px;
  color: #4a4a4a;
`;

export const ContentSubtitle = styled.span`
  font-weight: lighter;
  font-size: 16px;
`;
