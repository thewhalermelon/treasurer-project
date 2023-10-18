'use client';

import React from 'react';

import styles from './popup.module.scss';

import CloseIconImg from 'public/images/close-icon.svg';
import Image from 'next/image';

interface PopupProps {
  setOpen: React.Dispatch<React.SetStateAction<Boolean>>;
  title: string;
}

const Popup: React.FC<PopupProps> = ({ setOpen, title }) => {
  const myRef = React.useRef<any>(null);

  const handleClose = () => {
    setOpen(false);
  };

  React.useEffect(() => {
    function handleClickOutside(event: MouseEvent | TouchEvent) {
      if (myRef.current && event.target instanceof Node && !myRef.current.contains(event.target)) {
        setOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, []);

  return (
    <div className={styles.wrapper}>
      <div className={styles.popup} ref={myRef}>
        <button className={styles.close} onClick={handleClose}>
          <Image src={CloseIconImg} alt='Close' />
        </button>
        <h1>{title}</h1>
        <summary>
          We are preparing to open the service in your country.
          <br />
          If you would like to receive news related to sculpture investment,
          <br />
          please enter your email address.
        </summary>
        <label htmlFor='email'>Email:</label>
        <input type='email' id='email' name='email' placeholder='email' />
        <button className={`rounded-button ${styles.button}`}>Subscribe</button>
      </div>
    </div>
  );
};

export default Popup;
