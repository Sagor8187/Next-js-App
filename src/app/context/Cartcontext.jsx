"use client"
import { createContext, useState } from "react";

export const Mycontext = createContext()


export default function Cartcontext({children}) {

    const [cart,setcart]=useState([])

    const cartproduct = (item)=>{
        const exist = cart.find(data => data.id == item.id)

        if(exist){
            alert('this product already added')
        }else{
            setcart([...cart,item])
        }
    }
    
  return (
    <Mycontext.Provider value={{cartproduct,cart}}>
        {children}
    </Mycontext.Provider>
  )
}
