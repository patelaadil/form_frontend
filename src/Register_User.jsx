import React, {useState} from 'react'
import './Register.css';
import { Link } from 'react-router-dom';

function Register() {
     const [ register, setRegister ] = useState({
        name:"",
        email:"",
        password:"",
        confirm:"",
        output:"",
        goAhead:""
    });

  function register_API(e){
    e.preventDefault();

    if(register.password !== register.confirm){
      setRegister({...register, output:"Password not matched!", goAhead:0});
      return;
    }

    fetch("https://form-backend-aoaq.onrender.com/register", {
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        name: register.name,
        email: register.email,
        password: register.password
      })
    })
    .then(async res => {
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.message || "Server error");
      }
      return data;
    })
    .then(data => {
      setRegister({...register, output:data.message, name:"",password:"",email:"",confirm:""});
    })
    .catch(err => console.error(err));
  }


  return (
    <div className='register-container'>
      <form className='register-form' onSubmit={register_API}>
        Name :- <input type="text" value={register.name} onChange={(e) => setRegister({...register, name: e.target.value})} placeholder='Enter Name...'/><br />
        Email :- <input type="email" value={register.email} onChange={(e) => setRegister({...register, email: e.target.value})} placeholder='Enter E-mail...'/><br />
        Password :- <input type="password" value={register.password} onChange={(e) => setRegister({...register, password: e.target.value})} placeholder='Enter Password...'/><br />
        Confirm password :- <input type="password" value={register.confirm} onChange={(e) => {setRegister({...register, confirm: e.target.value})}} placeholder='Confirm Password '/><br />
        <button type='submit'>Register</button>
      </form>
      <p className='login-link'>Already Registered ? <Link to="/">Login</Link> </p>
      <div id="output">{register.output}</div>
    </div>
  )
}

export default Register;
