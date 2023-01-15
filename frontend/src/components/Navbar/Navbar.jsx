import React, { useState } from "react";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { motion } from "framer-motion";

import { images } from "../../constants";

import "./Navbar.scss";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const links = ["home", "about", "work", "skills", "testimonials", "contact"];

  return (
    <nav className='app__navbar'>
      <div className='app__navbar-logo'>
        <img
          src={images.logo}
          alt='Alexander Mikhnyuk'
        />
      </div>

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
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.85, ease: "easeInOut" }}>
            <HiX onClick={() => setToggle(false)} />

            <ul>
              {links.map((item) => (
                <li key={item}>
                  <a
                    href={`#${item}`}
                    className='app__link'>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
