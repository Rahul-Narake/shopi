import {
  decreseQuantity,
  increseQuantity,
  removeFromCart,
} from '../features/cart/cartSlice';
import { IProduct } from '../features/product/productSlice';
import { useAppDispatch } from '../hooks/redux/hook';

function CartItem({
  product,
  quantity,
}: {
  product: IProduct;
  quantity: number;
}) {
  const dispatch = useAppDispatch();

  return (
    <div className="flex items-center border border-gray-[2px] rounded-lg mb-2 justify-between px-4 py-1">
      <div className="mr-2 flex flex-row mx-2">
        <img
          className="w-16 h-16 rounded-md mr-2"
          src={product?.images[0]}
          alt={product?.title}
        />
        <div className="flex flex-col">
          <h2>{product.title}</h2>
          <p>{product?.price}</p>
          <div className="flex space-x-2">
            <span
              className="p-1 w-6 h-6 border border-slate-900 rounded-md flex items-center justify-center cursor-pointer"
              onClick={() => {
                dispatch(decreseQuantity(product.id));
              }}
            >
              -
            </span>
            <p>{quantity}</p>
            <span
              className="p-1 w-6 h-6 border border-slate-900 rounded-md flex items-center justify-center cursor-pointer"
              onClick={() => {
                dispatch(increseQuantity(product.id));
              }}
            >
              +
            </span>
          </div>
        </div>
      </div>

      <div
        className="cursor-pointer"
        onClick={() => {
          dispatch(removeFromCart(product?.id));
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          className="lucide lucide-x"
        >
          <path d="M18 6 6 18" />
          <path d="m6 6 12 12" />
        </svg>
      </div>
    </div>
  );
}

export default CartItem;
