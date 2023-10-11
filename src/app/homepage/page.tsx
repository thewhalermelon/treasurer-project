import Image from 'next/image';

import styles from './page.module.scss';

import SmallIphoneImg from 'public/images/iphone-small.png';
import RightArrowImg from 'public/images/right-arrow.png';

import { FEATURES, FEEDBACK, ORANGE_CHART, PRODUCTS, STEPS } from '@/app/constants';
import Header from '@/app/components/Header/Header';
import Footer from '@/app/components/Footer/Footer';
import Divider from '@/app/components/Divider/Divider';
import Slider from '@/app/components/Slider/Slider';
import TreasurerFeatures from '@/app/components/TreasurerFeatures/TreasurerFeatures';
import Steps from '@/app/components/Steps/Steps';
import Categories from '@/app/components/Categories/Categories';
import ProductCard from '@/app/components/ProductCard/ProductCard';
import BrandsSlider from '@/app/components/BrandsSlider/BrandsSlider';
import TreasurerBanner from '@/app/components/TreasurerBanner/TreasurerBanner';
import TreasurerData from '@/app/components/TreasurerData/TreasurerData';

interface HomePageProps {}

const HomePage: React.FC<HomePageProps> = () => {
  return (
    <>
      <Header />

      <TreasurerBanner />

      <div style={{ padding: '0 1.25rem' }}>
        <Divider color='var(--light-gray)' />
      </div>

      <TreasurerData />

      <div style={{ padding: '0 1.25rem' }}>
        <Divider color='var(--light-gray)' />
      </div>

      <section className={styles.section}>
        <h3 className='title-13-orange-center'>WHO WE ARE</h3>
        <h2>Invest in your passions,</h2>
        <h2>one share at a time</h2>
        <summary>Treasureers provide easy and sensual collection investment opportunities for anyone.</summary>
        <Slider />
        <Image src={SmallIphoneImg} alt='Iphone' className={styles.smallIphone} />
      </section>

      <section className={styles.section}>
        {FEATURES.map((f) => {
          return (
            <TreasurerFeatures icon={f.icon} title={f.title} summary={f.summary} key={f.id}>
              {f.images.map((img) => {
                return <Image src={img.src} alt={img.alt} className={styles[`${img.className}`]} key={img.id} />;
              })}
            </TreasurerFeatures>
          );
        })}
      </section>

      <section className={styles.section}>
        <h2 className='title-34-black-center'>3 Step</h2>
        <h2 className='title-34-black-center'>Investment Process</h2>

        {STEPS.map((s) => {
          return (
            <Steps step={s.step} title={s.title} summary={s.summary} key={s.id}>
              {s.images.map((i) => {
                return <Image src={i.src} alt={i.alt} className={styles[`${i.className}`]} key={i.id} />;
              })}
            </Steps>
          );
        })}
      </section>

      <section className={styles.section}>
        <div>
          <div>
            <h2 className='title-34-black-center'>Investment</h2>
            <h2 className='title-34-black-center'>Products</h2>
          </div>
          <Categories />
        </div>
        <main aria-label='Product List'>
          {PRODUCTS.map((p) => {
            return (
              <ProductCard
                key={p.id}
                src={p.imageSrc}
                alt={p.imageAtl}
                name={p.name}
                desc={p.desc}
                marketPrice={p.marketPrice}
                piecePrice={p.piecePrice}
                save={p.save}
              />
            );
          })}
          <a className='rounded-arrow-button'>
            ALL Products
            <Image src={RightArrowImg} alt='Arrow' className={styles['right-arrow']} />
          </a>
        </main>
      </section>

      <section className={styles.section}>
        <h2 className='title-34-white-center'>Own a piece</h2>
        <h2 className='title-34-white-center'>of rare collectibles</h2>
        <h2 className='title-34-white-center'>without breaking the bank.</h2>
        <fieldset>
          <input type='email' placeholder='Enter your email address' />
          <button>Get Started</button>
        </fieldset>
        {ORANGE_CHART.map((i, index) => {
          return <Image src={i.src} alt={i.alt} className={styles[`${i.className}`]} key={index} />;
        })}
      </section>

      <BrandsSlider />
      <Footer />
    </>
  );
};

export default HomePage;
