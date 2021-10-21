import React from "react";
import { Link } from "react-router-dom";

const Customer = (props) => {
  const { name, email, balance, _id } = props;

  return (
    <div className='flex items-center py-5 '>
      <div className='w-5/6 lg:w-2/5 bg-white shadow-2xl mx-auto py-3 rounded-2xl h-44 flex items-center'>
        <div className='flex-none pl-7 pr-4'>
          <img
            src='https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
            alt=''
            className='w-24 h-24 rounded-full '
            style={{ objectFit: "cover" }}
          />
        </div>
        <div>
          <div className='text-black text-xl font-bold px-6 font-1'>{name}</div>
          <div className='font-1 px-6 font-regular text-sm text-gray-600'>
            {email}
          </div>
          <div className='text-md font-semibold py-2 px-6'>
            Balance: {balance}
          </div>
          <div className='px-6'>
            <button className='bg-blue-700 rounded-lg px-2 py-2 font-base border-2 text-white hover:bg-white hover:text-black hover:border-black hover:border-2'>
              <Link to={`/customer/${_id}`}>Transfer Money</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Customer;
