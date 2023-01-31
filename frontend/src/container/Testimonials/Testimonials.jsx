import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import { client, urlFor } from "../../client";

import "./Testimonials.scss";
import Container from "../Container/Container";

const Testimonial = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [brands, setBrands] = useState([]);

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const testimonialsQuery = `*[_type == "testimonials"]`;
    const brandsQuery = `*[_type == "brands"]`;

    client.fetch(testimonialsQuery).then((data) => setTestimonials(data));
    client.fetch(brandsQuery).then((data) => setBrands(data));
  }, []);

  const testimonial = testimonials[currentIndex];

  const handleClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <>
      {testimonials.length && (
        <>
          <div className='app__testimonials-item app__flex'>
            <img
              src={urlFor(testimonial.imageurl)}
              alt='testimonial'
              className=''
            />
            <div className='app__testimonials-content'>
              <p className='p-text'>{testimonial.feedback}</p>
              <div>
                <h4 className='bold-text'>{testimonial.name}</h4>
                <h5 className='p-text'>{testimonial.company}</h5>
              </div>
            </div>
          </div>

          <div className='app__testimonials-btns app__flex'>
            <div
              className='app__flex'
              onClick={() =>
                handleClick(
                  currentIndex === 0
                    ? testimonials.length - 1
                    : currentIndex - 1
                )
              }>
              <HiChevronLeft />
            </div>
            <div
              className='app__flex'
              onClick={() =>
                handleClick(
                  currentIndex === testimonials.length - 1
                    ? 0
                    : currentIndex + 1
                )
              }>
              <HiChevronRight />
            </div>
          </div>
        </>
      )}

      <div className='app__testimonials-brands app__flex'>
        {brands.map((brand, index) => (
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5, type: "tween" }}
            key={`brand_${index}`}>
            <img
              src={urlFor(brand?.imgUrl)}
              alt={brand?.name}
            />
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default Container(Testimonial, "app__primarybg", "testimonials");
