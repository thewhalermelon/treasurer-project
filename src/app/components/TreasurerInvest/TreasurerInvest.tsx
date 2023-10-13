'use client';

import React from 'react';
import Image from 'next/image';

import { useInView } from 'react-intersection-observer';

import styles from '@/app/homepage/page.module.scss';

import Slider from '@/app/components/Slider/Slider';
import DesktopSlider from '@/app/components/DesktopSlider/DesktopSlider';

import IphoneImg from 'public/images/iphone.png';
import IphoneDesktopImg from 'public/images/iphone__desktop.svg';

interface TreasurerInvestProps {}

const TreasurerInvest: React.FC<TreasurerInvestProps> = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const [imageRef, imageInView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const [imageDesktopRef, imageDesktopInView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section className={styles.section}>
      <div ref={ref} className={`${styles['floating-element']} ${inView ? styles.visible : ''}`}>
        <h3 className='title-13-orange-center'>WHO WE ARE</h3>
        <h2>Invest in your passions,</h2>
        <h2>one share at a time</h2>
        <summary>Treasureers provide easy and sensual collection investment opportunities for anyone.</summary>
      </div>
      <Slider />
      <DesktopSlider />
      <Image
        src={IphoneImg}
        alt='Iphone'
        className={`${styles.iphone} ${styles['floating-element-2nd']} ${imageInView ? styles.visible : ''}`}
        ref={imageRef}
      />
      <Image
        src={IphoneDesktopImg}
        alt='Iphone Desktop'
        ref={imageDesktopRef}
        className={`${styles['iphone-desktop']} ${styles['floating-element-2nd']} ${
          imageDesktopInView ? styles.visible : ''
        }`}
      />
    </section>
  );
};

export default TreasurerInvest;
