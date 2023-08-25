import Cookies from 'js-cookie'
import React from 'react'
import {Navigate} from "react-router-dom"

const Guard = ({children}) => {
  const token = Cookies.get("token");
  console.log(token);
  if(!token){
    return children
  }else{
    return <Navigate to="/dashboard/home"/>
  }
}

export default Guard