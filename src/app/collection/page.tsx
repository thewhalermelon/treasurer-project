'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useKeenSlider } from 'keen-slider/react';

import styles from './collection.module.scss';
import classes from '@/app/homepage/page.module.scss';

import WhiteMagnifyingGlassImg from 'public/images/white-magnifying-glass.svg';
import RolexDetailImg from 'public/images/rolex-detail.svg';
import FilledSaveImg from 'public/images/filled-save.svg';
import OutlinedSaveImg from 'public/images/outlined-save.svg';
import OrangeTriangleImg from 'public/images/orange-triangle.svg';
import GreyNoticeImg from 'public/images/grey-notice.svg';
import BookMarkImg from 'public/images/bookmark.svg';
import ArrowLeftImg from 'public/images/arrow-left.svg';
import DetailImg from 'public/images/detail.svg';
import OfferImg from 'public/images/offer.svg';
import StorageImg from 'public/images/storage.svg';
import PlusIconImg from 'public/images/plus-icon.svg';
import GoogleMapImg from 'public/images/google-map.png';
import BigOrangeTriangleImg from 'public/images/big-orange-triangle.svg';
import BigGreyNoticeImg from 'public/images/big-grey-notice.svg';
import RightArrowImg from 'public/images/right-arrow.svg';

import { PRODUCTS, TRENDING_SEARCHES } from '@/app/constants';
import Footer from '@/app/components/Footer/Footer';
import Header from '@/app/components/Header/Header';
import ProductCard from '@/app/components/ProductCard/ProductCard';
import Popup from '@/app/components/Popup/Popup';

interface CollectionProps {}

const Collection: React.FC<CollectionProps> = () => {
  const [isSelected, setIsSelected] = React.useState<number>(0);
  const [amount, setAmount] = React.useState<number>(1);
  const [popup, setPopup] = React.useState<Boolean>(false);

  const imagesArray = Array.from({ length: 4 }, (_, i) => i + 1);

  const [currentSlide, setCurrentSlide] = React.useState(0);
  const [loaded, setLoaded] = React.useState(false);
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
  });

  const handleFavorite = (i: number) => {
    setIsSelected(i === isSelected ? 0 : i);
  };

  const handleTrendingSearch = () => {
    return alert('Not implemented');
  };

  const decreaseAmount = () => {
    return setAmount(amount === 1 ? amount : amount - 1);
  };

  const increaseAmount = () => {
    setAmount(amount + 1);
  };

  const handlePopup = () => {
    setPopup(!popup);
  };

  React.useEffect(() => {
    if (popup) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [popup]);

  return (
    <>
      <Header />
      <aside className={styles.categorySearch}>
        <div className={styles.searchInput}>
          <Image src={WhiteMagnifyingGlassImg} alt='White Magnifying Glass' />
          <label htmlFor='text'>Search:</label>
          <input type='text' id='text' name='text' placeholder='Search' />
        </div>
        <nav>
          <h5>Trending searches</h5>
          <ul>
            {TRENDING_SEARCHES.map((c) => {
              return (
                <li key={c.id}>
                  <button onClick={handleTrendingSearch}>{c.content}</button>
                </li>
              );
            })}
          </ul>
        </nav>
      </aside>
      <main className={`container ${styles.main}`}>
        <div className={styles['navigation-wrapper']}>
          <div ref={sliderRef} className={styles['keen-slider']}>
            {imagesArray.map((i) => {
              return (
                <div key={i} className={`keen-slider__slide number-slide${i} ${styles.slider}`}>
                  <Image src={RolexDetailImg} alt={'Rolex'} />
                  <button onClick={() => handleFavorite(i)}>
                    <Image
                      src={isSelected === i ? FilledSaveImg : OutlinedSaveImg}
                      alt='Outlined Save'
                      className={styles.favorite}
                    />
                  </button>
                </div>
              );
            })}
          </div>
          {loaded && instanceRef.current && (
            <div className={`dots ${styles.dots}`}>
              {imagesArray.map((idx) => {
                return (
                  <button
                    key={idx}
                    onClick={() => {
                      instanceRef.current?.moveToIdx(idx);
                    }}
                    className={`dot ${styles.dot}` + (currentSlide === idx - 1 ? ` active ${styles.active}` : '')}
                  ></button>
                );
              })}
            </div>
          )}
        </div>

        <div className={styles.productPrices}>
          <h3>ROLEX</h3>
          <h1>Rolex Submariner Date Black Dial Two Tone 126613LN</h1>

          <div className={styles.prices}>
            <div className={styles.priceTitle}>
              <h6>Market Price</h6>
              <h6>Piece Price</h6>
            </div>
            <div className={styles.priceNumber}>
              <h5>US$1.8M</h5>
              <h5>US$1.23</h5>
            </div>

            <div className={styles.save}>
              <Image src={OrangeTriangleImg} alt='Triangle' />
              <h6>$1 (23.08%)</h6>
            </div>

            <div className={styles.amount}>
              <div className={styles.notice}>
                <Image src={GreyNoticeImg} alt='Notice' />
                <span>This amount includes the commission fee.</span>
              </div>
              <div className={styles.buttons}>
                <button className={styles.minus} onClick={decreaseAmount}>
                  <div style={{ backgroundColor: amount > 1 ? '#000' : '#969A9B' }} />
                </button>
                <span className={styles.total}>{amount}</span>
                <button className={styles.plus} onClick={increaseAmount}>
                  <Image src={PlusIconImg} alt='Plus Button' />
                </button>
              </div>
            </div>

            <Link href='' className={styles.buyButton}>
              Buy now
            </Link>
          </div>

          <div className={styles.notice}>
            <Image src={BookMarkImg} alt='Bookmark' />
            <h5>
              If this is your first visit, <span>we will tell you in detail!</span>
            </h5>
            <button onClick={handlePopup}>
              <Image src={ArrowLeftImg} alt='Arrow Left' />
            </button>
          </div>
        </div>

        <div className={styles.productDetail}>
          <div className={styles.header}>
            <Image src={DetailImg} alt='Detail' />
            <h3>Details</h3>
          </div>
          <div className={styles.body}>
            <div className={styles.sub}>
              <h5>Model Name</h5>
              <p>
                Submariner White Gold Blue
                <br />
                Dial &apos;Smurf&apos; 116619LB
              </p>
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

            <hr />

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

        <div className={styles.productPurchase}>
          <div className={styles.header}>
            <h2>Purchase Value</h2>
            <Image src={BigGreyNoticeImg} alt='Notice' />
          </div>
          <div className={styles.body}>
            <div className={styles.inclination}>
              <h3>Product Inclination</h3>
              <h2>Stable</h2>
            </div>

            <hr />

            <div className={styles.rate}>
              <h3>Expected Rate Of Return (1 Year)</h3>
              <h2>
                <Image src={BigOrangeTriangleImg} alt='Big Orange Triangle' />
                20%
              </h2>
            </div>

            <hr />

            <div className={styles.period}>
              <h3>Expected monetization period</h3>
              <h2>12 months</h2>
            </div>
          </div>
        </div>

        <div className={styles.productCollections}>
          <h2>Related Collections</h2>
          <div aria-label='Product List' className={classes.productList} style={{ paddingTop: '1.5rem' }}>
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
          </div>
        </div>

        <Link className={`rounded-arrow-button ${styles.moreButton}`} href={'/collections'}>
          MORE
          <Image src={RightArrowImg} alt='Arrow' className={classes['right-arrow']} />
        </Link>
      </main>
      <Footer />
      {popup ? <Popup setOpen={setPopup} title='Coming Soon!' /> : null}
    </>
  );
};

export default Collection;
