'use client';

import React from 'react';
import Image, { StaticImageData } from 'next/image';

import styles from '@/app/homepage/page.module.scss';

import FilledSaveImg from 'public/images/filled-save.png';
import OutlinedSaveImg from 'public/images/outlined-save.png';
import OrangeTriangleImg from 'public/images/orange-triangle.png';

interface ProductCardProps {
  src: StaticImageData;
  alt: string;
  name: string;
  desc: string;
  marketPrice: string;
  piecePrice: string;
  save: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ src, alt, name, desc, marketPrice, piecePrice, save }) => {
  const [isSelected, setIsSelected] = React.useState<Boolean>(false);

  const handleFavorite = () => {
    setIsSelected(!isSelected);
  };

  return (
    <article>
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
        <Image src={OrangeTriangleImg} alt='Triangle' />
        <h6>{save}</h6>
      </div>
    </article>
  );
};

export default ProductCard;
