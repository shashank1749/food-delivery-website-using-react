import React, { use } from 'react'
import image1 from '../assets/image1.avif';
import { LuLeafyGreen } from "react-icons/lu";
import { GiChickenOven } from "react-icons/gi";
import { AddItems } from '../redux/cartSlice';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
const Card = ({name,image,type,id,price}) => {
    let dispatch=useDispatch()
    
    return (
        <div className='w-[250px] h-[400px] p-3 bg-white rounded-lg flex flex-col gap-3 shadow-lg hover:border-2 border-green-300'  >
            <div className='w-[100%] h-[60%] overflow-hidden rounded-lg'>
                <img src={image} alt="" className='object-cover'/>

            </div>
            <div className='text-2xl font-semibold'>
                {name}
            </div>
            <div className='w-full flex justify-between items-center'>
                <div className='text-lg font-bold text-green-500'>{price}/-</div>
                <div className='flex justify-between items-center gap-3 text-green-500 font-bold text-lg'>{type==="veg"?<LuLeafyGreen /> : <GiChickenOven className='text-brown-200'/> }<span>{type}</span></div>
              </div>

            <button className='w-full bg-green-400 p-3 rounded-lg text-white hover:bg-green-500 transition-all ' onClick={()=>{dispatch(AddItems({id:id ,name:name,price:price,image:image,qty:1}));toast.success(`${name}`)}}> Add To Dish</button>

        </div>
    )
}

export default Card
