import React from 'react';
import styles from './Contacts.module.css';

const Contacts = () => {
  return (
    <div className={styles.contacts}>
      <a href="https://github.com/HeavenDw" target="_blank">
        <img src={process.env.PUBLIC_URL + '/icons/github.svg'} alt="github icon" />
        Github: @HeavenDw
      </a>
      <a href="tel:79641971875">
        <img src={process.env.PUBLIC_URL + '/icons/phone.svg'} alt="phone icon" />
        +7 (964) 197 - 18 - 75
      </a>
      <a href="https://t.me/heavendw" target="_blank">
        <img src={process.env.PUBLIC_URL + '/icons/telegram.svg'} alt="telegram icon" />
        Telegram: @heavendw
      </a>
      <a href="https://vk.com/heavendweller" target="_blank">
        <img src={process.env.PUBLIC_URL + '/icons/vk.svg'} alt="vk icon" />
        Vkontakte: @heavendweller
      </a>
      <a href="viber://chat?number=%2B79641971875" target="_blank">
        <img src={process.env.PUBLIC_URL + '/icons/viber.svg'} alt="viber icon" />
        Viber: 79641971875
      </a>
      <a href="mailto:svntsvntsvn@gmail.com" target="_blank">
        <img src={process.env.PUBLIC_URL + '/icons/letter.svg'} alt="letter icon" />
        Email: svntsvntsvn@gmail.com
      </a>
    </div>
  );
};

export default Contacts;
