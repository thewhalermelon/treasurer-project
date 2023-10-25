import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

import styles from '../page.module.scss';
import classes from '@/app/components/TreasurerProducts/treasurerProducts.module.scss';

import WhiteMagnifyingGlassImg from 'public/images/white-magnifying-glass.svg';
import DetailImg from 'public/images/detail.svg';
import OfferImg from 'public/images/offer.svg';
import StorageImg from 'public/images/storage.svg';
import GoogleMapImg from 'public/images/google-map.png';
import BigOrangeTriangleImg from 'public/images/big-orange-triangle.svg';
import BigGreyNoticeImg from 'public/images/big-grey-notice.svg';
import RightArrowImg from 'public/images/right-arrow.svg';

import { TRENDING_SEARCHES } from '@/app/constants';
import Footer from '@/app/components/Footer/Footer';
import Header from '@/app/components/Header/Header';
import ProductCard from '@/app/components/ProductCard/ProductCard';
import Slider from './slider';
import Purchase from './purchase';

import getDetailPage, { ProductData } from '@/app/libs/getDetailPage';
import getRelatedProducts, { ApiResponse } from '@/app/libs/getRelatedProducts';

interface CollectionProps {
  params: { id: number };
}

type Props = {
  params: { id: number };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  // read route params
  const id = params.id;

  // fetch data
  const product = await getDetailPage(id);

  return {
    title: `${product.data.brand} - ${product.data.model}`,
  };
}

const Collection: React.FC<CollectionProps> = async ({ params }) => {
  const productData: Promise<ProductData> = getDetailPage(params.id);
  const relatedData: Promise<ApiResponse> = getRelatedProducts();

  const [product, relatedProducts] = await Promise.all([productData, relatedData]);

  return (
    <>
      <Header />
      <aside className={styles.categorySearch}>
        <div className={styles.searchInput}>
          <Image src={WhiteMagnifyingGlassImg} alt='White Magnifying Glass' width={17} height={17} />
          <label htmlFor='text'>Search:</label>
          <input type='text' id='text' name='text' placeholder='Search' />
        </div>
        <nav>
          <h5>Trending searches</h5>
          <ul>
            {TRENDING_SEARCHES.map((c) => {
              return (
                <li key={c.id}>
                  <button>{c.content}</button>
                </li>
              );
            })}
          </ul>
        </nav>
      </aside>
      <main className={`container ${styles.main}`}>
        <Slider product={product} />

        <Purchase product={product} />

        <div className={styles.productDetail}>
          <div className={styles.header}>
            <Image src={DetailImg} alt='Detail' />
            <h3>Details</h3>
          </div>
          <div className={styles.body}>
            <div className={styles.sub}>
              <h5>Model Name</h5>
              <p>{product.data.model}</p>
            </div>

            <hr />

            <div className={styles.section}>
              <div className={styles.sub}>
                <h5>Warranty Spamming Date</h5>
                <p>2020</p>
              </div>
              <div className={styles.sub}>
                <h5>Product Status</h5>
                <p>N-S class</p>
              </div>
              <div className={styles.sub}>
                <h5>Retail Price</h5>
                <p>52.14 million won (2022)</p>
              </div>
            </div>

            <hr />

            <div className={styles.section}>
              <div className={styles.sub}>
                <h5>Bracelet Type</h5>
                <p>Oyster, wide 3-row link</p>
              </div>
              <div className={styles.sub}>
                <h5>Crystal</h5>
                <p>
                  Scratch-resistant sapphire,
                  <br />
                  date display Cyclops convex lens
                </p>
              </div>
              <div className={styles.sub}>
                <h5>Material</h5>
                <p>18 carat white gold</p>
              </div>
              <div className={styles.sub}>
                <h5>Bezel</h5>
                <p>
                  One-way rotation with 60-minute graduations;
                  <br />
                  Scratch-resistant Cerachrome ceramic,
                  <br />
                  Platinum-coated numerals and scales
                </p>
              </div>
            </div>

            <hr />

            <div className={styles.section}>
              <div className={styles.sub}>
                <h5>Power Reserve</h5>
                <p>About 50 hours</p>
              </div>
              <div className={styles.sub}>
                <h5>Waterproof</h5>
                <p>Waterproof to 300M depth</p>
              </div>
              <div className={styles.sub}>
                <h5>Dial</h5>
                <p>black</p>
              </div>
              <div className={styles.sub}>
                <h5>Movement</h5>
                <p>
                  Automatic winding mechanism
                  <br />
                  Perpetual movement, caliber 3135
                </p>
              </div>
              <div className={styles.sub}>
                <h5>Size</h5>
                <p>40mm</p>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.productMore}>
          <div className={styles.offers}>
            <div className={styles.header}>
              <Image src={OfferImg} alt='Offer' />
              <h3>Offers</h3>
            </div>
            <div className={styles.body}>
              <div className={styles['body-header']}>
                <span style={{ minWidth: 111 }}>Price</span>
                <span style={{ minWidth: 158 }}>Quantity</span>
                <span style={{ minWidth: 167 }}>Transaction Price</span>
                <span>Expiration</span>
              </div>

              <hr />

              <div className={styles['body-body']}>
                <span style={{ minWidth: 111 }}>$1.23</span>
                <span style={{ minWidth: 158 }}>2</span>
                <span style={{ minWidth: 167 }}>$2.46</span>
                <span>in 59 minutes</span>
              </div>
              <hr />

              <div className={styles['body-body']}>
                <span style={{ minWidth: 111 }}>$1.23</span>
                <span style={{ minWidth: 158 }}>2</span>
                <span style={{ minWidth: 167 }}>$2.46</span>
                <span>in 59 minutes</span>
              </div>
              <hr />

              <div className={styles['body-body']}>
                <span style={{ minWidth: 111 }}>$1.23</span>
                <span style={{ minWidth: 158 }}>2</span>
                <span style={{ minWidth: 167 }}>$2.46</span>
                <span>in 59 minutes</span>
              </div>
              <hr />

              <div className={styles['body-body']}>
                <span style={{ minWidth: 111 }}>$1.23</span>
                <span style={{ minWidth: 158 }}>2</span>
                <span style={{ minWidth: 167 }}>$2.46</span>
                <span>in 59 minutes</span>
              </div>
              <hr />

              <div className={styles['body-body']}>
                <span style={{ minWidth: 111 }}>$1.23</span>
                <span style={{ minWidth: 158 }}>2</span>
                <span style={{ minWidth: 167 }}>$2.46</span>
                <span>in 59 minutes</span>
              </div>
              <hr />

              <div className={styles['body-body']}>
                <span style={{ minWidth: 111 }}>$1.23</span>
                <span style={{ minWidth: 158 }}>2</span>
                <span style={{ minWidth: 167 }}>$2.46</span>
                <span>in 59 minutes</span>
              </div>
            </div>
          </div>

          <div className={styles.storage}>
            <div className={styles.header}>
              <Image src={StorageImg} alt='Storage' />
              <h3>Storage</h3>
            </div>
            <div className={styles.body}>
              <div className={styles['google-map']}>
                <Image src={GoogleMapImg} alt='Google Map' />
              </div>
              <div className={styles.address}>
                <h5>Vault Zero [Treasurer Showroom]</h5>
                <p>18, Dosan-daero 15-gil, Gangnam-gu, Seoul, Republic of Korea</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <div className={`container ${styles.productPurchase}`}>
        <div className={styles.header}>
          <h2>Purchase Value</h2>
          <Image src={BigGreyNoticeImg} alt='Notice' />
        </div>
        <div className={styles.body}>
          <div className={styles.inclination}>
            <h3>Product Inclination</h3>
            <h2>{product.data.riskEN}</h2>
          </div>

          <hr />

          <div className={styles.rate}>
            <h3>Expected Rate Of Return (1 Year)</h3>
            <h2>
              <Image src={BigOrangeTriangleImg} alt='Big Orange Triangle' />
              {`${product.data.estimatedReturn}%`}
            </h2>
          </div>

          <hr />

          <div className={styles.period}>
            <h3>Expected monetization period</h3>
            <h2>{product.data.periodEN}</h2>
          </div>
        </div>
      </div>

      <div className={`container ${styles.productCollections}`}>
        <h2>Related Collections</h2>
        <div aria-label='Product List' className={classes.productList} style={{ paddingTop: '1.5rem' }}>
          {relatedProducts.data.map((p, i) => {
            return (
              <ProductCard
                id={p.id}
                key={p.id}
                src={p.thumbnail}
                alt='Product Image'
                name={p.brand}
                desc={p.model}
                marketPrice={p.appraisalPriceUSD}
                piecePrice={p.currentSingleUnitPriceUSD}
                currentPrice={p.currentSingleUnitPriceUSD}
                lastestPrice={p.lastTradePriceUSD}
                index={i}
              />
            );
          })}
        </div>
      </div>

      <Link className={`rounded-arrow-button ${styles.moreButton}`} href={'/collections'}>
        MORE
        <Image src={RightArrowImg} alt='Arrow' />
      </Link>
      <Footer />
    </>
  );
};

export default Collection;
