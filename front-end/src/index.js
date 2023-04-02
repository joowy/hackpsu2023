import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import "./index.css";
import Hero from "./components/Hero/Hero";
import Form from "./components/Form/Form";
import { Navbar } from "./components/Navbar/Navbar";

const rootElement = document.getElementById("root");

ReactDOM.render(
  <BrowserRouter>
    <ChakraProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/form" element={<Form />} />
      </Routes>
    </ChakraProvider>
  </BrowserRouter>,
  rootElement
);
