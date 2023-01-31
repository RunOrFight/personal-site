import React, { useState } from "react";
import { client } from "../../client";
import { images } from "../../constants";
import Container from "../Container/Container";

import "./Footer.scss";

const Footer = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const { name, email, message } = formData;

  const handleOnChangeInput = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    setIsLoading(true);

    const contact = {
      _type: "contact",
      name,
      email,
      message
    };

    client.create(contact).then(() => {
      setIsLoading(false);
      setIsFormSubmitted(true);
    });
  };
  return (
    <div className='app__footer-content'>
      <div className='app__footer-cards'>
        <div className='app__footer-card'>
          <img
            src={images.email}
            alt='email'
          />
          <a
            href='mailto:dragoinfury@gmail.com'
            className='p-text'>
            dragoinfury@gmail.com
          </a>
        </div>
        <div className='app__footer-card'>
          <img
            src={images.mobile}
            alt='mobile'
          />
          <a
            href='tel:+375(25)542-56-17'
            className='p-text'>
            +375(25)542-56-17
          </a>
        </div>
      </div>

      {!isFormSubmitted ? (
        <div className='app__footer-form app__flex'>
          <div className='app__flex'>
            <input
              type='text'
              className='p-text'
              placeholder='Your Name'
              value={name}
              onChange={handleOnChangeInput}
              name='name'
            />
          </div>
          <div className='app__flex'>
            <input
              type='email'
              className='p-text'
              placeholder='Your Email'
              value={email}
              onChange={handleOnChangeInput}
              name='email'
            />
          </div>
          <div>
            <textarea
              className='p-text'
              placeholder='Your Message'
              name='message'
              value={message}
              onChange={handleOnChangeInput}></textarea>
          </div>
          <button
            disabled={isLoading}
            className='p-text'
            type='button'
            onClick={handleSubmit}>
            {isLoading ? "Sending" : "Send Message"}
          </button>
        </div>
      ) : (
        <div>
          <h3 className='head-text'>Thank you for getting in touch!</h3>
        </div>
      )}
    </div>
  );
};
const FooterHeader = (
  <h2 className='head-text'>Take a coffe and chat with me</h2>
);
export default Container(Footer, "app__whitebg", "contact", FooterHeader);
