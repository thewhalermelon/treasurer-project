import React from 'react';
import { redirect } from 'next/navigation';

interface CollectionProps {}

const Collection: React.FC<CollectionProps> = () => {
  redirect('/collections');
};

export default Collection;
