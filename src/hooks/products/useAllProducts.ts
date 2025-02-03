import { useEffect, useState } from 'react';
import { useAppDispatch } from '../redux/hook';
import { setCurrentProducts } from '../../features/product/productSlice';

function useAllProducts() {
  const [loading, setLoading] = useState(false);
  const dispatch = useAppDispatch();
  const fetchAllProducts = async () => {
    try {
      setLoading(true);
      const res = await fetch(`https://api.escuelajs.co/api/v1/products`);
      const data = await res.json();
      dispatch(setCurrentProducts(data));
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchAllProducts();
  }, []);
  return { loading, fetchAllProducts };
}

export default useAllProducts;
