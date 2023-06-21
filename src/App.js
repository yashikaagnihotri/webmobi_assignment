import React from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Expertise from "./components/Expertise";
import SuccessStories from "./components/SuccessStories";
import ContactUs from "./components/ContactUs";
import Copyright from "./components/Copyright";

function App() {
  return (<div>
    <Header />
    <Home />
    <About />
    <Expertise />
    <SuccessStories />
    <ContactUs />
    <Copyright />
  </div>
  );  
}

export default App;
