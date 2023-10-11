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
import MagnifyingGlassImg from 'public/images/magnifying-glass.png';
import GreyRectangleImg from 'public/images/grey-rectangle.png';
import GreyMagnifyingGlassImg from 'public/images/grey-magnifying-glass.png';
import BlackMagnifyingGlassImg from 'public/images/black-magnifying-glass.png';
import ReceiptImg from 'public/images/receipt.png';
import ProtectShieldImg from 'public/images/protect-shield.png';
import ProtectSafeShieldImg from 'public/images/protect-safe-shield.png';
import VerticalOrangeLineImg from 'public/images/vertical-orange-line.png';
import CircleShieldImg from 'public/images/circle-shield.png';
import DataBaseImg from 'public/images/database.png';
import RolexPricesImg from 'public/images/rolex-prices.png';
import BagPricesImg from 'public/images/bag-prices.png';
import AnalyticChartImg from 'public/images/analytic-chart.png';
import BagPurchaseProcessImg from 'public/images/bag-purchase-process.png';
import RepaymentImg from 'public/images/repayment.png';

import Header from '@/app/components/Header/Header';
import Footer from '@/app/components/Footer/Footer';
import Divider from '@/app/components/Divider/Divider';
import Slider from '@/app/components/Slider/Slider';
import TreasurerFeatures from '@/app/components/TreasurerFeatures/TreasurerFeatures';
import Steps from '@/app/components/Steps/Steps';

interface HomePageProps {}

const BANNER_IMAGES = [
  {
    id: 0,
    src: DotImg,
    alt: 'Line',
    className: 'dot',
  },
  {
    id: 1,
    src: LineImg,
    alt: 'Line',
    className: 'line',
  },
  {
    id: 2,
    src: LineGraphImg,
    alt: 'Line Chart',
    className: 'graph',
  },
  {
    id: 3,
    src: RolexImg,
    alt: 'Rolex Watch',
    className: 'watch',
  },
  {
    id: 4,
    src: SafeImg,
    alt: 'Safe',
    className: 'safe',
  },
  {
    id: 5,
    src: HandBagImg,
    alt: 'Hand Bag',
    className: 'bag',
  },
  {
    id: 6,
    src: WineImg,
    alt: 'Wine',
    className: 'wine',
  },
];

const FEEDBACK = [
  {
    id: 0,
    title: '500,000+ happy customers.',
    summary: 'Using Sublime everyday and loving it!',
  },
  {
    id: 1,
    title: '42.1%',
    summary: 'highest return',
  },

  {
    id: 2,
    title: '14.6%',
    summary: 'average return',
  },

  {
    id: 3,
    title: '48%',
    summary: 'Reinvestment rate',
  },
];

const FEATURES = [
  {
    icon: MagnifyingGlassImg,
    title: 'Convenient & Smart',
    summary:
      'When recruiting pieces for each product, we receive consulting from experts to understand scarcity value, marketability, and transaction volume, and do our best to sell only collectible products.',
    images: [
      {
        src: GreyMagnifyingGlassImg,
        alt: 'Grey Glass',
        className: 'glass',
      },
      {
        src: GreyRectangleImg,
        alt: 'Rectangle',
        className: 'rectangle',
      },
      {
        src: RolexImg,
        alt: 'Watch',
        className: 'watch',
      },
      {
        src: HandBagImg,
        alt: 'Bag',
        className: 'bag',
      },
      {
        src: ReceiptImg,
        alt: 'Receipt',
        className: 'receipt',
      },
    ],
  },
  {
    icon: ProtectShieldImg,
    title: 'Thorough security & compensation system',
    summary:
      'In the event of theft, damage, etc. during consign- ment storage of goods at Treasurer, the insured insurance will cover and the estimated return will cover the owners of the pieces as much as much as each piece owner.',
    images: [
      {
        src: ProtectSafeShieldImg,
        alt: 'Protect Safe Shield',
        className: 'safeShield',
      },
      {
        src: VerticalOrangeLineImg,
        alt: 'Vertical Orange Line 1',
        className: 'firstLine',
      },
      {
        src: VerticalOrangeLineImg,
        alt: 'Vertical Orange Line 2',
        className: 'secondLine',
      },
      {
        src: CircleShieldImg,
        alt: 'Circle Shield 1',
        className: 'firstCircleShield',
      },
      {
        src: CircleShieldImg,
        alt: 'Circle Shield 2',
        className: 'secondCircleShield',
      },
    ],
  },
  {
    icon: DataBaseImg,
    title: 'Blue chip product sourcing by thorough analysis',
    summary:
      "Treasurer's AI crawls transaction data of more than 1 million Second Hands items a day from major auctions, direct transaction sites, and communities not only at home but also abroad.",
    images: [
      {
        src: RolexPricesImg,
        alt: 'Rolex Prices',
        className: 'rolexPrices',
      },
      {
        src: BagPricesImg,
        alt: 'Bag Prices',
        className: 'bagPrices',
      },
      {
        src: AnalyticChartImg,
        alt: 'Analytic Chart',
        className: 'analyticChart',
      },
      {
        src: AnalyticChartImg,
        alt: 'Analytic Chart',
        className: 'analyticChart1',
      },
    ],
  },
];

const HomePage: React.FC<HomePageProps> = () => {
  return (
    <>
      <Header />

      <section className={styles.section}>
        <article>
          <h3 className='title-14-grey'>55,000+ TRUSTED BUSINESSES</h3>
          <h1>Separate ownership of valuable items</h1>
          <summary className='summary-16-primary'>
            Treasurer is a platform that allows anyone to easily own and invest in world -recognized luxury goods such
            as Chanel, Rolex, and Romanée-Conti.
          </summary>
          <fieldset>
            <input type='email' placeholder='Enter your email address' />
            <button>Get Started</button>
          </fieldset>
        </article>
        <div className={styles.itemsGroup}>
          {BANNER_IMAGES.map((img) => {
            return <Image src={img.src} alt={img.alt} className={styles[`${img.className}`]} key={img.id} />;
          })}
        </div>
      </section>

      <div style={{ padding: '0 1.25rem' }}>
        <Divider color='var(--light-gray)' />
      </div>

      <section className={styles.section}>
        {FEEDBACK.map((f) => {
          return (
            <article key={f.id}>
              <h2>{f.title}</h2>
              <summary>{f.summary}</summary>
            </article>
          );
        })}
      </section>

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
            <TreasurerFeatures icon={f.icon} title={f.title} summary={f.summary}>
              {f.images.map((img) => {
                return <Image src={img.src} alt={img.alt} className={styles[`${img.className}`]} />;
              })}
            </TreasurerFeatures>
          );
        })}
      </section>

      <section className={styles.section}>
        <h2 className='title-34-black-center'>3 Step (WIP)</h2>
        <h2 className='title-34-black-center'>Investment Process</h2>

        <Steps
          step='STEP 01'
          title='Purchase of spot assets'
          summary='We compare and select products with high collection value among products purchased by individuals or
            difficult to manage'
        >
          <Image src={BlackMagnifyingGlassImg} alt='Black Glass' className={styles.glass} />
          <Image src={GreyRectangleImg} alt='Rectangle' className={styles.rectangle} />
          <Image src={RolexImg} alt='Watch' className={styles.watch} />
          <Image src={HandBagImg} alt='Bag' className={styles.bag} />
          <Image src={ReceiptImg} alt='Receipt' className={styles.receipt} />
        </Steps>

        <Steps
          step='STEP 02'
          title='Ownership of piece open'
          summary='Divide ownership of high-priced in-kind assets into $1 units to proceed with joint purchase'
        >
          <Image src={BagPurchaseProcessImg} alt='Bag Purchase Process' className={styles.purchaseProcess} />
        </Steps>

        <Steps
          step='STEP 03'
          title='Repayment of profits after the sale'
          summary='Products that have been recruited for sculptures will be sold in the future, which will be judged to have
            risen in value, and the profits generated will be repaid.'
        >
          <Image src={RepaymentImg} alt='Repayment' className={styles.purchaseProcess} />
        </Steps>
      </section>

      <section className={styles.section}>
        <div>
          <div>
            <h2 className='title-34-black-center'>Investment</h2>
            <h2 className='title-34-black-center'>Products</h2>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default HomePage;
