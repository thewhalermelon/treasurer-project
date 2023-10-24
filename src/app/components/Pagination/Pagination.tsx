'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import styles from './pagination.module.scss';
import { ITEMS_PER_PAGE } from '@/app/collections/page';

interface PaginationProps {
  total: number;
}

const PAGINATION_LENGTH = 5;

const Pagination: React.FC<PaginationProps> = ({ total }) => {
  const pathname = usePathname();
  const segments = pathname.split('/');
  const number = segments[segments.length - 1];

  let totalPages = Math.floor(total / ITEMS_PER_PAGE);

  if (total % ITEMS_PER_PAGE !== 0) {
    totalPages += 1;
  }

  return (
    <nav className={styles.pagination}>
      <ul>
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((item, index) => {
          return (
            <li key={index}>
              <Link
                href={`/collections/${index + 1}`}
                className={index + 1 === parseInt(number) ? styles.selected : ''}
              >
                {item}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Pagination;
