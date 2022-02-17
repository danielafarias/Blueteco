import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./assets/styles/globalStyles";
import { lightTheme, darkTheme } from "./assets/styles/theme";
import Home from "./pages/Home";
import Register from "./pages/Register";
import { Header } from "./components/header";

const themeToggler = () => {
  localStorage.getItem("theme") === "light"
    ? localStorage.setItem("theme", "dark")
    : localStorage.setItem("theme", "light");
};

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider
      theme={localStorage.getItem("theme") === "light" ? lightTheme : darkTheme}
    >
      <>
        <GlobalStyles />
        <Header themeToggler={themeToggler} />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </BrowserRouter>
      </>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
