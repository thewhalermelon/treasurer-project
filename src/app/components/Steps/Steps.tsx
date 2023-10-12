import { ReactNode } from 'react';

import styles from '@/app/homepage/page.module.scss';

interface StepsProps {
  step: string;
  title: string;
  summary: string;
  children: ReactNode;
}

const Steps: React.FC<StepsProps> = ({ step, title, summary, children }) => {
  return (
    <article>
      <div className={styles.imagesGroup}>{children}</div>
      <h3 className='title-13-orange-left'>{step}</h3>
      <h2 className='title-20-black'>{title}</h2>
      <summary className='summary-14-primary'>{summary}</summary>
    </article>
  );
};

export default Steps;
