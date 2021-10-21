import React, { useState, useEffect } from "react";
import axios from "axios";
import Customer from "./Customer";
const Customers = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const getUsers = () => {
      axios
        .get("/api/customers")
        .then((res) => {
          newData(res.data);
        })
        .catch((err) => console.error(err));
    };
    getUsers();
  }, []);
  const newData = (data) => {
    setUsers(data);
  };

  return (
    <div className='body bg-gradient-to-bl from-blue-400 via-blue-600 to-indigo-700'>
      {users.map((user) => {
        const { _id } = user;
        return <Customer {...user} users={user} key={_id} id={_id} />;
      })}
    </div>
  );
};

export default Customers;
