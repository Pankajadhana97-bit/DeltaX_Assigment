import React from 'react'

import {useNavigate,Navigate} from "react-router-dom"

export const PrivateRoute = ({children}) => {
    console.log(children);
    const token =JSON.parse(localStorage.getItem("tokn"));

    if(token!==null){
        return children;
    }
  return <Navigate to="/login"/>
}
