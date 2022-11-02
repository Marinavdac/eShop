import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
 @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap');

 * {
   box-sizing: border-box;
   margin: 0;
   padding: 0;
  }
  
  body {
    /* color: #ebebeb; */
    background-color: #e7e7e7;
   font-family: 'Poppins', 'sans-serif';
   font-size: 1.15em;
 }

 p {
  opacity: 0.6;
  line-height: 1.5;
 }

 img {
  max-width: 100%;
}

a {
  color: black;
  text-decoration: none;
  vertical-align: middle;
}

li {
  list-style: none;
  vertical-align: middle;
}

`

export default GlobalStyles;