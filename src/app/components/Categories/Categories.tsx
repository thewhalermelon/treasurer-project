'use client';

import React from 'react';

import styles from '@/app/components/TreasurerProducts/treasurerProducts.module.scss';

import { CATEGORIES } from '@/app/constants';

interface CategoriesProps {}

const Categories: React.FC<CategoriesProps> = () => {
  const [selectedCategory, setSelectedCategory] = React.useState(0);

  const handleSelecteCategory = (index: number) => {
    setSelectedCategory(index);
  };

  return (
    <nav className={styles.categories}>
      <ul>
        {CATEGORIES.map((c, index) => {
          return (
            <li key={index}>
              <button
                className={`borderred-oulined-rounded-button ${index === selectedCategory ? 'selected' : ''}`}
                onClick={() => handleSelecteCategory(index)}
              >
                {c}
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Categories;
