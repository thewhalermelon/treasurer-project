import Image from 'next/image';

import { useInView } from 'react-intersection-observer';

import styles from '@/app/homepage/page.module.scss';

interface ImageProps {
  src: any;
  alt: string;
  className: string;
}

const TreasurerImage: React.FC<ImageProps> = ({ src, alt, className }) => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return <Image src={src} alt={alt} className={`${className} ${inView ? 'visible' : ''}`} ref={ref} />;
};

export default TreasurerImage;
