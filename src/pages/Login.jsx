import React, { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Login = () => {
  const [logins , setLogins] = useState({})
  const {login} = useContext(AuthContext);

  const handleChange = (e)=>{
    const{name,value} = e.target ;
    setLogins({
      ...logins,
      [name]:value,
    });
  };

  const handleSubmit = (e) =>{
    e.preventDefault();
    if(logins.email && logins.password) {
      login(logins.email , logins.password);
    }
  }
  return (
    <div>
      Login
      <form onSubmit={handleSubmit}>
      <input data-cy="login-email" name="email" type="email" value={logins.email} placeholder="Enter Email" onChange={handleChange}/>
      <input data-cy="login-password" name="password" type="password" placeholder="Enter Password" value={logins.password} onChange={handleChange}/>
      <button data-cy="login-submit" type="submit">Login</button>
      </form>
     
    </div>
  );
};

export default Login;
