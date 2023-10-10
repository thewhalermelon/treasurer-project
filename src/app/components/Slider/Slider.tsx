'use client';

import Image from 'next/image';

import { useKeenSlider } from 'keen-slider/react';

import 'keen-slider/keen-slider.min.css';
import styles from './slider.module.scss';

import SmallRolexImg from 'public/images/rolex-small.png';
import SmallHandBagImg from 'public/images/hand-bag-small.png';
import HandBag2Img from 'public/images/hand-bag-2.png';
import HandBag3Img from 'public/images/hand-bag-3.png';
import SmallWineImg from 'public/images/wine-small.png';
import SneakerImg from 'public/images/sneaker.png';

const animation = { duration: 5000, easing: (t: number) => t };

const SLIDER_ARRAY = [
  {
    src: SmallHandBagImg,
    alt: 'Hand Bag',
  },
  {
    src: SmallWineImg,
    alt: 'Wine',
  },
  {
    src: SneakerImg,
    alt: 'Sneaker',
  },
  {
    src: HandBag3Img,
    alt: 'Hand Bag 3',
  },
  {
    src: SmallRolexImg,
    alt: 'Watch',
  },
  {
    src: HandBag2Img,
    alt: 'Hand Bag 2',
  },
  {
    src: HandBag3Img,
    alt: 'Hand Bag 3',
  },
  {
    src: SmallRolexImg,
    alt: 'Watch',
  },
];

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
    <div
      ref={sliderRef}
      className='keen-slider'
      style={{ width: 'fit-content', paddingTop: '10rem', paddingBottom: '4.0625rem' }}
    >
      {SLIDER_ARRAY.map((item, index) => {
        return (
          <div className={`keen-slider__slide number-slide${index} ${styles['keen-slider']}`}>
            <Image src={item.src} alt={item.alt} />
          </div>
        );
      })}
    </div>
  );
};

export default Slider;
