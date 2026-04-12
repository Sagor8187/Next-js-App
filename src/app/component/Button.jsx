"use client"
import React, { useContext } from 'react'
import { Mycontext } from '../context/Cartcontext'

export default function Button({item}) {
  const {cartproduct,cart} = useContext(Mycontext)
  console.log(cart)
  return (
    <div>
         <button onClick={()=>cartproduct(item)}  className="mt-3 p-5 font-bold w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition">
              cart
            </button>
    </div>
  )
}
