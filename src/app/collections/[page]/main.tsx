'use client';

import React from 'react';
import { redirect, useSearchParams } from 'next/navigation';

import styles from '../page.module.scss';
import classes from '@/app/components/TreasurerProducts/treasurerProducts.module.scss';

import Dropdown from '@/app/components/Dropdown/Dropdown';
import ProductCard from '@/app/components/ProductCard/ProductCard';
import Pagination from '@/app/components/Pagination/Pagination';

import { ApiResponse, Item } from '@/app/libs/getListPage';
import { PRODUCT_CATEGORIES } from '@/app/constants';
import Link from 'next/link';
import useWindowWidth from '@/app/hooks/useWindowWidth';

interface IProps {
  data: ApiResponse;
  start: number;
  end: number;
  currentPage: string;
}

const Main: React.FC<IProps> = ({ data, start, end, currentPage }) => {
  const windowWidth = useWindowWidth();
  const searchParams = useSearchParams();
  const category = searchParams.get('category');

  if (!category) {
    redirect(`/collections/${currentPage}?category=all`);
  }

  const items =
    windowWidth && windowWidth >= 376
      ? data.data.filter((item) => (category === 'all' ? item : item.category === category)).slice(start, end)
      : data.data.filter((item) => (category === 'all' ? item : item.category === category));

  return (
    <>
      <main className={styles.productListMain}>
        <nav>
          <ul>
            {PRODUCT_CATEGORIES.map((c, index) => {
              return (
                <li key={index}>
                  <Link
                    href={`/collections/1?category=${c.value}`}
                    className={`borderred-oulined-rounded-button ${styles.button} ${
                      c.value === category ? 'selected' : ''
                    }`}
                  >
                    {c.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
        <Dropdown />
        <div
          aria-label='Product List'
          className={classes.productList}
          style={{
            paddingTop: windowWidth && windowWidth < 376 ? '18px' : '1rem',
            paddingBottom: '3.75rem',
            flexWrap: 'wrap',
            gap: windowWidth && windowWidth < 376 ? '3rem' : '1.25rem',
          }}
        >
          {items &&
            items.map((p: Item, i: number) => {
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
                  index={i % 3}
                  currentPrice={p.currentSingleUnitPriceUSD}
                  lastestPrice={p.lastTradePriceUSD}
                />
              );
            })}
        </div>
      </main>
      {windowWidth && windowWidth >= 376 ? (
        <Pagination
          total={data.data.filter((item) => (category === 'all' ? item : item.category === category)).length}
          category={category}
        />
      ) : null}
    </>
  );
};

export default Main;
