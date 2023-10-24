'use client';

import React from 'react';
import Image from 'next/image';

import styles from './page.module.scss';
import classes from '@/app/components/TreasurerProducts/treasurerProducts.module.scss';

import Header from '@/app/components/Header/Header';
import Dropdown from '@/app/components/Dropdown/Dropdown';
import { PRODUCTS, PRODUCT_CATEGORIES, TRENDING_SEARCHES } from '@/app/constants';
import WhiteMagnifyingGlassImg from 'public/images/white-magnifying-glass.svg';
import ProductCard from '@/app/components/ProductCard/ProductCard';
import Pagination from '@/app/components/Pagination/Pagination';
import Footer from '@/app/components/Footer/Footer';

interface ProductListProps {}

const ProductList: React.FC<ProductListProps> = () => {
  const [selectedCategory, setSelectedCategory] = React.useState(0);

  const handleSelecteCategory = (index: number) => {
    setSelectedCategory(index);
  };

  const handleTrendingSearch = () => {
    return alert('Not implemented');
  };

  return (
    <>
      <Header />
      <aside className={styles.categorySearch}>
        <h1>Invest in your passions, one share at a time</h1>
        <summary>Treasureers provide easy and sensual collection</summary>
        <div className={styles.searchInput}>
          <Image src={WhiteMagnifyingGlassImg} alt='White Magnifying Glass' />
          <label htmlFor='text'>Search:</label>
          <input type='text' id='text' name='text' placeholder='Search' />
        </div>
        <nav>
          <ul>
            <h5>Trending searches</h5>
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
      <main className={styles.productListMain}>
        <nav>
          <ul>
            {PRODUCT_CATEGORIES.map((c, index) => {
              return (
                <li key={index}>
                  <button
                    className={`borderred-oulined-rounded-button ${styles.button} ${
                      index === selectedCategory ? 'selected' : ''
                    }`}
                    onClick={() => handleSelecteCategory(index)}
                  >
                    {c}
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>
        <Dropdown />
        <div
          aria-label='Product List'
          className={classes.productList}
          style={{ paddingTop: '1rem', paddingBottom: '4rem' }}
        >
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
        <div
          aria-label='Product List'
          className={classes.productList}
          style={{ paddingTop: '1rem', paddingBottom: '4rem' }}
        >
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
        <div
          aria-label='Product List'
          className={classes.productList}
          style={{ paddingTop: '1rem', paddingBottom: '4rem' }}
        >
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
        <div
          aria-label='Product List'
          className={classes.productList}
          style={{ paddingTop: '1rem', paddingBottom: '4rem' }}
        >
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
      </main>
      <Pagination />
      <Footer />
    </>
  );
};

export default ProductList;
