'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

import styles from './pagination.module.scss';
import { ITEMS_PER_PAGE } from '@/app/constants';

import ChevronRightImg from '../../../../public/images/chevron-right.svg';
import ChevronLeftImg from '../../../../public/images/chevron-left.svg';

interface PaginationProps {
  total: number;
  category: string;
}

const Pagination: React.FC<PaginationProps> = ({ total, category }) => {
  const pathname = usePathname();
  const segments = pathname.split('/');
  const currentPage = segments[segments.length - 1];
  const pagesToShow = 10;
  const blockNumber = Math.ceil(parseInt(currentPage) / pagesToShow);

  let totalPages = Math.ceil(total / ITEMS_PER_PAGE);

  const isFirstBlock = parseInt(currentPage) <= pagesToShow;
  const isLastBlock =
    totalPages <= pagesToShow
      ? true
      : totalPages > blockNumber * pagesToShow
      ? parseInt(currentPage) >= totalPages
      : true;

  let startPage: number;
  let endPage: number;

  if (isFirstBlock) {
    startPage = 1;
    endPage = totalPages < pagesToShow ? totalPages : pagesToShow;
  } else {
    startPage = (blockNumber - 1) * pagesToShow + 1;

    if (parseInt(currentPage) === totalPages) {
      endPage = parseInt(currentPage);
    } else {
      endPage = totalPages <= blockNumber * pagesToShow ? totalPages : blockNumber * pagesToShow;
    }
  }

  const pages = Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i);

  return (
    <nav className={styles.pagination}>
      <ul>
        {!isFirstBlock ? (
          <Link href={`/collections/${startPage - 1}?category=${category}`}>
            <Image src={ChevronLeftImg} alt='Arrow Left' width={20} height={20} />
          </Link>
        ) : null}
        {pages.map((item) => {
          return (
            <li key={item}>
              <Link
                href={`/collections/${item}?category=${category}`}
                className={item === parseInt(currentPage) ? styles.selected : ''}
              >
                {item}
              </Link>
            </li>
          );
        })}
        {!isLastBlock ? (
          <Link href={`/collections/${endPage + 1}?category=${category}`}>
            <Image src={ChevronRightImg} alt='Arrow Right' width={20} height={20} />
          </Link>
        ) : null}
      </ul>
    </nav>
  );
};

export default Pagination;
