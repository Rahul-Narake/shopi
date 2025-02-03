import { useEffect } from 'react';
import Navbar from './Navbar';
import { Outlet, useNavigate } from 'react-router';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import app from '../utils/db';
import { useAppDispatch } from '../hooks/redux/hook';
import { login } from '../features/user/userSlice';

function RootLayout() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  useEffect(() => {
    const auth = getAuth(app);
    onAuthStateChanged(auth, (user) => {
      if (user && user.email) {
        dispatch(login({ email: user.email }));
      } else {
        navigate('/signin');
      }
    });
  }, []);
  return (
    <div className="flex flex-col w-full h-screen">
      <div className="fixed top-0 w-full z-40 h-14 border border-b-gray-200 px-4 flex items-center bg-slate-50">
        <Navbar />
      </div>
      <div className="block top-14 relative">{<Outlet />}</div>
    </div>
  );
}

export default RootLayout;
