'use client';

import React from 'react';

import Image from 'next/image';

import styles from './page.module.scss';

import Header from '@/app/components/Header/Header';
import GoogleLogoImg from 'public/images/google-logo.svg';
import ShowPasswordIcon from 'public/images/show-password-icon.svg';
import HidePasswordIcon from 'public/images/hide-password-icon.svg';
import { redirect } from 'next/navigation';
import Link from 'next/link';
import InputField from '../components/InputField/InputField';

interface SignInProps {}

const SignIn: React.FC<SignInProps> = () => {
  const [error, setError] = React.useState<Boolean>(false);
  const [showPassword, setShowPassword] = React.useState<Boolean>(false);

  const handleClick = () => {
    return alert('Not implemented');
  };

  const handleSubmit = () => {
    return setError(true);
  };

  return (
    <>
      <Header />
      <section className={styles.signin}>
        <main>
          <form>
            <h2>SIGN IN</h2>
            <h1>Welcome to Treasurer</h1>
            <button className={styles['google-button']} onClick={handleClick} type='button'>
              <Image src={GoogleLogoImg} alt='Google' />
              <span>Continue with Google</span>
            </button>
            <div className={styles.divider}>
              <hr></hr>
              <span>or</span>
            </div>

            {error ? (
              <div className={styles.loginFailed}>
                <p>
                  Login failed. <span>Please recheck the username and password and try again.</span>
                </p>
              </div>
            ) : null}

            <label htmlFor='email'>Username:</label>
            <InputField
              type='email'
              id='email'
              name='email'
              required
              placeholder='Email'
              className={`${styles.input} ${error ? styles.error : ''}`}
            />

            <label htmlFor='password'>Password:</label>
            <InputField
              id='password'
              name='password'
              required
              placeholder='Password'
              className={`${styles.input} ${styles['input-password']} ${error ? styles.error : ''}`}
              isPasswordDisplay
              suffixClassname={styles['suffix-icon']}
            />

            <button type='button' className={`${styles['login-button']} ${styles.input}`} onClick={handleSubmit}>
              Login
            </button>
            <Link className={styles.forgotPassword} onClick={handleClick} href='/signin'>
              Forgot password?
            </Link>
            <span className={styles.signIn}>
              Don&apos;t have an account? <Link href='/signup'>Sign up</Link>
            </span>
          </form>
        </main>
      </section>
    </>
  );
};

export default SignIn;
