import Image from 'next/image';

import { STEPS } from '@/app/constants';

import styles from './treasurerSteps.module.scss';

import Steps from '@/app/components/Steps/Steps';

interface TreasurerStepsProps {}

const TreasurerSteps: React.FC<TreasurerStepsProps> = () => {
  return (
    <section className={styles.firthSection}>
      <h2 className='title-34-black-center'>3 Step</h2>
      <h2 className='title-34-black-center'>Investment Process</h2>
      <h2 className={`title-34-black-center ${styles.desktop}`}>3 Step Investment Process</h2>

      <div>
        {STEPS.map((s, i) => {
          return (
            <Steps step={s.step} title={s.title} summary={s.summary} key={s.id} index={i}>
              {s.images.map((i) => {
                return <Image src={i.src} alt={i.alt} className={styles[`${i.className}`]} key={i.id} />;
              })}

              <Image
                src={s.desktopImage.src}
                alt={s.desktopImage.alt}
                className={`${styles[`${s.desktopImage.className}`]} ${styles.steps}`}
              />
            </Steps>
          );
        })}
      </div>
    </section>
  );
};

export default TreasurerSteps;
