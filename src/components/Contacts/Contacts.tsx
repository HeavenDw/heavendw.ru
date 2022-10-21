import React from 'react';

import contactsList from '../../data/contactsList';
import Contact from '../Contact/Contact';
import styles from './Contacts.module.scss';

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
