import React from "react";
import logo from "../index.png";

const AboutUs = () => {
  return (
    <section className='bg-gradient-to-br flex  justify-center from-blue-800 via-blue-900 to-indigo-900 body object-cover'>
      <div className='bg-white h-2/3 w-3/5 rounded-xl m-auto '>
        <div className='flex-grow items-center justify-center'>
          <div className='px-10 flex-grow items-center justify-items-center mb-6 pt-10 '>
            <img
              src={logo}
              alt=''
              className='items-center flex justify-items-center mx-auto mt-5 border-4 p-1 rounded-xl border-black'
            />
          </div>
          <div className='container-sm mx-auto px-9 text-black'>
            <div className='content mx-auto font-extrabold justify-center leading-10 flex pt-8 mt-5 text-2xl w-2/3 text-center'>
              Us at the Goliath National Bank wish to provide you with the most
              secure and convenient way to cover your transactions. We have
              build over a 100 branches all over the world and are constantly
              looking to expanding our business around the globe to help more
              people in getting the things they want and in the fastest way
              possible
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
