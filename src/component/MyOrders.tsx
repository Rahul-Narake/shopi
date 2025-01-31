import { useNavigate } from 'react-router';
import { useAppSelector } from '../hooks/redux/hook';
import OrderItem from './OrderItem';

function MyOrders() {
  const navigate = useNavigate();
  const { order } = useAppSelector((state) => state.order);
  return (
    <div className="flex flex-col mx-auto">
      <div className="mx-auto shadow-md w-[400px] mt-10 p-2">
        <div className=" flex justify-start mb-8">
          <span
            onClick={() => {
              navigate('/orders');
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
              className="lucide lucide-chevron-left mr-8 cursor-pointer"
            >
              <path d="m15 18-6-6 6-6" />
            </svg>
          </span>
          <h1>My Orders</h1>
        </div>
        <div className="flex flex-col">
          {order &&
            order.products &&
            order.products.map((p) => (
              <OrderItem
                product={p.product}
                key={p.product.id}
                quantity={p.quantity}
              />
            ))}
        </div>
      </div>
    </div>
  );
}

export default MyOrders;
