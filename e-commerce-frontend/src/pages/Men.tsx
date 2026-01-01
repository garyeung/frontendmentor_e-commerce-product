import React, { useContext } from 'react';
import Product from '@/components/uis/Product';
import { ProductContext } from '@/services/context';

const Men: React.FC = () => {
  const sampleProduct = useContext(ProductContext);

  if (sampleProduct === null) {
    console.error("Sample product not found for Men page");
    return null;
  }

  return (
    <Product product={sampleProduct.value} />
  );
};

export default Men;