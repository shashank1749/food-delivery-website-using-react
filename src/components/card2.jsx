import React from 'react'
import image1 from '../assets/image1.avif';
import { RiDeleteBin6Line } from "react-icons/ri";
import { useDispatch } from 'react-redux';
import { decrimentQty, incrimentQty, RemoveItem } from '../redux/cartSlice';
function Card2({name , id ,price,image,qty}) {
  let dispatch=useDispatch()
  return (
    <div className='w-[100%] h-[120px]  p-2  shadow-xl flex justify-between bg-white'>
      <div className='w-[60%] h-full  flex gap-5 '>
        <div className='w-[60%] h-full overflow-hidden rounded-lg'>
            <img src={image} alt="" className='object-cover'/>
        </div>
        <div className='w-[40%] h-full flex flex-col gap-3'> 
            <div className='text-lg text-gray-500 font-semibold'>{name}</div>
            <div className='w-[100px] h-[50px] bg-slate-400 flex rounded-lg overflow-x-hidden border-2 border-green-400'>
                    <button className='w-[30%] h-full bg-white flex text-green-400 justify-center font-bold items-center hover:bg-gray-200'onClick={()=>{
                      qty>1?dispatch(decrimentQty(id)):1}}>-</button>
                    <span className='w-[40%] h-full bg-white border-x-2 flex text-green-400 justify-center font-bold items-center '>{qty}</span>
                    <button className='w-[30%] h-full bg-white flex text-green-400 justify-center font-bold items-center hover:bg-gray-200' onClick={()=>{
                      dispatch(incrimentQty(id))}}>+</button>

            </div>
        </div>
      </div>
      <div className='flex flex-col justify-start item-end gap-6'>
        <span className='text-xl font-semibold text-green-500'>{price}/-</span>
        <RiDeleteBin6Line className='w-[30px] h-[30px] text-red-400 cursor-pointer'onClick={()=>dispatch(RemoveItem(id))} />
      </div>
    </div>
  )
}

export default Card2
