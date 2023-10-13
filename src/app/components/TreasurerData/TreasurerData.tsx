'use client';

import React from 'react';

import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

import styles from '@/app/homepage/page.module.scss';

import { FEEDBACK } from '@/app/constants';

interface TreasurerDataProps {}

const TreasurerData: React.FC<TreasurerDataProps> = () => {
  const [ref, inView] = useInView({
    threshold: 1,
    triggerOnce: true,
  });

  const [timeoutState, setTimeoutState] = React.useState<Boolean>(false);

  React.useEffect(() => {
    if (inView) {
      setTimeout(() => {
        setTimeoutState(true);
      }, 500);
    }
  }, [inView]);

  return (
    <section className={styles.section}>
      <article className={`${styles['floating-element']} ${inView ? styles.visible : ''}`} ref={ref}>
        <h2>500.000+ happy customers.</h2>
        <summary>Using Sublime everyday and loving it!</summary>
      </article>
      {FEEDBACK.map((f) => {
        return (
          <article key={f.id}>
            <h2>
              {timeoutState ? (
                <CountUp
                  start={timeoutState ? 5.5 : undefined}
                  end={f.title}
                  duration={5}
                  decimals={f.title % 1 !== 0 ? 1 : 0}
                />
              ) : (
                0
              )}
              {f.unit}
            </h2>
            <summary>{f.summary}</summary>
          </article>
        );
      })}
    </section>
  );
};

export default TreasurerData;
