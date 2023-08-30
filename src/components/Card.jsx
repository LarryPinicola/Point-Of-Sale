import React from 'react'
import { addToCart } from '../redux/Service/cartSlice'

const Card = ({item,cart,dispatch}) => {
    return (
   <div >
    <div className="max-w-xs overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">  
      <div className="px-4 py-2">
        <h1 className="font-bold text-gray-800 uppercase dark:text-white">{item.name}</h1>
      </div>
      <img onClick={()=>dispatch((addToCart(item)))} className="object-cover w-full h-48 mt-2" src={item.photo}/>
      <div className="flex items-center justify-between px-4 py-2 bg-gray-900">
      </div>
      </div>
   </div>
  )
}

export default Card