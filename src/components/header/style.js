import AppBar from "@mui/material/AppBar";
import styled from "styled-components";

export const Bar = styled(AppBar)`
  @import url("https://fonts.googleapis.com/css2?family=Pacifico&display=swap");

  .MuiTypography-root {
    font-family: "Pacifico", cursive;
    color: #FCD83C;
  }

  .MuiSvgIcon-root {
    color: #FCD83C;
  }
  .MuiContainer-root {
    background-color: #252f49;
  }

  .theme-btn {
    margin: 0 1rem;
  }

  img {
    width: 5%;
    margin: 0.5rem;
  }
`;
