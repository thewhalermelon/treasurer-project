import Image from 'next/image';

import styles from './page.module.scss';

import LineGraphImg from 'public/images/line-graph.svg';
import RolexImg from 'public/images/rolex.png';
import SafeImg from 'public/images/safe.png';
import HandBagImg from 'public/images/hand-bag.png';
import WineImg from 'public/images/wine.png';
import LineImg from 'public/images/line.png';
import DotImg from 'public/images/dot.png';
import SmallIphoneImg from 'public/images/iphone-small.png';

import Header from '@/app/components/Header/Header';
import Footer from '@/app/components/Footer/Footer';
import Divider from '@/app/components/Divider/Divider';
import Slider from '@/app/components/Slider/Slider';

interface HomePageProps {}

const HomePage: React.FC<HomePageProps> = () => {
  return (
    <>
      <Header />

      <section className={styles.section}>
        <article>
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
        </article>
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

      <div style={{ padding: '0 1.25rem' }}>
        <Divider color='var(--light-gray)' />
      </div>

      <section className={styles.section}>
        <article>
          <h2>500,000+ happy customers.</h2>
          <summary>Using Sublime everyday and loving it!</summary>
        </article>
        <article>
          <h2>42.1%</h2>
          <summary>highest return</summary>
        </article>
        <article>
          <h2>14.6%</h2>
          <summary>average return</summary>
        </article>
        <article>
          <h2>48%</h2>
          <summary>Reinvestment rate</summary>
        </article>
      </section>

      <div style={{ padding: '0 1.25rem' }}>
        <Divider color='var(--light-gray)' />
      </div>

      <section className={styles.section}>
        <h3>WHO WE ARE</h3>
        <h2>Invest in your passions,</h2>
        <h2>one share at a time</h2>
        <summary>Treasureers provide easy and sensual collection investment opportunities for anyone.</summary>
        <Slider />
        <Image src={SmallIphoneImg} alt='small-iphone' className={styles.smallIphone} />
      </section>
      <Footer />
    </>
  );
};

export default HomePage;
