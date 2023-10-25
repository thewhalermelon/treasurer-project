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
}

const Pagination: React.FC<PaginationProps> = ({ total }) => {
  const pathname = usePathname();
  const segments = pathname.split('/');
  const currentPage = segments[segments.length - 1];
  const pagesToShow = 5;

  let totalPages = Math.ceil(total / ITEMS_PER_PAGE);

  const isFirstBlock = parseInt(currentPage) <= pagesToShow;
  const isLastBlock = parseInt(currentPage) >= totalPages;

  let startPage: number;
  let endPage: number;

  if (isFirstBlock) {
    startPage = 1;
    endPage = pagesToShow;
  } else {
    const blockNumber = Math.ceil(parseInt(currentPage) / pagesToShow);
    startPage = (blockNumber - 1) * pagesToShow + 1;

    if (parseInt(currentPage) === totalPages) {
      endPage = parseInt(currentPage);
    } else {
      endPage = blockNumber * pagesToShow;
    }
  }

  const pages = Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i);

  return (
    <nav className={styles.pagination}>
      <ul>
        {!isFirstBlock ? (
          <Link href={`/collections/${startPage - pagesToShow}`}>
            <Image src={ChevronLeftImg} alt='Arrow Left' width={20} height={20} />
          </Link>
        ) : null}
        {pages.map((item) => {
          return (
            <li key={item}>
              <Link href={`/collections/${item}`} className={item === parseInt(currentPage) ? styles.selected : ''}>
                {item}
              </Link>
            </li>
          );
        })}
        {!isLastBlock ? (
          <Link href={`/collections/${endPage + 1}`}>
            <Image src={ChevronRightImg} alt='Arrow Right' width={20} height={20} />
          </Link>
        ) : null}
      </ul>
    </nav>
  );
};

export default Pagination;
