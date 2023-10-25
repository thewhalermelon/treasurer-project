import React from 'react';
import Image from 'next/image';
import { Metadata } from 'next';

import styles from '../page.module.scss';

import Header from '@/app/components/Header/Header';
import { ITEMS_PER_PAGE, TRENDING_SEARCHES } from '@/app/constants';
import WhiteMagnifyingGlassImg from 'public/images/white-magnifying-glass.svg';
import Footer from '@/app/components/Footer/Footer';
import Button from '@/app/components/Button/Button';

import getListPage from '../../libs/getListPage';
import Main from './main';

interface IProps {
  params: { page: string };
}

export const metadata: Metadata = {
  title: 'Treasurer Collections',
};

const ProductList: React.FC<IProps> = async ({ params }) => {
  const start = (parseInt(params.page) - 1) * ITEMS_PER_PAGE;
  const end = start + ITEMS_PER_PAGE;
  const data = await getListPage();

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
      <Main data={data} start={start} end={end} currentPage={params.page} />
      <Footer />
    </>
  );
};

export default ProductList;
