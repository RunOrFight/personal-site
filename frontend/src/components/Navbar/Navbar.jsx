import React, { useState } from "react";
import { HiMenuAlt4, HiX } from "react-icons/hi";

import "./Navbar.scss";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const links = ["home", "about", "work", "skills", "testimonials", "contact"];

  return (
    <nav className='app__navbar'>
      <ul className='app__flex app__navbar-links'>
        {links.map((item) => (
          <li
            className='app__flex p-text'
            key={`link-${item}`}>
            <div></div>
            <a
              href={`#${item}`}
              className='app__link'>
              {item}
            </a>
          </li>
        ))}
      </ul>

      <div className='app__flex app__navbar-menu'>
        <HiMenuAlt4 onClick={() => setToggle(true)} />

        {toggle && (
          <div>
            <HiX onClick={() => setToggle(false)} />

            <ul>
              {links.map((item) => (
                <li key={item}>
                  <a
                    onClick={() => setToggle(false)}
                    href={`#${item}`}
                    className='app__link'>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <a
        href='tel:+375(25)542-56-17'
        className='p-text'>
        +375(25)542-56-17
      </a>
      <a
        href='mailto:dragoinfury@gmail.com'
        className='p-text'>
        dragoinfury@gmail.com
      </a>
    </nav>
  );
};

export default Navbar;
