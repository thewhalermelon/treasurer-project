'use client';

import styles from './treasurerFeatures.module.scss';

import { FEATURES } from '@/app/constants';
import TreasurerFeature from './TreasurerFeature/TreasurerFeature';

interface TreasurerFeaturesProps {}

const TreasurerFeatures: React.FC<TreasurerFeaturesProps> = () => {
  return (
    <section className={styles.forthSection}>
      {FEATURES.map((f) => {
        return (
          <TreasurerFeature
            icon={f.icon}
            title={f.title}
            summary={f.summary}
            alt={f.alt}
            key={f.id}
            images={f.images}
          />
        );
      })}
    </section>
  );
};

export default TreasurerFeatures;
