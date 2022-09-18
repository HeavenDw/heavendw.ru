import React from 'react';
import Contact from '../Contact/Contact';
import styles from './Contacts.module.css';

const contactsList = [
  {
    id: 1,
    link: 'https://github.com/HeavenDw',
    imgSrc: '/icons/github.svg',
    text: 'Github: @HeavenDw',
  },
  {
    id: 2,
    link: 'tel:79641971875',
    imgSrc: '/icons/phone.svg',
    text: '+7 (964) 197 - 18 - 75',
  },
  {
    id: 3,
    link: 'https://t.me/heavendw',
    imgSrc: '/icons/telegram.svg',
    text: 'Telegram: @heavendw',
  },
  {
    id: 4,
    link: 'https://vk.com/heavendweller',
    imgSrc: '/icons/vk.svg',
    text: 'Vkontakte: @heavendweller',
  },
  {
    id: 5,
    link: 'viber://chat?number=%2B79641971875',
    imgSrc: '/icons/viber.svg',
    text: 'Viber: +79641971875',
  },
  {
    id: 6,
    link: 'mailto:svntsvntsvn@gmail.com',
    imgSrc: '/icons/letter.svg',
    text: 'Email: svntsvntsvn@gmail.com',
  },
];

const Contacts = () => {
  return (
    <div className={styles.contacts}>
      {contactsList.map((contact) => (
        <Contact key={contact.id} imgSrc={contact.imgSrc} link={contact.link} text={contact.text} />
      ))}
    </div>
  );
};

export default Contacts;
