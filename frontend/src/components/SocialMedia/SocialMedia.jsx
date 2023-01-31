import React from "react";

import { BsTelegram, BsLinkedin } from "react-icons/bs";

import "./SocialMedia.scss";

const SocialMedia = () => {
  return (
    <div className='app__social'>
      <a
        href='https://www.linkedin.com/in/dragoinfury/'
        target='_blank'
        rel='noreferrer'>
        <BsLinkedin />
      </a>
      <a
        href='https://t.me/privetenn'
        target='_blank'
        rel='noreferrer'>
        <BsTelegram />
      </a>
    </div>
  );
};

export default SocialMedia;
