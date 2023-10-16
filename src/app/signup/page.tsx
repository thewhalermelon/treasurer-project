'use client';

import React from 'react';

import Image from 'next/image';

import styles from './page.module.scss';

import Header from '@/app/components/Header/Header';
import GoogleLogoImg from 'public/images/google-logo.svg';
import Link from 'next/link';

interface SignUpProps {}

const SignUp: React.FC<SignUpProps> = () => {
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
      <section className={styles.signup}>
        <main>
          <form>
            <h2>SIGN UP</h2>
            <h1>Welcome to Treasurer</h1>
            <button className={styles['google-button']} onClick={handleClick} type='button'>
              <Image src={GoogleLogoImg} alt='Google' />
              <span>Continue with Google</span>
            </button>
            <div className={styles.divider}>
              <hr></hr>
              <span>or</span>
            </div>

            <div className={styles.signupForm}>
              <div className={styles.firstSection}>
                <label htmlFor='firstName'>First Name:</label>
                <input
                  type='text'
                  id='firstName'
                  name='firstName'
                  required
                  placeholder='First Name'
                  className={styles.input}
                />

                <label htmlFor='lastName'>Last Name:</label>
                <input
                  type='text'
                  id='lastName'
                  name='lastName'
                  required
                  placeholder='Last Name'
                  className={styles.input}
                />
              </div>

              <label htmlFor='email'>Email:</label>
              <input type='email' id='email' name='email' required placeholder='Email' className={styles.input} />

              <div>
                <label htmlFor='password'>Password:</label>
                <input
                  type='password'
                  id='password'
                  name='password'
                  required
                  placeholder='Password'
                  className={`${styles.input} ${error ? styles.error : ''}`}
                />
                {error ? (
                  <span className={styles.passwordError}>Passwords must be at least 8 characters long.</span>
                ) : null}
              </div>
            </div>

            <button
              type='button'
              className={`${styles['signup-button']} ${styles.input} ${error ? styles.error : ''}`}
              onClick={handleSubmit}
            >
              Sign up
            </button>

            <Link className={styles.forgotPassword} onClick={handleClick} href='/signup'>
              Forgot password?
            </Link>

            <span className={styles.signUp}>
              Do you have an account? <Link href='/signin'>Login</Link>
            </span>
          </form>
          <aside>
            <p>
              By continuing, you acknowledge that you have read and understood, and agree to Treasurer's{' '}
              <Link href='/signup'>Terms of Service</Link> and <Link href='signup'>Privacy Policy</Link>.
            </p>
          </aside>
        </main>
      </section>
    </>
  );
};

export default SignUp;
