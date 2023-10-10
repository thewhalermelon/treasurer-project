import Image from 'next/image';

import styles from './page.module.scss';

import LineGraphImg from 'public/images/line-graph.svg';
import RolexImg from 'public/images/rolex.png';
import SafeImg from 'public/images/safe.png';
import HandBagImg from 'public/images/hand-bag.png';
import WineImg from 'public/images/wine.png';
import LineImg from 'public/images/line.png';
import DotImg from 'public/images/dot.png';

import Header from '@/app/components/Header/Header';
import Footer from '@/app/components/Footer/Footer';
import Divider from '@/app/components/Divider/Divider';

interface HomePageProps {}

const HomePage: React.FC<HomePageProps> = () => {
  return (
    <>
      <Header />
      <section className={styles.section}>
        <div>
          <h3>55,000+ TRUSTED BUSINESSES</h3>
          <h1>Separate ownership of valuable items</h1>
          <summary>
            Treasurer is a platform that allows anyone to easily own and invest in world -recognized luxury goods such
            as Chanel, Rolex, and Romanée-Conti.
          </summary>
          <fieldset>
            <input type='email' placeholder='Enter your email address' />
            <button>Get Started</button>
          </fieldset>
        </div>
        <div className={styles.itemsGroup}>
          <Image src={DotImg} alt='Line' className={styles.dot} />
          <Image src={LineImg} alt='Line' className={styles.line} />
          <Image src={LineGraphImg} alt='Line Chart' className={styles.graph} />
          <Image src={RolexImg} alt='Rolex Watch' className={styles.watch} />
          <Image src={SafeImg} alt='Safe' className={styles.safe} />
          <Image src={HandBagImg} alt='Hand Bag' className={styles.bag} />
          <Image src={WineImg} alt='Wine' className={styles.wine} />
        </div>
      </section>
      <Divider color='var(--light-gray)' width='331px' />
      <Footer />
    </>
  );
};

export default HomePage;
