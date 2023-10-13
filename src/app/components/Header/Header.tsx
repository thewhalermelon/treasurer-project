'use client';

import React from 'react';

import Image from 'next/image';
import Link from 'next/link';

import styles from './header.module.scss';

import TreasureeBrandImg from 'public/images/treasurer-brand.svg';
import HamburgerImg from 'public/images/hamburger.svg';

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  const [scrolled, setScrolled] = React.useState(false);
  const [lastScrollTop, setLastScrollTop] = React.useState(0);

  const handleHamburger = () => {
    alert('Not implemeted!');
  };

  const timeoutRef = React.useRef<number | NodeJS.Timeout>();

  const clearTimer = React.useCallback(() => clearTimeout(timeoutRef.current), []);

  React.useEffect(() => {
    if (timeoutRef.current) clearTimer();

    timeoutRef.current = setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }, 1000);

    return () => {
      clearTimer();
    };
  }, [clearTimer]);

  React.useEffect(() => {
    const handleScroll = () => {
      let currentScrollTop = window.scrollY;

      // Scrolling down
      if (currentScrollTop > lastScrollTop && currentScrollTop > 2) {
        setScrolled(true);
      }
      // Scrolling up
      else if (currentScrollTop < lastScrollTop) {
        setScrolled(false);
      }

      // Update the last scroll position
      setLastScrollTop(currentScrollTop);
    };

    // Attach the scroll listener to the window
    window.addEventListener('scroll', handleScroll);

    // Cleanup the listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollTop]);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div>
        <Link scroll={false} href='/'>
          <Image src={TreasureeBrandImg} alt='Treasurer' priority={true} />
        </Link>
        <Image src={HamburgerImg} alt='Menu' className={styles.hamburger} onClick={handleHamburger} />
        <nav>
          <ul>
            <li>
              <a href='/'>Home</a>
            </li>
            <li>
              <a href='/collections'>Collections</a>
            </li>
            <li>
              <a href='/blog'>Blog</a>
            </li>
            <li>
              <a href='/contact'>Contact</a>
            </li>
          </ul>
        </nav>
        <nav>
          <ul className={styles.actions}>
            <li>
              <Link href='/signin' className='outlined-button'>
                Sign In
              </Link>
            </li>
            <li>
              <Link href='/signup' className='rounded-button'>
                Sign up for free
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
