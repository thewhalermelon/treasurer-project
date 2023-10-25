import type { Metadata } from 'next';

import Header from '@/app/components/Header/Header';
import Footer from '@/app/components/Footer/Footer';
import Divider from '@/app/components/Divider/Divider';
import TreasurerFeatures from '@/app/components/TreasurerFeatures/TreasurerFeatures';
import BrandsSlider from '@/app/components/BrandsSlider/BrandsSlider';
import TreasurerBanner from '@/app/components/TreasurerBanner/TreasurerBanner';
import TreasurerData from '@/app/components/TreasurerData/TreasurerData';
import DesktopBrandsSlider from '@/app/components/DesktopBrandsSlider/DesktopBrandsSlider';
import TreasurerInvest from '@/app/components/TreasurerInvest/TreasurerInvest';
import TreasurerSubscribe from '@/app/components/TreasurerSubscribe/TreasurerSubscribe';
import TreasurerSteps from '@/app/components/TreasurerSteps/TreasurerSteps';
import TreasurerProducts from '@/app/components/TreasurerProducts/TreasurerProducts';

interface HomePageProps {}

export const metadata: Metadata = {
  title: 'Treasurer',
};

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
