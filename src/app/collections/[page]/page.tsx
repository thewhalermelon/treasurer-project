'use client';

import React from 'react';
import Image from 'next/image';

import styles from '../page.module.scss';
import classes from '@/app/components/TreasurerProducts/treasurerProducts.module.scss';

import Header from '@/app/components/Header/Header';
import Dropdown from '@/app/components/Dropdown/Dropdown';
import { PRODUCT_CATEGORIES, TRENDING_SEARCHES } from '@/app/constants';
import WhiteMagnifyingGlassImg from 'public/images/white-magnifying-glass.svg';
import ProductCard from '@/app/components/ProductCard/ProductCard';
import Pagination from '@/app/components/Pagination/Pagination';
import Footer from '@/app/components/Footer/Footer';
import Button from '@/app/components/Button/Button';

import getListPage, { Item } from '../../libs/getListPage';
import { ITEMS_PER_PAGE } from '../page';

interface IProps {
  params: { page: string };
}

const ProductList: React.FC<IProps> = async ({ params }) => {
  const start = (parseInt(params.page) - 1) * ITEMS_PER_PAGE;
  const end = start + ITEMS_PER_PAGE;
  const data = await getListPage();
  const items = data.data.slice(start, end);

  console.log('items: ', items);

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
          <h5>Trending searches</h5>
          <ul>
            {TRENDING_SEARCHES.map((c) => {
              return (
                <li key={c.id}>
                  <Button content={c.content} />
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
                  <Button className={`borderred-oulined-rounded-button ${styles.button}`} content={c} />
                </li>
              );
            })}
          </ul>
        </nav>
        <Dropdown />
        <div
          aria-label='Product List'
          className={classes.productList}
          style={{ paddingTop: '1rem', paddingBottom: '3.75rem', flexWrap: 'wrap' }}
        >
          {items.map((p: Item, i) => {
            return (
              <ProductCard
                key={p.id}
                src={p.thumbnail}
                alt='Product Image'
                name={p.brand}
                desc={p.model}
                marketPrice={p.appraisalPriceUSD}
                piecePrice={p.currentSingleUnitPriceUSD}
                index={i % 3}
                currentPrice={p.currentSingleUnitPriceUSD}
                lastestPrice={p.lastTradePriceUSD}
              />
            );
          })}
        </div>
      </main>
      <Pagination total={data.data.length} />
      <Footer />
    </>
  );
};

export default ProductList;
