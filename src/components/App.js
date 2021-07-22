import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Home from "./Home/Home";
import "./styles/style.css";
const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Route path="/" exact component={Home} />
      <Footer />
    </BrowserRouter>
  );
};

export default App;
