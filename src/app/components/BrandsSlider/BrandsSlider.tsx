'use client';

import Image from 'next/image';

import { useKeenSlider } from 'keen-slider/react';

import 'keen-slider/keen-slider.min.css';
import styles from './brandsSlider.module.scss';

import { BRANDS } from '@/app/constants';

const animation = { duration: 5000, easing: (t: number) => t };

interface BrandsSliderProps {}

const BrandsSlider: React.FC<BrandsSliderProps> = () => {
  const [sliderRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    renderMode: 'performance',
    drag: false,
    slides: {
      perView: 'auto',
      spacing: 10,
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

  return (
    <div ref={sliderRef} className='keen-slider' style={{ paddingTop: '3.75rem', paddingBottom: '7.5rem' }}>
      {BRANDS.map((item, index) => {
        return (
          <div
            className={`keen-slider__slide number-slide${index} ${styles['keen-slider']}`}
            style={{ minWidth: 'fit-content', width: '100%' }}
            key={item.id}
          >
            <Image src={item.src} alt={item.alt} />
          </div>
        );
      })}
    </div>
  );
};

export default BrandsSlider;
