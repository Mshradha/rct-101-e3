import React, { createContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuth,setIsAuth] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";


  const login = (email,password)=>{
    if(email, password){
      setIsAuth(true)
    }
  }
  const logout =()=>{
    setIsAuth(false)
  }
  

  useEffect(()=>{
    if(isAuth){
      navigate(from ,{replace:true});
    } 
    else{
      navigate("/login");
    }
  },[isAuth,from,navigate])
  return <AuthContext.Provider value={{isAuth ,login ,logout}}>
    {children}
    </AuthContext.Provider>;
};
