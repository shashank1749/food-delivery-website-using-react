import React, { useContext, useEffect } from 'react'
import logo from '../assets/logo-5.png';

import { IoFastFoodSharp } from "react-icons/io5";
import { IoIosSearch } from "react-icons/io";
import { RiShoppingBag4Line } from "react-icons/ri";
import { dataContext } from '../context/context';
import { food_items } from '../food';
import { useSelector } from 'react-redux';

const Navbar = () => {
  let {input, setInput,cate,setCate,showcart,setShowcart}=useContext(dataContext)
  useEffect(()=>{
    let newlist=food_items.filter((item)=>item.food_name.includes(input)||item.food_name.toLowerCase().includes(input))
    setCate(newlist)
  },[input])
  let items=useSelector(state=>state.cart)
  return (
    <div className='w-full h-[100px] flex justify-between items-center px-5 md:px-8 '>
      <div className='w-[60px] h-[60px] bg-white flex justify-center items-center rounded-full shadow-xl md:w-[100px] md:h-[100px] md:mt-7'>
        {/* <IoFastFoodSharp className='h-[30px] w-[30px] text-green-500 '/ > */}
        <img src={logo} alt="" className='h-full w-full rounded-full md:w-[100px] md:h-[100px]  ' />
        
      </div>
      <form action="" className='w-[50%] h-[60px] items-center flex bg-white px-5 gap-5 rounded-md shadow-md md:w-[70%]'>
         <IoIosSearch className='h-[25px] w-[25px] text-green-500' onSubmit={(e)=>e.preventDefault()}/>
         <input type="text" name="" id="" placeholder='search items.....!' className='w=[100] outline-none font-[20px]
           'onChange={(e)=>setInput(e.target.value)} value={input}/>

      </form>
      <div className='w-[60px] h-[60px] bg-white flex justify-center items-center rounded-md shadow-xl relative cursor-pointer' onClick={()=>{
        setShowcart(true)
      }}>
        <span className='absolute top-0 right-2 text-green-500 font-bold'>{items.length}</span>
        <RiShoppingBag4Line className='h-[30px] w-[30px] text-green-500 '/>
      </div>
    </div>
  )
}

export default Navbar
