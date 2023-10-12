'use client';

import Image from 'next/image';

import { useKeenSlider } from 'keen-slider/react';

import 'keen-slider/keen-slider.min.css';
import styles from './slider.module.scss';

import LinearLeftRectangleImg from 'public/images/linear-left-rectangle.svg';
import LinearRightRectangleImg from 'public/images/linear-right-rectangle.svg';

import { SLIDER_ARRAY } from '@/app/constants';
import useWindowWidth from '@/app/hooks/useWindowWidth';

const animation = { duration: 5000, easing: (t: number) => t };

interface DesktopSliderProps {}

const DesktopSlider: React.FC<DesktopSliderProps> = () => {
  const windowWidth = useWindowWidth();
  const [sliderRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    renderMode: 'performance',
    drag: false,
    slides: {
      perView: 'auto',
      spacing: 25,
    },
    created(s) {
      s.moveToIdx(5, true, animation);
    },
    updated(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation);
    },
    animationEnded(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation);
    },
  });

  if (windowWidth && windowWidth >= 1920) {
    return (
      <div
        ref={sliderRef}
        className='keen-slider'
        style={{ paddingTop: '14.5rem', paddingBottom: '4.0625rem', maxWidth: 1200, margin: 'auto' }}
      >
        <Image src={LinearLeftRectangleImg} alt='Linear Rectangle' className={styles.linearRectangle} />
        {SLIDER_ARRAY.map((item, index) => {
          return (
            <div
              className={`keen-slider__slide number-slide${index} ${styles['keen-slider']}`}
              style={{ width: 140, height: 140 }}
              key={item.id}
            >
              <Image src={item.src} alt={item.alt} />
            </div>
          );
        })}
        <Image src={LinearRightRectangleImg} alt='Linear Rectangle' className={styles.linearRectangle} />
      </div>
    );
  } else return null;
};

export default DesktopSlider;
