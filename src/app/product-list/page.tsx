import Header from '@/app/components/Header/Header';

interface ProductListProps {}

const ProductList: React.FC<ProductListProps> = () => {
  return (
    <>
      <Header />
      <h1 style={{ paddingTop: 100 }}>Product list page</h1>
    </>
  );
};

export default ProductList;
