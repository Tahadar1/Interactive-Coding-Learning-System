import React, { useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";

const ProtectedRoute = (props) => {
  const { Component } = props;
  const navigate = useNavigate()
  useEffect(()=>{
    let login = localStorage.getItem('isLoggedIn')
    if(!login){
        navigate('/login')
    }
  })
  return (
    <div>
      { localStorage.getItem('userrole') === 'ADMIN' ?
      <Component />
      :
      <Navigate replace to={'/dashboard'}/>
}
    </div>
  );
};

export default ProtectedRoute;
