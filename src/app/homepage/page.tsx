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
import TreasurerSteps from '@/app/components/TreasurerSteps/TreasurerSteps';
import TreasurerProducts from '@/app/components/TreasurerProducts/TreasurerProducts';

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
      <TreasurerFeatures />

      {/* SECTION 5TH */}
      <TreasurerSteps />

      {/* SECTION 6TH */}
      <TreasurerProducts />

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
