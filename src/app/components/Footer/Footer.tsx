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
      <div className={`${styles.above} container`}>
        <Link scroll={false} href='/' className={styles.brand}>
          <Image src={TreasureeBrandImg} alt='Treasurer' priority={true} />
        </Link>
        <nav className={styles.social}>
          <ul>
            <li>
              <Link scroll={false} href='https://www.facebook.com/'>
                <Image src={FacebookImg} alt='Facebook' />
              </Link>
            </li>
            <li>
              <Link scroll={false} href='https://www.instagram.com/'>
                <Image src={InstagramImg} alt='Instagram' />
              </Link>
            </li>
          </ul>
        </nav>
        <nav className={styles.menu}>
          <ul>
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
        </nav>
      </div>
      <Divider />
      <nav className={`${styles.below} container`}>
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
      </nav>
    </footer>
  );
};

export default Footer;
