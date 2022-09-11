import React from 'react'
import {useNavigate} from "react-router-dom"

export const NotFoundPage = () => {
 const navigate =useNavigate();
  return (
    <div className='container-fluid wrapper'>NotFoundPage
    <div>
        <h1> Not foun dpage</h1>
        <p>Click the button bellow </p>
        <button  onClick={()=>navigate("/")}> Retun</button>
    </div>
    </div>
  )
}
