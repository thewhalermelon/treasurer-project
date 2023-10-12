'use client';

import { ReactNode } from 'react';
import { useInView } from 'react-intersection-observer';

import styles from '@/app/homepage/page.module.scss';
import useWindowWidth from '@/app/hooks/useWindowWidth';

interface StepsProps {
  step: string;
  title: string;
  summary: string;
  children: ReactNode;
  index: number;
}

const Steps: React.FC<StepsProps> = ({ step, title, summary, children, index }) => {
  const windowWidth = useWindowWidth();
  const [ref, inView] = useInView({
    threshold: 1,
    triggerOnce: true,
  });

  return (
    <article
      ref={ref}
      className={`${
        windowWidth && windowWidth >= 1920 ? styles[`appear-element-desktop-${index}`] : styles['appear-element']
      } ${inView ? styles.visible : ''}`}
    >
      <div className={styles.imagesGroup}>{children}</div>
      <h3 className='title-13-orange-left'>{step}</h3>
      <h2 className='title-20-black'>{title}</h2>
      <summary className='summary-14-primary'>{summary}</summary>
    </article>
  );
};

export default Steps;
