import React from "react";

import "./App.scss";

import { About, Footer, Header, Skills, Testimonials, Work } from "./container";
import { Navbar, SocialMedia, NavigationDots } from "./components";

const App = () => {
  return (
    <div className='app'>
      <Navbar />
      <Header />
      {/* <About /> */}
      {/* <Work /> */}
      {/* <Skills /> */}
      {/* <Testimonials /> */}
      {/* <Footer /> */}

      <SocialMedia />
      <NavigationDots />
    </div>
  );
};

export default App;
