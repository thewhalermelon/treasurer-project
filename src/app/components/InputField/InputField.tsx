import React, { forwardRef, useCallback, useState } from 'react';
import Image from 'next/image';
import styles from './inputField.module.scss';

import ShowPasswordIcon from 'public/images/show-password-icon.svg';
import HidePasswordIcon from 'public/images/hide-password-icon.svg';

interface IProps {
  isPasswordDisplay?: boolean;
  suffixClassname?: string;
};

const InputField = forwardRef<HTMLInputElement | null, IProps & React.InputHTMLAttributes<HTMLInputElement>>(
  ({
    className,
    isPasswordDisplay = false,
    suffixClassname,
    ...props
  }, ref) => {
    const [showPassword, setShowPassword] = useState<boolean>(false);

    const toggleShowPassword = useCallback(() => {
      setShowPassword((prev) => !prev);
    }, []);

    return (
      <div className={styles['input-field-container']}>
        <input
          type={showPassword ? 'text' : 'password'}
          ref={ref}
          className={`${styles['input-field']} ${isPasswordDisplay ? styles['input-field-password'] : ''} ${className}`}
          {...props}
        />
        {isPasswordDisplay && (
          <Image
            src={showPassword ? HidePasswordIcon : ShowPasswordIcon}
            alt='password-icon'
            className={`${styles['suffix-icon']} ${suffixClassname || ''}`}
            onClick={toggleShowPassword}
          />
        )}
      </div>
    );
  }
);

InputField.displayName = "InputField";

export default InputField;
