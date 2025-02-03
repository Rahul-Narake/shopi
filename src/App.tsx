import { Route, Routes } from 'react-router';
import './App.css';
import RootLayout from './component/RootLayout';
import Home from './component/Home';
import MyOrders from './component/MyOrders';
import Orders from './component/Orders';
import Auth from './component/Auth';
import Profile from './component/Profile';

function App() {
  return (
    <Routes>
      <Route path="/signup" element={<Auth />} />
      <Route path="/signin" element={<Auth />} />
      <Route path="/" element={<RootLayout />}>
        <Route path="" element={<Home />} />
        <Route path="my-account" element={<Profile />} />
        <Route path="clothes" element={<Home />} />
        <Route path="electronics" element={<Home />} />
        <Route path="toys" element={<Home />} />
        <Route path="furniture" element={<Home />} />
        <Route path="orders" element={<Orders />} />
        <Route path="orders/place" element={<MyOrders />} />
      </Route>
    </Routes>
  );
}

export default App;
