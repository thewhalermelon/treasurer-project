import React from 'react';
import { redirect } from 'next/navigation';

interface ProductListProps {}

const ProductList: React.FC<ProductListProps> = async () => {
  redirect('/collections/1');
};

export default ProductList;
