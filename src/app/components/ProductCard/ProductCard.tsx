'use client';

import React from 'react';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import { useInView } from 'react-intersection-observer';

import styles from '@/app/components/TreasurerProducts/treasurerProducts.module.scss';

import FilledSaveImg from 'public/images/filled-save.svg';
import OutlinedSaveImg from 'public/images/outlined-save.svg';
import OrangeTriangleImg from 'public/images/orange-triangle.svg';
import useWindowWidth from '@/app/hooks/useWindowWidth';

interface ProductCardProps {
  src: StaticImageData;
  alt: string;
  name: string;
  desc: string;
  marketPrice: string;
  piecePrice: string;
  save: string;
  index: number;
}

const ProductCard: React.FC<ProductCardProps> = ({ src, alt, name, desc, marketPrice, piecePrice, save, index }) => {
  const windowWidth = useWindowWidth();
  const [isSelected, setIsSelected] = React.useState<Boolean>(false);
  const [ref, inView] = useInView({
    threshold: 1,
    triggerOnce: true,
  });

  const handleFavorite = () => {
    setIsSelected(!isSelected);
  };

  return (
    <Link href={`/collection`}>
      <article
        ref={ref}
        className={`${windowWidth && windowWidth >= 1440 ? `appear-element-desktop-${index + 1}` : 'appear-element'} ${
          inView ? 'visible' : ''
        }`}
      >
        <div className={styles.rectangle}>
          <Image src={src} alt={alt} />
          <button onClick={handleFavorite}>
            <Image src={isSelected ? FilledSaveImg : OutlinedSaveImg} alt='Outlined Save' className={styles.favorite} />
          </button>
        </div>
        <h6 className='title-14-medium-grey'>{name}</h6>
        <summary className='title-20-black'>{desc}</summary>
        <div className={styles.prices}>
          <div className={styles.priceTitle}>
            <h6>market price</h6>
            <h6>piece price</h6>
          </div>
          <div className={styles.priceNumber}>
            <h5>{marketPrice}</h5>
            <h5>{piecePrice}</h5>
          </div>
        </div>
        <div className={styles.save}>
          <Image src={OrangeTriangleImg} alt='Triangle' height={8} width={10} />
          <h6>{save}</h6>
        </div>
      </article>
    </Link>
  );
};

export default ProductCard;
