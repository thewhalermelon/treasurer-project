import Image from 'next/image';

import DotImg from 'public/images/dot.svg';
import LineImg from 'public/images/line.svg';
import LineGraphImg from 'public/images/line-graph.svg';

import DotDesktopImg from 'public/images/dot__desktop.svg';
import LineDesktopImg from 'public/images/line__desktop.svg';
import LineGraphDesktopImg from 'public/images/line-graph__desktop.svg';

import { BANNER_IMAGES, DESKTOP_BANNER_IMAGES } from '@/app/constants';
import styles from './treasurerBanner.module.scss';

interface TreasurerBannerProps {}

const TreasurerBanner: React.FC<TreasurerBannerProps> = () => {
  return (
    <section className={styles.firstSection}>
      <article className='fade-in-left'>
        <h3>55,000+ TRUSTED BUSINESSES</h3>
        <h1>
          Separate
          <br />
          ownership
          <br />
          of valuable items
        </h1>
        <summary>
          Treasurer is a platform that allows anyone
          <br />
          to easily own and invest in world
          <br />
          -recognized luxury goods such as Chanel,
          <br />
          Rolex, and Romanée-Conti.
        </summary>
        <fieldset>
          <input type='email' placeholder='Enter your email address' />
          <button>Get Started</button>
        </fieldset>
      </article>
      <div className={styles.itemsGroup}>
        <div className='fade-in-bottom'>
          {/* MOBILE */}
          <Image src={DotImg} alt='Dot' className={styles.dot} />
          <Image src={LineImg} alt='Line' className={styles.line} />
          <Image src={LineGraphImg} alt='Line Chart' className={styles.graph} />
          {/* DESKTOP */}
          <Image src={DotDesktopImg} alt='Dot' className={styles['dot-desktop']} />
          <Image src={LineDesktopImg} alt='Line' className={styles['line-desktop']} />
          <Image src={LineGraphDesktopImg} alt='Line Chart' className={styles['graph-desktop']} />
        </div>
        {BANNER_IMAGES.map((img) => {
          return (
            <Image src={img.src} alt={img.alt} className={`${styles[`${img.className}`]} fade-in-right`} key={img.id} />
          );
        })}
        {DESKTOP_BANNER_IMAGES.map((img) => {
          return (
            <Image src={img.src} alt={img.alt} className={`${styles[`${img.className}`]} fade-in-right`} key={img.id} />
          );
        })}
      </div>
    </section>
  );
};

export default TreasurerBanner;
