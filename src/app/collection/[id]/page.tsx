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

  const formattedProductDetails = (details: string) => {
    return details?.split('\n').map((line) => {
      const [title, value] = line.split(': ');
      return {
        title: title?.trim(),
        value: value?.trim(),
      };
    });
  };

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
              {formattedProductDetails(product.data.basicInformationEN)?.map((item) => {
                return (
                  <div className={styles.sub} key={item.title}>
                    <h5>{item.title}</h5>
                    <p>{item.value}</p>
                  </div>
                );
              })}
            </div>

            <hr />

            <div className={styles.section}>
              {formattedProductDetails(product.data.materialEN)?.map((item) => {
                return (
                  <div className={styles.sub} key={item.title}>
                    <h5>{item.title}</h5>
                    <p>{item.value}</p>
                  </div>
                );
              })}
            </div>

            <hr />

            <div className={styles.section}>
              {formattedProductDetails(product.data.descriptionEN)?.map((item) => {
                return (
                  <div className={styles.sub} key={item.title}>
                    <h5>{item.title}</h5>
                    <p>{item.value}</p>
                  </div>
                );
              })}
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
            {product.data.estimatedReturn ? (
              <h2>
                <Image src={BigOrangeTriangleImg} alt='Big Orange Triangle' />
                {`${product.data.estimatedReturn}%`}
              </h2>
            ) : (
              <h2></h2>
            )}
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
