import { useLocation, useNavigate } from 'react-router';
import { useAppDispatch, useAppSelector } from '../hooks/redux/hook';
import { setCurrentProducts } from '../features/product/productSlice';
import { open, setType } from '../features/rightSidebar/sidebarSlice';
import { getAuth, signOut } from 'firebase/auth';
import app from '../utils/db';
import { logout } from '../features/user/userSlice';

function Navbar() {
  const navigate = useNavigate();
  const path = useLocation();
  const { categories } = useAppSelector((state) => state.category);
  const { products } = useAppSelector((state) => state.cart);
  const { isLoggedIn, currentUser } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();
  const auth = getAuth(app);
  return (
    <div className="flex flex-row items-center justify-between w-full">
      <div className="flex flex-row justify-start items-center">
        <h1 className="text-black font-bold mr-2 text-xl">Shopi</h1>
        <ul className="flex items-center justify-start space-x-2">
          <li
            className={`text-gray-600 font-thin cursor-pointer ${
              path.pathname == '/' ? 'underline' : ''
            }`}
            onClick={async () => {
              const res = await fetch(
                `https://api.escuelajs.co/api/v1/products`
              );
              const data = await res.json();
              dispatch(setCurrentProducts(data));
              navigate('/');
            }}
          >
            All
          </li>
          {categories &&
            categories.map((c) => (
              <li
                className={`text-gray-600 font-thin cursor-pointer ${
                  path.pathname == '/' + c.name ? ' border-b-2' : ''
                }`}
                key={c.id}
                onClick={async () => {
                  const res = await fetch(
                    `https://api.escuelajs.co/api/v1/categories/${c.id}/products`
                  );
                  const data = await res.json();
                  dispatch(setCurrentProducts(data));
                  navigate(`/${c.name}`);
                }}
              >
                {c.name}
              </li>
            ))}
        </ul>
      </div>
      <div className="flex flex-row justify-start items-center space-x-4">
        <ul className="flex justify-start items-center space-x-2">
          <li
            className={`text-gray-600 font-thin cursor-pointer ${
              path.pathname === '/orders' ? ' border-b-2' : ''
            }`}
            onClick={() => {
              navigate('/orders');
            }}
          >
            My Orders
          </li>
          <li
            className={`text-gray-600 font-thin cursor-pointer ${
              path.pathname === '/my-account' ? ' border-b-2' : ''
            }`}
            onClick={() => {
              navigate('/my-account');
            }}
          >
            My Account
          </li>
          {currentUser && isLoggedIn && (
            <li
              className="text-gray-600 font-thin cursor-pointer"
              onClick={() => {
                signOut(auth).then(() => {
                  dispatch(logout());
                  navigate('/signin');
                });
              }}
            >
              logout
            </li>
          )}
        </ul>
        <div className="flex justify-start items-center">
          <span
            onClick={() => {
              dispatch(setType('cart'));
              dispatch(open(true));
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
              className="lucide lucide-shopping-cart cursor-pointer"
            >
              <circle cx="8" cy="21" r="1" />
              <circle cx="19" cy="21" r="1" />
              <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
            </svg>
          </span>
          <p className="text-gray-400 font-thin cursor-pointer">
            {products.length}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
