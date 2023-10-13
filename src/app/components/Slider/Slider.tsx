'use client';

import Image from 'next/image';

import { useKeenSlider } from 'keen-slider/react';
import { useInView } from 'react-intersection-observer';

import 'keen-slider/keen-slider.min.css';
import styles from './slider.module.scss';

import { SLIDER_ARRAY } from '@/app/constants';
import useWindowWidth from '@/app/hooks/useWindowWidth';

const animation = { duration: 5000, easing: (t: number) => t };

interface SliderProps {}

const Slider: React.FC<SliderProps> = () => {
  const windowWidth = useWindowWidth();
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
  const [ref, inView] = useInView({
    threshold: 1,
    triggerOnce: true,
  });

  if (windowWidth && windowWidth < 1920) {
    return (
      <div ref={ref} className={`${styles['floating-element-3rd-right']} ${inView ? styles.visible : ''}`}>
        <div
          ref={sliderRef}
          className='keen-slider'
          style={{
            position: 'absolute',
            bottom: 0,
            paddingBottom: 65,
          }}
        >
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
      </div>
    );
  } else return null;
};

export default Slider;
