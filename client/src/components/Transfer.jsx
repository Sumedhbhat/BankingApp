import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Transfer = () => {
  const patchTest = async () => {
    const res = await axios.patch(`/api/customers/${id}`, { balance: 100000 });
    console.log(res.data());
  };
  useEffect(() => {
    patchTest();
  });

  let { id } = useParams();
  const [Customer, setCustomer] = useState([]);
  const [Users, setUsers] = useState([]);
  axios.get("/api/customers").then((res) => {
    setUsers((data) => {
      var newUsers = res.data;
      newUsers = newUsers.filter((data) => data._id !== id);
      return newUsers;
    });
  });
  axios.get(`/api/customers/${id}`).then((res) =>
    setCustomer(() => {
      return res.data;
    })
  );
  const handleSubmit = () => {};
  return (
    <div className='body bg-gradient-to-tr from-blue-600 via-blue-800 to-indigo-600 flex justify-center items-center'>
      <div className='bg-white w-5/6 md:w-1/2 h-1/2 my-10 rounded-xl '>
        {Customer.map((Customer) => {
          return (
            <div className='py-7 px-5 font-1' key={id}>
              <div className='image'></div>
              <div className='text-left font-bold mx-2 text-3xl mb-2'>
                {Customer.name}
              </div>
              <div className='text-left font-regular mx-2 text-xl'>
                {Customer.email}
              </div>
              <input
                className=' placeholder-gray-900 placeholder-opacity-80 px-3 my-3 text-xl appearance-none block rounded-lg h-12 bg-gray-200 border mx-2 border-gray-600 focus:bg-white'
                placeholder={Customer.balance}
                onSubmit={handleSubmit}
              />
              <div className='text-left text-2xl mt-6 mx-2 font-semibold'>
                Transfer To:
              </div>
              <select
                name='CustomerList'
                className='text-left pl-2 font-regular text-lg block h-10 w-1/2 mx-2 my-4 bg-gray-200 rounded-lg leading-tight border border-gray-700 '
              >
                {Users.map((user) => {
                  return (
                    <option value={user.name} key={user._id}>
                      {user.name}
                    </option>
                  );
                })}
              </select>
              <div className=''>
                <button
                  className='bg-blue-600 mx-2 p-2 mt-2 text-white rounded'
                  onClick={handleSubmit}
                >
                  Submit
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Transfer;
