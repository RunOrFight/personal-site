import React, { useState } from "react";

import "./App.scss";

import { About, Footer, Header, Skills, Testimonials, Work } from "./container";
import { Navbar, SocialMedia, NavigationDots } from "./components";

const App = () => {
  const [idName, setIdName] = useState("home");
  return (
    <div className='app'>
      <Navbar />
      <Header />
      <About />
      <Work />
      <Skills />
      <Testimonials />
      <Footer />

      <SocialMedia />
      <NavigationDots />
    </div>
  );
};

export default App;
