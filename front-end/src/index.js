import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import "./index.css";
import Hero from "./components/Hero/Hero";
import Form from "./components/Form/Form";
import Features from "./components/Features/Features.js";
import Footer from "./components/Footer/Footer.js";
import { Navbar } from "./components/Navbar/Navbar";
import "firebase/auth";
import db from "./firebaseConfig";

const rootElement = document.getElementById("root");

ReactDOM.render(
  <BrowserRouter>
    <ChakraProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<> <Hero /> 
          <Features /> </>} />
        <Route path="/form" element={<Form />} />
      </Routes>
      <Footer />
    </ChakraProvider>
  </BrowserRouter>,
  rootElement
);
