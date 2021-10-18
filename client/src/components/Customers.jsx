import React, { useState, useEffect } from "react";
import axios from "axios";
import Customer from "./Customer";
const Customers = () => {
  const [users, setUsers] = useState();
  axios
    .get("/api/customers")
    .then((res) => setUsers(res.data))
    .then((err) => console.log(err));
  console.log(users[0]);
  return (
    <div className='body bg-gradient-to-bl from-blue-400 via-blue-600 to-indigo-700'></div>
  );
};

export default Customers;
