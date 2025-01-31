import { addToCart } from '../features/cart/cartSlice';
import { IProduct, setSelectedProduct } from '../features/product/productSlice';
import { open, setType } from '../features/rightSidebar/sidebarSlice';
import { useAppDispatch, useAppSelector } from '../hooks/redux/hook';

function Product({
  product,
  className = '',
}: {
  product: IProduct;
  className: string;
}) {
  const dispatch = useAppDispatch();
  const { products } = useAppSelector((state) => state.cart);
  const inCart = products.find((p) => p.product.id === product?.id);
  return (
    <div className={`flex flex-col ${className} justify-center min-h-[350px]`}>
      <div className="flex w-60 h-60 rounded-xl relative">
        <button
          className="absolute top-0 right-0 mr-2 mt-2"
          disabled={inCart ? true : false}
          onClick={() => {
            if (!inCart) {
              dispatch(setType('cart'));
              dispatch(open(true));
              dispatch(addToCart(product));
            }
          }}
        >
          {inCart ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="black"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="lucide lucide-circle-plus text-black bg-white rounded-full"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M8 12h8" />
              <path d="M12 8v8" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill={`none`}
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="lucide lucide-circle-plus text-black bg-white rounded-full"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M8 12h8" />
              <path d="M12 8v8" />
            </svg>
          )}
        </button>
        <img
          src={product.images[0]}
          alt={product.title}
          className="w-full rounded-xl"
          onClick={() => {
            dispatch(setSelectedProduct(product));
            dispatch(open(true));
            dispatch(setType('info'));
          }}
        />
        <p className="absolute bottom-0 left-0 ml-2 mb-2 rounded-full bg-white text-black px-2">
          {product?.category.name}
        </p>
      </div>
      <div className="flex flex-row items-start justify-start w-60 relative">
        <h3 className="text-slate-400 font-thin max-w-[70%]">
          {product?.title}
        </h3>
        <h2 className="absolute right-0 ">{'$' + product.price}</h2>
      </div>
    </div>
  );
}

export default Product;
