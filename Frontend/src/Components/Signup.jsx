import axios from "axios";
import React, { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router";
import "./Signup.css"

export const Signup = () => {
  const [data, setData] = useState({
    username: "",
    password: "",
    email: "",
  });
  // console.log(data)


  const navigate = useNavigate();

  function handleChange(event) {
    let value = event.target.value;
    setData({
      ...data,
      [event.target.name]: value,
    });
  }

  function submitChange() {
   console.log(data);
    axios({
      method: "POST",
      url: "http://localhost:8080/user/register",
      data: data,
    })
      .then((response) => {
      
        navigate("/login")
      })
      .catch((error) => {
        console.log(error);
      });
    
  }

  return (
    <div className="register">
      <h1>Sign up</h1>
      <label>Username</label>
      <input
      className="username1"
        type="text"
        name="username"
        value={data.username}
        onChange={handleChange}
        placeholder="Enter Username"
      />
     <br />
     <label>Email</label>
      <input
      className="email1"
        type="text"
        name="email"
        value={data.email}
        onChange={handleChange}
        placeholder="Enter Email"
      />
      <br />
      <label>Password</label>
      <input
      className="password1"
        type="password"
        name="password"
        value={data.password}
        onChange={handleChange}
        placeholder="Enter Password"
      />
      <br />
     
      <button className="button15" onClick={submitChange}>Submit</button>
    </div>
  );
};
