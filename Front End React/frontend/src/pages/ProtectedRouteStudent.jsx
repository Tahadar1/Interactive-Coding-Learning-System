import React, { useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";

const ProtectedRouteStudent = (props) => {
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
        { localStorage.getItem('userrole') === 'STUDENT' ?
        <Component />
        :
        <Navigate replace to={'/admin'}/>
  }
      </div>
    );
}

export default ProtectedRouteStudent