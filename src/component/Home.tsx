import Products from './Products';
import Searchbar from './Searchbar';
import { useAppDispatch, useAppSelector } from '../hooks/redux/hook';

import RightSidebar from './RightSidebar';
import { open } from '../features/rightSidebar/sidebarSlice';
import Cart from './Cart';
import ProductInfo from './ProductInfo';
import useAllProducts from '../hooks/products/useAllProducts';

function Home({ path }: { path: string }) {
  const dispatch = useAppDispatch();
  useAllProducts();
  const { isOpen, type } = useAppSelector((state) => state.sidebar);

  const onSearch = async (query: string) => {
    console.log(query);
  };

  const closeSidebar = () => {
    dispatch(open(false));
  };

  return (
    <div className="flex flex-col w-full">
      <h1 className="text-center mb-4">Home</h1>
      <Searchbar
        onSearch={onSearch}
        className="mx-auto w-auto mb-4"
        debounceTime={500}
      />
      <Products />
      <RightSidebar
        isOpen={isOpen}
        children={type === 'cart' ? <Cart /> : <ProductInfo />}
        onClose={closeSidebar}
      />
    </div>
  );
}

export default Home;
