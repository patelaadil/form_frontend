import { useState } from "react";
import React from 'react';
import { Link } from "react-router-dom";
import './Login.css'

function Login_User() {
  const [login,setLogin] = useState({
    email:"",
    password:"",
    output:""
  });

  function API(e){
    e.preventDefault();

    fetch("https://form-backend-aoaq.onrender.com/login", {
      method:"POST",
      headers: {
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        email: login.email,
        password: login.password
      })
    })
    .then(res => res.json())
    .then(data => {
      setLogin({...login, output:data.message, email:"", password:""});
    })
    .catch(console.error());
  }

  return (
    <div className="login-container">
        <form className="login-form" onSubmit={API}>
            E-mail :- <input type="email" value={login.email} onChange={(e) => setLogin({...login, email: e.target.value})} placeholder='Enter email...'/><br />
            Password :- <input type="password" value={login.password} onChange={(e) => setLogin({...login, password: e.target.value})} placeholder='Enter password...'/><br />
            <button type="submit">Log in</button>
        </form>
        <p className="register-link">New User ? <Link to="/register">Register</Link> </p>
        <div id="output">{login.output}</div>
    </div>
  )
}

export default Login_User;
