'use client';

import Image from 'next/image';

import styles from '../page.module.scss';

import WhiteMagnifyingGlassImg from 'public/images/white-magnifying-glass.svg';

import { TRENDING_SEARCHES } from '@/app/constants';
import useWindowWidth from '@/app/hooks/useWindowWidth';

interface IProps {}

const Aside: React.FC<IProps> = () => {
  const windowWidth = useWindowWidth();

  return (
    <>
      {windowWidth && windowWidth < 1440 ? null : (
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
      )}
    </>
  );
};

export default Aside;
