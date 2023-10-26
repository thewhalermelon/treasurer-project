'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useInView } from 'react-intersection-observer';

import styles from '@/app/components/TreasurerProducts/treasurerProducts.module.scss';

import useWindowWidth from '@/app/hooks/useWindowWidth';
import { currentSingleUnitPriceUSD, formatAppraisalPriceUSD, formatPriceChange } from '@/app/utils/generalUtils';

import FilledSaveImg from 'public/images/filled-save.svg';
import OutlinedSaveImg from 'public/images/outlined-save.svg';
import OrangeTriangleImg from 'public/images/orange-triangle.svg';

interface ProductCardProps {
  id: number;
  src: string;
  alt: string;
  name: string;
  desc: string;
  marketPrice: string;
  piecePrice: string;
  index: number;
  currentPrice: string;
  lastestPrice: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  src,
  alt,
  name,
  desc,
  marketPrice,
  piecePrice,
  currentPrice,
  lastestPrice,
  index,
}) => {
  const windowWidth = useWindowWidth();
  const [isSelected, setIsSelected] = React.useState<Boolean>(false);
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const handleFavorite = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsSelected(!isSelected);
  };

  return (
    <article
      ref={ref}
      className={`${windowWidth && windowWidth >= 1440 ? `appear-element-desktop-${index + 1}` : 'appear-element'} ${
        inView ? 'visible' : ''
      }`}
    >
      <Link href={`/collection/${id}`}>
        <div className={styles.rectangle}>
          <Image src={src} alt={alt} width={290} height={290} />
          <button onClick={(e) => handleFavorite(e)}>
            <Image
              src={isSelected ? FilledSaveImg : OutlinedSaveImg}
              alt='Outlined Save'
              className={styles.favorite}
              style={{ cursor: 'pointer' }}
            />
          </button>
        </div>
      </Link>

      <h6 className='title-14-medium-grey'>{name}</h6>
      <Link href={`/collection/${id}`}>
        <summary className='title-20-black'>{desc}</summary>
      </Link>
      <div className={styles.prices}>
        <div className={styles.priceTitle}>
          <h6>market price</h6>
          <h6>piece price</h6>
        </div>
        <div className={styles.priceNumber}>
          <h5>{formatAppraisalPriceUSD(marketPrice)}</h5>
          <h5>{currentSingleUnitPriceUSD(piecePrice)}</h5>
        </div>
      </div>
      <div className={styles.save}>
        <Image
          src={OrangeTriangleImg}
          alt='Triangle'
          height={8}
          width={10}
          className={currentPrice >= lastestPrice ? styles.up : styles.down}
        />
        <h6>{formatPriceChange(currentPrice, lastestPrice)}</h6>
      </div>
    </article>
  );
};

export default ProductCard;
