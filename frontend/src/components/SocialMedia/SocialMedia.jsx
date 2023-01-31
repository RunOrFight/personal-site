import React from "react";

import { BsInstagram, BsTwitter } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";

import "./SocialMedia.scss";

const SocialMedia = () => {
  return (
    <div className='app__social'>
      <div className=''>
        <BsTwitter />
      </div>
      <div className=''>
        <BsInstagram />
      </div>
      <div className=''>
        <FaFacebook />
      </div>
    </div>
  );
};

export default SocialMedia;
