import Link from 'next/link';
import Image from 'next/image';

import styles from './treasurerProducts.module.scss';

import RightArrowImg from 'public/images/right-arrow.svg';

import { PRODUCTS } from '@/app/constants';
import Categories from '@/app/components/Categories/Categories';
import ProductCard from '@/app/components/ProductCard/ProductCard';

interface TreasurerProductsProps {}

const TreasurerProducts: React.FC<TreasurerProductsProps> = () => {
  return (
    <section className={styles.sixthSection}>
      <div>
        <div>
          <h2 className='title-34-black-center'>Investment Products</h2>
        </div>
        <Categories />
      </div>
      <main aria-label='Product List' className={styles.productList}>
        {PRODUCTS.map((p, i) => {
          return (
            <ProductCard
              id={p.id}
              key={p.id}
              src={p.imageSrc}
              alt={p.imageAtl}
              name={p.name}
              desc={p.desc}
              marketPrice={p.marketPrice}
              piecePrice={p.piecePrice}
              currentPrice={p.currentSingleUnitPriceUSD}
              lastestPrice={p.lastTradePriceUSD}
              index={i}
            />
          );
        })}
      </main>
      <Link className='rounded-arrow-button' href={'/collections'}>
        ALL Products
        <Image src={RightArrowImg} alt='Arrow' className={styles['right-arrow']} />
      </Link>
    </section>
  );
};

export default TreasurerProducts;
