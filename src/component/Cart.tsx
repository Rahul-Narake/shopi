import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../hooks/redux/hook';
import CartItem from './CartItem';
import { setOrder } from '../features/order/orderSlice';
import { useNavigate } from 'react-router';
import { emptyCart } from '../features/cart/cartSlice';

function Cart() {
  const { products } = useAppSelector((state) => state.cart);
  const [total, setTotal] = useState<number>(0);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const calculateTotal = () => {
    let total = 0;
    products.map((p) => {
      total += p.product.price * p.quantity;
    });
    setTotal(total);
  };

  useEffect(() => {
    if (products) {
      calculateTotal();
    }
  }, [products]);

  return (
    <div className="flex flex-col justify-between">
      <div className="flex flex-col h-[500px] overflow-scroll ">
        {products &&
          products.map((p) => (
            <CartItem
              key={p.product.id}
              product={p.product}
              quantity={p.quantity}
            />
          ))}
      </div>
      <div>
        <div className="flex justify-between mb-2">
          <h2>Total</h2>
          <h2>${total}</h2>
        </div>
        <div>
          <button
            className="w-full bg-blue-400 text-white rounded-md p-1"
            onClick={() => {
              if (products.length > 0) {
                dispatch(
                  setOrder({ products, amount: total, date: new Date() })
                );
                dispatch(emptyCart());
                navigate('/orders/place');
              }
            }}
            disabled={products.length === 0}
          >
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
