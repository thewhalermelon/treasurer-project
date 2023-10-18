import Image from 'next/image';
import Link from 'next/link';

import styles from './page.module.scss';

import RightArrowImg from 'public/images/right-arrow.svg';

import { FEATURES, PRODUCTS, STEPS } from '@/app/constants';
import Header from '@/app/components/Header/Header';
import Footer from '@/app/components/Footer/Footer';
import Divider from '@/app/components/Divider/Divider';
import TreasurerFeatures from '@/app/components/TreasurerFeatures/TreasurerFeatures';
import Steps from '@/app/components/Steps/Steps';
import Categories from '@/app/components/Categories/Categories';
import ProductCard from '@/app/components/ProductCard/ProductCard';
import BrandsSlider from '@/app/components/BrandsSlider/BrandsSlider';
import TreasurerBanner from '@/app/components/TreasurerBanner/TreasurerBanner';
import TreasurerData from '@/app/components/TreasurerData/TreasurerData';
import DesktopBrandsSlider from '@/app/components/DesktopBrandsSlider/DesktopBrandsSlider';
import TreasurerInvest from '@/app/components/TreasurerInvest/TreasurerInvest';
import TreasurerSubscribe from '@/app/components/TreasurerSubscribe/TreasurerSubscribe';

interface HomePageProps {}

const HomePage: React.FC<HomePageProps> = () => {
  return (
    <>
      <Header />

      {/* SECTION 1ST */}
      <TreasurerBanner />

      <div style={{ padding: '0 1.25rem' }}>
        <Divider color='var(--light-gray)' />
      </div>

      {/* SECTION 2ND */}
      <TreasurerData />

      <div style={{ padding: '0 1.25rem' }}>
        <Divider color='var(--light-gray)' />
      </div>

      {/* SECTION 3RD */}
      <TreasurerInvest />

      {/* SECTION 4TH */}
      <section className={styles.section}>
        {FEATURES.map((f) => {
          return (
            <TreasurerFeatures
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

      {/* SECTION 5TH */}
      <section className={styles.section}>
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

      {/* SECTION 6TH */}
      <section className={styles.section}>
        <div>
          <div>
            <h2 className='title-34-black-center'>Investment Products</h2>
          </div>
          <Categories />
        </div>
        <main aria-label='Product List' className={styles.productList}>
          {PRODUCTS.map((p, i) => {
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
                index={i}
              />
            );
          })}
        </main>
        <Link className='rounded-arrow-button' href={'/collections'}>
          ALL Products
          <Image src={RightArrowImg} alt='Arrow' className={styles['right-arrow']} />
        </Link>
      </section>

      {/* SECTION 7TH */}
      <TreasurerSubscribe />

      <div className='slider-container'>
        <BrandsSlider />
        <DesktopBrandsSlider />
      </div>
      <Footer />
    </>
  );
};

export default HomePage;
