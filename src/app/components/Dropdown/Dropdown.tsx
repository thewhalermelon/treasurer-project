'use client';

import React from 'react';
import Image from 'next/image';

import styles from './dropdown.module.scss';

import { OPTIONS } from '@/app/constants';
import ArrowDownImg from 'public/images/arrow-down.svg';
import CheckedIconImg from 'public/images/checked-icon.svg';

interface DropdownProps {}

const Dropdown: React.FC<DropdownProps> = () => {
  const [selectedOption, setSelectedOption] = React.useState<string>(OPTIONS[0]);
  const [showDropdown, setShowDropdown] = React.useState<Boolean>(false);

  const myRef = React.useRef<any>(null);

  const handleSelect = (option: string) => {
    setSelectedOption(option);
    setShowDropdown(false);
  };

  const handleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  React.useEffect(() => {
    function handleClickOutside(event: MouseEvent | TouchEvent) {
      if (myRef.current && event.target instanceof Node && !myRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, []);

  return (
    <div className={styles.dropdown} ref={myRef}>
      <button className={styles['dropdown-toggle']} onClick={handleDropdown}>
        {selectedOption || 'Select an option'}
        <Image
          src={ArrowDownImg}
          alt='Arrow Down'
          style={{ transform: showDropdown ? 'rotate(180deg)' : 'rotate(0)' }}
        />
      </button>
      <ul className={styles['dropdown-menu']} style={{ display: showDropdown ? 'flex' : 'none' }}>
        {OPTIONS.map((option) => (
          <li
            key={option}
            onClick={() => handleSelect(option)}
            className={selectedOption === option ? styles.active : ''}
          >
            {option}
            {selectedOption === option ? <Image src={CheckedIconImg} alt='Check Icon' width={9} height={5.5} /> : null}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dropdown;
