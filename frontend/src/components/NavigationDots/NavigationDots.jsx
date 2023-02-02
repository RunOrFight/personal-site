import React, { useState } from "react";

import "./NavigationDots.scss";

const NavigationDots = () => {
  const links = ["home", "about", "work", "skills", "testimonials", "contact"];
  const [active, setActive] = useState(
    window.location.hash?.replace?.("#", "") || "home"
  );

  return (
    <div className='app__navigation'>
      {links.map((item, index) => (
        // eslint-disable-next-line jsx-a11y/anchor-has-content
        <a
          id={item}
          href={`#${item}`}
          onClick={(e) => {
            setActive(e.target.id);
          }}
          key={item + index}
          className='app__navigation-dot'
          style={active === item ? { backgroundColor: "#02B4A9" } : {}}
        />
      ))}
    </div>
  );
};

export default NavigationDots;
