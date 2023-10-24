'use client';

import React from 'react';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import styles from './header.module.scss';

import TreasureeBrandImg from 'public/images/treasurer-brand.svg';
import HamburgerImg from 'public/images/hamburger.svg';

const COLLECTIONS_PATH = '/collections';

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  const [scrolled, setScrolled] = React.useState(false);
  const [lastScrollTop, setLastScrollTop] = React.useState(0);

  const pathname = usePathname();

  const handleHamburger = () => {
    alert('Not implemeted!');
  };

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
              <Link href='/'>Home</Link>
            </li>
            <li>
              <Link href='/collections' className={pathname === COLLECTIONS_PATH ? styles.selectedPage : ''}>
                Collections
              </Link>
            </li>
            <li>
              <Link href='/blog'>Blog</Link>
            </li>
            <li>
              <Link href='/contact'>Contact</Link>
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
