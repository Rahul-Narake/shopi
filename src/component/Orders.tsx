import { useAppDispatch, useAppSelector } from '../hooks/redux/hook';
import { useNavigate } from 'react-router';

function Orders() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { myOrders } = useAppSelector((state) => state.order);
  if (myOrders.length > 0) {
    return (
      <div className="flex flex-col w-full mt-2 justify-center">
        <h1 className="text-center mb-4">My Orders</h1>
        {myOrders.map((o, i) => {
          return (
            <div
              key={i}
              className="border border-slate-950 flex justify-between w-[400px] px-2 py-1 mx-auto rounded-md mb-2"
            >
              <div>
                <div className="flex space-x-2">
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
                    className="lucide lucide-calendar-days"
                  >
                    <path d="M8 2v4" />
                    <path d="M16 2v4" />
                    <rect width="18" height="18" x="3" y="4" rx="2" />
                    <path d="M3 10h18" />
                    <path d="M8 14h.01" />
                    <path d="M12 14h.01" />
                    <path d="M16 14h.01" />
                    <path d="M8 18h.01" />
                    <path d="M12 18h.01" />
                    <path d="M16 18h.01" />
                  </svg>

                  <p>
                    {o.date.getDate() +
                      '/' +
                      o.date.getMonth() +
                      '/' +
                      o.date.getFullYear()}
                  </p>
                </div>
                <div className="flex space-x-2">
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
                    className="lucide lucide-shopping-basket"
                  >
                    <path d="m15 11-1 9" />
                    <path d="m19 11-4-7" />
                    <path d="M2 11h20" />
                    <path d="m3.5 11 1.6 7.4a2 2 0 0 0 2 1.6h9.8a2 2 0 0 0 2-1.6l1.7-7.4" />
                    <path d="M4.5 15.5h15" />
                    <path d="m5 11 4-7" />
                    <path d="m9 11 1 9" />
                  </svg>
                  <p>{o.products.length}</p>
                </div>
              </div>
              <div className="flex space-x-2 items-center">
                <p className="text-xl font-bold text-black">${o.amount}</p>
                <span
                  onClick={() => {
                    navigate('/orders/place');
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
                    className="lucide lucide-chevron-right cursor-pointer"
                  >
                    <path d="m9 18 6-6-6-6" />
                  </svg>
                </span>
              </div>
            </div>
          );
        })}
      </div>
    );
  } else {
    return (
      <div className="flex w-full flex-col">
        <div className="mx-auto mt-4 flex flex-col justify-center">
          <h1 className="mb-4">My Orders</h1>
          <span className="text-center w-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="54"
              height="54"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="lucide lucide-package-open"
            >
              <path d="M12 22v-9" />
              <path d="M15.17 2.21a1.67 1.67 0 0 1 1.63 0L21 4.57a1.93 1.93 0 0 1 0 3.36L8.82 14.79a1.655 1.655 0 0 1-1.64 0L3 12.43a1.93 1.93 0 0 1 0-3.36z" />
              <path d="M20 13v3.87a2.06 2.06 0 0 1-1.11 1.83l-6 3.08a1.93 1.93 0 0 1-1.78 0l-6-3.08A2.06 2.06 0 0 1 4 16.87V13" />
              <path d="M21 12.43a1.93 1.93 0 0 0 0-3.36L8.83 2.2a1.64 1.64 0 0 0-1.63 0L3 4.57a1.93 1.93 0 0 0 0 3.36l12.18 6.86a1.636 1.636 0 0 0 1.63 0z" />
            </svg>
          </span>
          <p className="text-black font-semibold">
            Nothing yet, add some products!
          </p>
        </div>
      </div>
    );
  }
}

export default Orders;
