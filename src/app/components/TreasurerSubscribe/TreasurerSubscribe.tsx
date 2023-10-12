'use client';

import React from 'react';
import Image from 'next/image';

import { useInView } from 'react-intersection-observer';

import styles from '@/app/homepage/page.module.scss';

import { ORANGE_CHART } from '@/app/constants';

import OrangeFadeBackgroundDesktopImg from 'public/images/orange-fade-background__desktop.svg';
import OrangeLineDesktopImg from 'public/images/orange-line__desktop.svg';

interface TreasurerSubscribeProps {}

const TreasurerSubscribe: React.FC<TreasurerSubscribeProps> = () => {
  const [ref, inView] = useInView({
    threshold: 1,
    triggerOnce: true,
  });

  return (
    <section ref={ref} className={`${styles.section} ${styles['floating-element']} ${inView ? styles.visible : ''}`}>
      <h2 className='title-34-white-center'>Own a piece</h2>
      <h2 className='title-34-white-center'>of rare collectibles</h2>
      <h2 className='title-34-white-center'>without breaking the bank.</h2>

      <h2 className={styles['title-desktop']}>Own a piece of rare collectibles without breaking the bank.</h2>
      <fieldset>
        <input type='email' placeholder='Enter your email address' />
        <button>Get Started</button>
      </fieldset>
      {ORANGE_CHART.map((i, index) => {
        return <Image src={i.src} alt={i.alt} className={styles[`${i.className}`]} key={index} />;
      })}
      <Image
        src={OrangeFadeBackgroundDesktopImg}
        alt='Orange Fade Background Desktop'
        className={`${styles['chart-desktop']} ${styles.background}`}
      />
      <Image
        src={OrangeLineDesktopImg}
        alt='Orange Line Desktop'
        className={`${styles['chart-desktop']} ${styles.line}`}
      />
    </section>
  );
};

export default TreasurerSubscribe;
