'use client';

import React from 'react';

import Image from 'next/image';

import styles from './page.module.scss';

import Header from '@/app/components/Header/Header';
import GoogleLogoImg from 'public/images/google-logo.svg';
import { redirect } from 'next/navigation';
import Link from 'next/link';

interface SignInProps {}

const SignIn: React.FC<SignInProps> = () => {
  const [error, setError] = React.useState<Boolean>(false);

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
            <input
              type='email'
              id='email'
              name='email'
              required
              placeholder='Email'
              className={`${styles.input} ${error ? styles.error : ''}`}
            />

            <label htmlFor='password'>Password:</label>
            <input
              type='password'
              id='password'
              name='password'
              required
              placeholder='Password'
              className={`${styles.input} ${error ? styles.error : ''}`}
            />

            <button type='button' className={`${styles['login-button']} ${styles.input}`} onClick={handleSubmit}>
              Login
            </button>
            <Link className={styles.forgotPassword} onClick={handleClick} href='/signin'>
              Forgot password?
            </Link>
            <span className={styles.signIn}>
              Don't have an account? <Link href='/signup'>Sign in</Link>
            </span>
          </form>
        </main>
      </section>
    </>
  );
};

export default SignIn;
