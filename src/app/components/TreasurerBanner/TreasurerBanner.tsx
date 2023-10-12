import Image from 'next/image';

import DotImg from 'public/images/dot.svg';
import LineImg from 'public/images/line.svg';
import LineGraphImg from 'public/images/line-graph.svg';

import { BANNER_IMAGES } from '@/app/constants';
import styles from '@/app/homepage/page.module.scss';

interface TreasurerBannerProps {}

const TreasurerBanner: React.FC<TreasurerBannerProps> = () => {
  return (
    <section className={styles.section}>
      <article className={styles['fade-in-left']}>
        <h3 className='title-14-grey'>55,000+ TRUSTED BUSINESSES</h3>
        <h1>Separate ownership of valuable items</h1>
        <summary className='summary-16-primary'>
          Treasurer is a platform that allows anyone to easily own and invest in world -recognized luxury goods such as
          Chanel, Rolex, and Romanée-Conti.
        </summary>
        <fieldset>
          <input type='email' placeholder='Enter your email address' />
          <button>Get Started</button>
        </fieldset>
      </article>
      <div className={styles.itemsGroup}>
        <div className={styles['fade-in-bottom']}>
          <Image src={DotImg} alt='Dot' className={styles.dot} />
          <Image src={LineImg} alt='Line' className={styles.line} />
          <Image src={LineGraphImg} alt='Line Chart' className={styles.graph} />
        </div>
        {BANNER_IMAGES.map((img) => {
          return (
            <Image
              src={img.src}
              alt={img.alt}
              className={`${styles[`${img.className}`]} ${styles['fade-in-right']}`}
              key={img.id}
            />
          );
        })}
      </div>
    </section>
  );
};

export default TreasurerBanner;
