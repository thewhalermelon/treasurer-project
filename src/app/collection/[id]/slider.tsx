'use client';

import React from 'react';
import Image from 'next/image';
import { useKeenSlider } from 'keen-slider/react';
import { useRouter } from 'next/navigation';

import styles from '../page.module.scss';

import FilledSaveImg from 'public/images/filled-save.svg';
import OutlinedSaveImg from 'public/images/outlined-save.svg';
import ArrowLeftImg from 'public/images/arrow-left.svg';

import { ProductData } from '@/app/libs/getDetailPage';
import useWindowWidth from '@/app/hooks/useWindowWidth';

interface IProps {
  product: ProductData;
}

const Slider: React.FC<IProps> = ({ product }) => {
  const windowWidth = useWindowWidth();
  const router = useRouter();

  const [isSelected, setIsSelected] = React.useState<number>(0);
  const [currentSlide, setCurrentSlide] = React.useState(0);

  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>(
    {
      initial: 0,
      loop: true,
      slideChanged(slider) {
        setCurrentSlide(slider.track.details.rel);
      },
      defaultAnimation: {
        duration: 2000,
      },
    },
    [
      (slider) => {
        let timeout: ReturnType<typeof setTimeout>;
        let mouseOver = false;
        function clearNextTimeout() {
          clearTimeout(timeout);
        }
        function nextTimeout() {
          clearTimeout(timeout);
          if (mouseOver) return;
          timeout = setTimeout(() => {
            slider.next();
          }, 1000);
        }
        slider.on('created', () => {
          slider.container.addEventListener('mouseover', () => {
            mouseOver = true;
            clearNextTimeout();
          });
          slider.container.addEventListener('mouseout', () => {
            mouseOver = false;
            nextTimeout();
          });
          nextTimeout();
        });
        slider.on('dragStarted', clearNextTimeout);
        slider.on('animationEnded', nextTimeout);
        slider.on('updated', nextTimeout);
      },
    ],
  );

  const handleFavorite = (i: number) => {
    setIsSelected(i === isSelected ? 0 : i);
  };

  const images = Object.keys(product.data)
    .filter((key) => key.startsWith('image'))
    .filter((key) => (product.data as any)[key])
    .map((key) => (product.data as any)[key]);

  return (
    <div className={styles['navigation-wrapper']}>
      {images.length === 1 ? (
        <div className={styles['keen-slider']}>
          {windowWidth && windowWidth < 1440 ? (
            <button onClick={() => router.back()} className={styles.back}>
              <Image src={ArrowLeftImg} alt='Back' />
            </button>
          ) : null}
          {images.map((i, ind) => {
            return (
              <div key={ind} className={`keen-slider__slide number-slide${i} ${styles.slider}`}>
                <Image
                  src={i}
                  alt='Product Image'
                  width={windowWidth && windowWidth < 1440 ? 350 : 536}
                  height={windowWidth && windowWidth < 1440 ? 350 : 536}
                />
                <button onClick={() => handleFavorite(ind)} className={styles.favorite}>
                  <Image src={isSelected === ind ? FilledSaveImg : OutlinedSaveImg} alt='Save' />
                </button>
              </div>
            );
          })}
        </div>
      ) : (
        <div ref={sliderRef} className={styles['keen-slider']}>
          {windowWidth && windowWidth < 1440 ? (
            <button onClick={() => router.back()} className={styles.back}>
              <Image src={ArrowLeftImg} alt='Back' />
            </button>
          ) : null}
          {images.map((i, ind) => {
            return (
              <div key={ind} className={`keen-slider__slide number-slide${i} ${styles.slider}`}>
                <Image
                  src={i}
                  alt='Product Image'
                  width={windowWidth && windowWidth < 1440 ? 350 : 536}
                  height={windowWidth && windowWidth < 1440 ? 350 : 536}
                />
                <button onClick={() => handleFavorite(ind)} className={styles.favorite}>
                  <Image src={isSelected === ind ? FilledSaveImg : OutlinedSaveImg} alt='Save' />
                </button>
              </div>
            );
          })}
        </div>
      )}
      <div className={`dots ${styles.dots}`}>
        {images.map((i, ind) => {
          return (
            <button
              key={ind}
              onClick={() => {
                instanceRef.current?.moveToIdx(ind);
              }}
              className={`dot ${styles.dot}` + (currentSlide === ind ? ` active ${styles.active}` : '')}
            ></button>
          );
        })}
      </div>
    </div>
  );
};

export default Slider;
