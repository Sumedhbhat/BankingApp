import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className='h-14 bg-gray-900 px-3 py-4 text-white'>
      <div className='flex'>
        <div className='flex-grow'>
          <Link to='/'>Banking</Link>
        </div>
        <div className='flex-none px-2'>
          <Link to='/customers'>Customers</Link>
        </div>
        <div className='flex-none px-2'>
          <Link to='/customer/:id'>Transactions</Link>
        </div>
        <div className='flex-none px-2'>
          <Link to='/about'>About Us</Link>
        </div>
        <div className="flex-none px-2">
          <Link to='/login'>Login</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
