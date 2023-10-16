'use client';

import React from 'react';
import Image from 'next/image';

import styles from './dropdown.module.scss';

import { OPTIONS } from '@/app/constants';
import ArrowDownImg from 'public/images/arrow-down.svg';

interface DropdownProps {}

const Dropdown: React.FC<DropdownProps> = () => {
  const [selectedOption, setSelectedOption] = React.useState<string>(OPTIONS[0]);

  const handleSelect = (option: string) => {
    setSelectedOption(option);
  };

  return (
    <div className={styles.dropdown}>
      <button className={styles['dropdown-toggle']}>
        {selectedOption || 'Select an option'}
        <Image src={ArrowDownImg} alt='Arrow Down' />
      </button>
      <ul className={styles['dropdown-menu']}>
        {OPTIONS.map((option) => (
          <li key={option} onClick={() => handleSelect(option)}>
            {option}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dropdown;
