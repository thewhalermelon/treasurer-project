'use client';

import React from 'react';
import Image from 'next/image';

import styles from '../page.module.scss';

import OrangeTriangleImg from 'public/images/orange-triangle.svg';
import GreyNoticeImg from 'public/images/grey-notice.svg';
import PlusIconImg from 'public/images/plus-icon.svg';
import BookMarkImg from 'public/images/bookmark.svg';
import ArrowRightImg from 'public/images/arrow-right.svg';

import Popup from '@/app/components/Popup/Popup';

import { ProductData } from '@/app/libs/getDetailPage';
import { currentSingleUnitPriceUSD, formatAppraisalPriceUSD, formatPriceChange } from '@/app/utils/generalUtils';

interface IProps {
  product: ProductData;
}

const Purchase: React.FC<IProps> = ({ product }) => {
  const [amount, setAmount] = React.useState<number>(1);
  const [popup, setPopup] = React.useState<Boolean>(false);

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
      <div className={styles.productPrices}>
        <h3>{product.data.brand}</h3>
        <h1>{product.data.model}</h1>

        <div className={styles.prices}>
          <div className={styles.priceTitle}>
            <h6>Market Price</h6>
            <h6>Piece Price</h6>
          </div>
          <div className={styles.priceNumber}>
            <h5>{formatAppraisalPriceUSD(product.data.appraisalPriceUSD)}</h5>
            <h5>{currentSingleUnitPriceUSD(product.data.currentSingleUnitPriceUSD)}</h5>
          </div>

          <div className={styles.save}>
            <Image
              src={OrangeTriangleImg}
              alt='Triangle'
              width={10}
              height={8}
              className={
                product.data.currentSingleUnitPriceUSD >= product.data.lastTradePriceUSD ? styles.up : styles.down
              }
            />
            <h6>{formatPriceChange(product.data.currentSingleUnitPriceUSD, product.data.lastTradePriceUSD)}</h6>
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

          <button className={`${styles.buyButton} ${styles.disabled}`}>
            We are preparing to open the service in your country.
          </button>
        </div>

        <div className={styles.notice}>
          <Image src={BookMarkImg} alt='Bookmark' />
          <h5>
            If this is your first visit, <span>we will tell you in detail!</span>
          </h5>
          <button onClick={handlePopup}>
            <Image src={ArrowRightImg} alt='Arrow Left' />
          </button>
        </div>
      </div>
      {popup ? <Popup setOpen={setPopup} title='Coming Soon!' /> : null}
    </>
  );
};

export default Purchase;
