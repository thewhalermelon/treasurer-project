'use client';

import Image from 'next/image';
import Link from 'next/link';

import styles from './header.module.scss';

import TreasureeBrandImg from 'public/images/treasurer-brand.svg';
import HamburgerImg from 'public/images/hamburger.svg';

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  const handleHamburger = () => {
    alert('Not implemeted!');
  };

  return (
    <header className={styles.header}>
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
    </header>
  );
};

export default Header;
