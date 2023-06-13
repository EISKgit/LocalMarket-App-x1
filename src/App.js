import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import { GlobalStyle } from "./GlobalStyle";
import Header from "./components/Header";
import Footer from "./Footer";
import Home from "./components/Home";
import About from "./components/About";
import { ThemeProvider } from "styled-components";
import Error from "./Error";




function App() {

  const theme = {
    
  }


  return (
    
    <ThemeProvider theme={theme}>
    <BrowserRouter>
     <GlobalStyle />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </BrowserRouter>
    </ThemeProvider>
   
  );
}

export default App;
