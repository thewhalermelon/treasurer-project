'use client';

import { ReactNode } from 'react';
import Image, { StaticImageData } from 'next/image';
import { useInView } from 'react-intersection-observer';

import styles from '@/app/homepage/page.module.scss';

import RightArrowImg from 'public/images/right-arrow.svg';

interface TreasurerFeaturesProps {
  icon: StaticImageData;
  title: string;
  summary: string;
  children: ReactNode;
  alt: string;
}

const TreasurerFeatures: React.FC<TreasurerFeaturesProps> = ({ icon, title, summary, children, alt }) => {
  const [ref, inView] = useInView({
    threshold: 1,
    triggerOnce: true,
  });

  return (
    <main>
      <div ref={ref} className={`${styles['floating-element']} ${inView ? styles.visible : ''}`}>
        <Image src={icon} alt={alt} className={styles.orangeImg} />
        <h2>{title}</h2>
        <summary className='summary-14-primary'>{summary}</summary>
        <a className='rounded-arrow-button'>
          Start now
          <Image src={RightArrowImg} alt='Arrow' className={styles['right-arrow']} />
        </a>
      </div>
      <div className={styles.imagesGroup}>{children}</div>
    </main>
  );
};

export default TreasurerFeatures;
