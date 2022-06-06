import React,{useContext} from "react";
import {Link,useNavigate} from 'react-router-dom';
import {AuthContext} from '../../context/AuthContext';


// use react-router Link or NavLink


const Navbar = () => {
  const {isAuth , logout} = useContext(AuthContext);
 
  const navigate = useNavigate();

  const handleLogin = ()=>{
    if(isAuth){
      logout();
    }
    else{
      navigate("/login")
    }
  };

  return (
    <div data-cy="navbar">
      <div>
      <Link to="/" data-cy="navbar-home-link">Logo</Link>
      </div>
      <div>
      <span data-cy="navbar-cart-items-count"></span>
      <button data-cy="navbar-login-logout-button" onClick={handleLogin}>{isAuth? "Logout" : "Login"}</button>
      </div>
     
    </div>
  );
};

export default Navbar;
