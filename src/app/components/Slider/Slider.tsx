'use client';

import Image from 'next/image';

import { useKeenSlider } from 'keen-slider/react';

import 'keen-slider/keen-slider.min.css';
import styles from './slider.module.scss';

import { SLIDER_ARRAY } from '@/app/constants';

const animation = { duration: 5000, easing: (t: number) => t };

interface SliderProps {}

const Slider: React.FC<SliderProps> = () => {
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
    <div ref={sliderRef} className='keen-slider' style={{ paddingTop: '10rem', paddingBottom: '4.0625rem' }}>
      {SLIDER_ARRAY.map((item, index) => {
        return (
          <div
            className={`keen-slider__slide number-slide${index} ${styles['keen-slider']}`}
            style={{ minWidth: 80 }}
            key={item.id}
          >
            <Image src={item.src} alt={item.alt} />
          </div>
        );
      })}
    </div>
  );
};

export default Slider;
