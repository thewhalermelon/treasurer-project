'use client';

import Image, { StaticImageData } from 'next/image';
import { useInView } from 'react-intersection-observer';

import styles from '../treasurerFeatures.module.scss';

import RightArrowImg from 'public/images/right-arrow.svg';

import TreasurerImage from '@/app/components/TreasurerImage/TreasurerImage';

interface TreasurerFeatureProps {
  icon: StaticImageData;
  title: string;
  summary: string;
  alt: string;
  images: { id: number; src: any; desktopSrc: any; alt: string; className: string }[];
}

const TreasurerFeature: React.FC<TreasurerFeatureProps> = ({ icon, title, summary, alt, images }) => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <main>
      <div ref={ref} className={`floating-element ${inView ? 'visible' : ''}`}>
        <Image src={icon} alt={alt} className={styles.orangeImg} />
        <h2>{title}</h2>
        <summary className='summary-14-primary'>{summary}</summary>
        <a className='rounded-arrow-button'>
          Start now
          <Image src={RightArrowImg} alt='Arrow' className={styles['right-arrow']} />
        </a>
      </div>
      <div className={styles.imagesGroup}>
        {images.map((img, index) => {
          return (
            <TreasurerImage
              src={img.src}
              alt={img.alt}
              className={`${styles[`${img.className}`]} ${`appear-element-desktop-${index + 1}`}`}
              key={img.id}
            />
          );
        })}
        {images.map((img, index) => {
          return (
            <TreasurerImage
              src={img.desktopSrc}
              alt={img.alt}
              className={`${styles[`${img.className}`]} ${styles.desktop} ${`appear-element-desktop-${index + 1}`} `}
              key={img.id}
            />
          );
        })}
      </div>
    </main>
  );
};

export default TreasurerFeature;
