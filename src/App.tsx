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
        <Route path="" element={<Home path="" />} />
        <Route path="my-account" element={<Profile />} />
        <Route path="clothes" element={<Home path="/clothes" />} />
        <Route path="electronics" element={<Home path="/electronics" />} />
        <Route path="toys" element={<Home path="/toys" />} />
        <Route path="furniture" element={<Home path="/furniture" />} />
        <Route path="orders" element={<Orders />} />
        <Route path="orders/place" element={<MyOrders />} />
      </Route>
    </Routes>
  );
}

export default App;
