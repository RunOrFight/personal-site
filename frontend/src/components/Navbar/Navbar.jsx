import React from "react";
import { images } from "../../constants";

import "./Navbar.scss";

const Navbar = () => {
  return (
    <nav>
      <div>
        <img
          src={images.logo}
          alt='Alexander Mikhnyuk'
        />
      </div>
    </nav>
  );
};

export default Navbar;
