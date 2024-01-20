import React from 'react'
import { addToCart } from '../redux/Service/cartSlice'
import "../style/glassmorphic.css";

const Card = ({item,dispatch}) => {
    return (
    <div onClick={()=>dispatch((addToCart(item)))} className="max-w-xs overflow-hidden bg-[#ff00f219] backdrop-blur-sm border-t-[rgba(255,255,255,0.5)] border-l-[rgba(255,255,255,0.5)] border-solid glassmorphic border-t border-l rounded-lg cursor-pointer bc">  
      <div className="px-4 py-2">
        <h1 className="font-bold text-white blFt uppercase">{item.name}</h1>
      </div>
      <img  className="object-cover w-full h-48 mt-2" src={item.photo}/>
      <div className="flex items-center justify-between px-4 py-2 bg-gray-900">
      </div>
      </div>
  )
}

export default Card