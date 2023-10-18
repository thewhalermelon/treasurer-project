'use client';

import React from 'react';

import styles from './pagination.module.scss';

interface PaginationProps {}

const PAGINATION_LENGTH = 5;

const Pagination: React.FC<PaginationProps> = () => {
  const [selectedPage, setSelectedPage] = React.useState(0);

  const pages = Array.from({ length: PAGINATION_LENGTH }, (_, i) => i + 1);

  const handlePagination = (index: number) => {
    setSelectedPage(index);
  };

  return (
    <nav className={styles.pagination}>
      <ul>
        {pages.map((item, index) => {
          return (
            <li key={index}>
              <button onClick={() => handlePagination(index)} className={selectedPage === index ? styles.selected : ''}>
                {item}
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Pagination;
