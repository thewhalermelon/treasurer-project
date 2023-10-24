import React from 'react';
import { redirect } from 'next/navigation';

interface ProductListProps {}

export const ITEMS_PER_PAGE = 12;

const ProductList: React.FC<ProductListProps> = async () => {
  redirect('/collections/1');
};

export default ProductList;
