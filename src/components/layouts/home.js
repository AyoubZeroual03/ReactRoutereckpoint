import React from 'react'
import { Navbare } from '../utils/navbar';
import {Footer} from "../footer/footer" 

export const HomeLayout = ({children}) => {
  return (
    <>
    <Navbare />
     {children}
    <Footer />
    </>

   
  )
}

