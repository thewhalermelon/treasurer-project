import Image from 'next/image';
import Link from 'next/link';

import styles from './footer.module.scss';

import FacebookImg from 'public/images/facebook.png';
import InstagramImg from 'public/images/instagram.svg';
import TreasureeBrandImg from 'public/images/treasurer-brand.svg';

import Divider from '@/app/components/Divider/Divider';

interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.above}>
        <Link scroll={false} href='/'>
          <Image src={TreasureeBrandImg} alt='Treasurer' priority={true} />
        </Link>
        <div className={styles.social}>
          <Link scroll={false} href='https://www.facebook.com/'>
            <Image src={FacebookImg} alt='Facebook' />
          </Link>
          <Link scroll={false} href='https://www.instagram.com/'>
            <Image src={InstagramImg} alt='Instagram' />
          </Link>
        </div>
        <ul className={styles.menu}>
          <li>
            <Link scroll={false} href='/'>
              Home
            </Link>
          </li>
          <li>
            <Link scroll={false} href='/collections'>
              Collections
            </Link>
          </li>
          <li>
            <Link scroll={false} href='/blog'>
              Blog
            </Link>
          </li>
          <li>
            <Link scroll={false} href='/contract'>
              Contract
            </Link>
          </li>
        </ul>
      </div>
      <Divider />
      <div className={styles.below}>
        <ul>
          <li>
            <Link scroll={false} href='/faq'>
              FAQ
            </Link>
          </li>
          <li>
            <Link scroll={false} href='/policies'>
              Privacy Policy
            </Link>
          </li>
          <li>
            <Link scroll={false} href='/conditions'>
              Term of Conditions
            </Link>
          </li>
        </ul>
        <small className={styles.copyrighted}>ⓒ2023 Treasurer. All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
