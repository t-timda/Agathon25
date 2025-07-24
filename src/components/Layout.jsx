import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';

const Layout = () => {
  return (
    <>
      <Navbar />
      <div className="pt-20 bg-white text-black min-h-screen">
        <Outlet />
      </div>
    </>
  );
};

export default Layout;