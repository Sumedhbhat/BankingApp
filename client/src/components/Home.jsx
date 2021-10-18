import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section className='body'>
      <div className='flex body items-center justify-center bg-gradient-to-t from-blue-400 via-blue-500 to-indigo-800'>
        <div className='rounded-2xl shadow-2xl w-1/2 p-10 bg-gray-200'>
          <div className='font-bold text-center text-2xl leading-snug'>
            Welcome to the our newly designed <br />
            Banking{" "}
            <span className='underline hover:bg-blue-700 transition-all duration-500'>
              Experience
            </span>
          </div>
          <div className='text-sm py-7 px-10 text-center'>
            We have a designed a completely new theme and <br />
            made it easy for anyone to transfer to anyone with a bank account
          </div>
          <div className='flex items-center justify-center'>
            <button className='rounded-md px-4 py-2 hover:animate-spin bg-indigo-900 transition-all duration-500 text-white font-sans border-2 hover:border-indigo-900 hover:bg-white hover:text-black font-semibold text-base'>
              <Link to='/login'>Customer Login</Link>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
