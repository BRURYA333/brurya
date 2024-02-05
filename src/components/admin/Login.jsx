import React, { useState } from "react";
// import axios from 'axios';
import myBackground from '../MyBackground'; // Import MyPage component

function Login({ setIsLogin }) {

  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    // axios.post('http://localhost:8787/login', {
    //   "name": name, "password": password
    // }).then((res) => {
    //   console.log(res.status);
    //   setIsLogin(true);

    // }).catch((error) => {
    //   if (error.response && error.response.status === 401) { // Corrected error handling
    //     console.log(error.message);
    //     setIsLogin(false);
    //   }
    //   alert("Username and password are incorrect, try again");
    //   setPassword('');
    //   setName('');
    // })
  }

  return (
    <>
      <myBackground /> {/* Render myBackground component here */}
      <div>
        <h2>הזן שם משתמש וסיסמה</h2>
        <br />
        <label>
          name:
          <input value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <br />
        <label>
          password:
          <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" />
        </label >
        <br />

        <button onClick={handleLogin}>log in</button>
      </div>
    </>
  )
}

export default Login;
