import React, { FC } from 'react';

interface ContactProps {
  link: string;
  imgSrc: string;
  text: string;
}

const Contact: FC<ContactProps> = ({ link, imgSrc, text }) => {
  return (
    <a href={link} target="_blank" rel="noreferrer">
      <img src={process.env.PUBLIC_URL + imgSrc} alt={imgSrc} />
      {text}
    </a>
  );
};

export default Contact;
