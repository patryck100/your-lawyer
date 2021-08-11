import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
/* All the content in the page will be using this font-family from google*/
body {
  font-family: 'Open Sans Condensed';
  padding: 20px 40px;

}

a {
  text-decoration: none;
  color: black;
}

* {
  box-sizing: border-box;
}
`;
