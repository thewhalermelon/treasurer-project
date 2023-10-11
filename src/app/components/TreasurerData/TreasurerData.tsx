'use client';

import CountUp from 'react-countup';

import styles from '@/app/homepage/page.module.scss';

import { FEEDBACK } from '@/app/constants';

interface TreasurerDataProps {}

const TreasurerData: React.FC<TreasurerDataProps> = () => {
  return (
    <section className={styles.section}>
      <article>
        <h2>
          <CountUp start={250000} end={500000} duration={5} />+ happy customers.
        </h2>
        <summary>Using Sublime everyday and loving it!</summary>
      </article>
      {FEEDBACK.map((f) => {
        return (
          <article key={f.id}>
            <h2>
              <CountUp start={0} end={f.title} duration={5} />
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
