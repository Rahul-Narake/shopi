import React from 'react';
import { useAppSelector } from '../hooks/redux/hook';

function ProductInfo() {
  const { selectedProduct } = useAppSelector((state) => state.product);
  return (
    <div className="flex flex-col h-full">
      <div className="flex flex-col justify-center">
        <img
          src={selectedProduct?.images[0]}
          alt={selectedProduct?.title}
          className="w-[300px] h-[300px] mx-auto rounded-md"
        />
        <h1 className="text-center text-black font-bold">
          ${selectedProduct?.price}
        </h1>
      </div>
      <p>{selectedProduct?.description}</p>
    </div>
  );
}

export default ProductInfo;
