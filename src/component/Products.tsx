import { useAppSelector } from '../hooks/redux/hook';
import Product from './Product';

function Products() {
  const { products } = useAppSelector((state) => state.product);
  if (products.length === 0) {
    return (
      <div className="flex w-full justify-center text-center text-3xl">
        😓 Nothing related :{')'}
      </div>
    );
  }
  return (
    <div className="grid gap-4 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 mx-auto my-2">
      {products &&
        products.map((p) => <Product product={p} className="" key={p.id} />)}
    </div>
  );
}

export default Products;
