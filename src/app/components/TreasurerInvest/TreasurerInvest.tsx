'use client';

import React from 'react';
import Image from 'next/image';

import { useInView } from 'react-intersection-observer';

import styles from './treasurerInvest.module.scss';

import Slider from '@/app/components/Slider/Slider';
import DesktopSlider from '@/app/components/DesktopSlider/DesktopSlider';

import IphoneImg from 'public/images/iphone.png';
import IphoneDesktopImg from 'public/images/iphone__desktop.svg';
import useWindowWidth from '@/app/hooks/useWindowWidth';

interface TreasurerInvestProps {}

const TreasurerInvest: React.FC<TreasurerInvestProps> = () => {
  const windowWidth = useWindowWidth();

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
    <section className={styles.thirdSection}>
      <div ref={ref} className={`floating-element ${inView ? 'visible' : ''}`}>
        <h3>WHO WE ARE</h3>
        <h2>
          Invest in your passions,
          <br />
          one share
          {windowWidth && windowWidth < 1440 ? <br /> : ' '}
          at a time
        </h2>
        <summary>
          Treasureers provide easy and
          {windowWidth && windowWidth < 1440 ? <br /> : ' '}
          sensual collection
          {windowWidth && windowWidth >= 1440 ? <br /> : ' '}
          investment
          {windowWidth && windowWidth < 1440 ? <br /> : ' '}
          opportunities for anyone.
        </summary>
      </div>
      <Slider />
      <DesktopSlider />
      <Image
        src={IphoneImg}
        alt='Iphone'
        className={`floating-element-2nd ${styles.iphone} ${imageInView ? 'visible' : ''}`}
        ref={imageRef}
      />
      <Image
        src={IphoneDesktopImg}
        alt='Iphone Desktop'
        ref={imageDesktopRef}
        className={`floating-element-2nd ${styles['iphone-desktop']} ${imageDesktopInView ? 'visible' : ''}`}
      />
    </section>
  );
};

export default TreasurerInvest;
