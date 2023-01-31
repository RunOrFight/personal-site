import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./About.scss";
import { urlFor, client } from "../../client";
import Container from "../Container/Container";

const About = () => {
  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    const query = `*[_type == "abouts"]`;
    client.fetch(query).then((data) => setAbouts(data));
  }, []);

  return (
    <div className='app__profiles'>
      {abouts.map((about, index) => (
        <motion.div
          whileInView={{ opacity: [0.5, 1] }}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.5, type: "tween" }}
          className='app__profiles-item'
          key={`profiles-item_${index}`}>
          <img
            src={urlFor(about.imgUrl)}
            alt={about.title}
          />
          <h2
            className='bold-text'
            style={{ marginTop: 20 }}>
            {about.title}
          </h2>
          <p
            className='p-text'
            style={{ marginTop: 10 }}>
            {about.description}
          </p>
        </motion.div>
      ))}
    </div>
  );
};
const AboutHeader = (
  <h2 className='head-text'>
    I Know That <span>Good Development</span>
    <br />
    Means <span>Good Business</span>
  </h2>
);
export default Container(About, "app__whitebg", "about", AboutHeader);
