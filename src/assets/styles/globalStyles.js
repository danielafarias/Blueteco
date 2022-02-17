import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Inconsolata:wght@200;300;400;500;600;700;800;900&display=swap');

  * {
    box-sizing: border-box;
  }
  body {
    margin: 0;
    padding: 0;
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: 'Inconsolata', monospace;
    transition: all 0.50s linear;
    position: relative; 
  }
  a {
    text-decoration: none;
    color: ${({ theme }) => theme.text};
  }
::-webkit-scrollbar {
  width: 10px;
}
::-webkit-scrollbar-track {
  background: #252F49;
}
::-webkit-scrollbar-thumb {
  background: #E1954C;
}
  `;