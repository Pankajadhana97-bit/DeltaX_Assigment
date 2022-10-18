import React, { useState } from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import './Login.css'

export const Login = () => {
  const navigate=useNavigate()
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  function submitDetails(){
    navigate("/register")
  }

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
      url: "http://localhost:8080/user/login",
      data: data,
    })
      .then((response) => {
        
        const token=response.data.accessToken;
        
       localStorage.setItem("tokn",JSON.stringify(token));
       navigate("/")
      })
      .catch((error) => {
        console.log(error);
      });
  }
  console.log(data);
  return (
    <div className="login">
      <h1 className="h1">Login</h1>
      <label>Email</label>
      <input 
        className="email2"
        type="text"
        name="email"
        value={data.email}
        onChange={handleChange}
        placeholder="Enter User Name"
      /> <br />
      <label>Password</label>
      <input
         className="password2"
        type="password"
        name="password"
        value={data.password}
        onChange={handleChange}
        placeholder="Enter Password"
      /> <br />
      <button className="button12" onClick={submitChange}>Submit</button>
      <p className="loginp1">If you are new Signup first</p>
      <button className="signup" onClick={submitDetails}>Signup</button>
    </div>
  );
};
