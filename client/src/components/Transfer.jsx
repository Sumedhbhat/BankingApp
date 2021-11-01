import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Transfer = () => {
  var newUser = {};
  let { id } = useParams();
  const [Customer, setCustomer] = useState([]);
  const [Users, setUsers] = useState([]);
  const [Transfer, setTransfer] = useState({});
  const [Amount, setAmount] = useState(0);
  const [Balance, setBalance] = useState({});

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

  const Submit = async () => {
    if (Amount <= Customer[0].balance) {
      let data = { Transfer, Amount, Balance };
      axios
        .post("/api/customers", data)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => console.log(err));
    } else {
      alert("Please Enter a valid amount");
    }
  };

  const handleSubmit = (e) => {
    var value = e.target.value;
    var name = e.target.name;
    if (name === "CustomerSelect") {
      setBalance(() => {
        return Customer[0]._id;
      });
      setTransfer(() => {
        newUser = Users.filter((user) => user.name === value);
        return newUser[0]._id;
      });
    } else {
      setAmount(() => {
        return Number(value);
      });
    }
  };
  useEffect(() => {
    console.log(typeof Amount);
    console.log(Transfer, Amount, Balance);
  }, [Transfer, Amount, Balance]);

  return (
    <div className='body bg-gradient-to-tr from-blue-600 via-blue-800 to-indigo-600 flex justify-center items-center'>
      <div className='bg-white w-5/6 md:w-1/2 h-3/5 my-auto rounded-xl '>
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
                onChange={handleSubmit}
                name='Amount'
                value={Amount === 0 ? "" : Amount}
              />
              <div className='text-left text-2xl mt-6 mx-2 font-semibold'>
                Transfer To:
              </div>
              <select
                name='CustomerList'
                className='text-left pl-2 font-regular text-lg block h-12 w-1/3 mx-2 my-4 bg-gray-200 rounded-lg leading-tight border border-gray-700 '
                onChange={handleSubmit}
                name='CustomerSelect'
              >
                <option defaultValue>Select</option>
                {Users.map((user) => {
                  return (
                    <option value={user.name} key={user._id} id={user._id}>
                      {user.name}
                    </option>
                  );
                })}
              </select>
              <div className=''>
                <button
                  type='submit'
                  className='bg-blue-600 mx-2 p-2 mt-2 text-white text-lg rounded border-2 border-blue-600 hover:bg-white hover:text-blue-800 px-3'
                  onClick={Submit}
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
