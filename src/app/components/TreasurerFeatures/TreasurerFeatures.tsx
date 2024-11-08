import { ReactNode } from 'react';
import Image, { StaticImageData } from 'next/image';

import styles from '@/app/homepage/page.module.scss';

import RightArrowImg from 'public/images/right-arrow.png';

interface TreasurerFeaturesProps {
  icon: StaticImageData;
  title: string;
  summary: string;
  children: ReactNode;
}

const TreasurerFeatures: React.FC<TreasurerFeaturesProps> = ({ icon, title, summary, children }) => {
  return (
    <div>
      <div>
        <Image src={icon} alt='Grey Glass' className={styles.glass} />
        <h2>{title}</h2>
        <summary className='summary-14-primary'>{summary}</summary>
        <a className='rounded-arrow-button'>
          Start now
          <Image src={RightArrowImg} alt='Arrow' className={styles['right-arrow']} />
        </a>
      </div>
      <div className={styles.imagesGroup}>{children}</div>
    </div>
  );
};

export default TreasurerFeatures;
