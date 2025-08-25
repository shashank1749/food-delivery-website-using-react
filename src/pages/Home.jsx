import React, { useContext, useState } from 'react'
import Navbar from '../components/Navbar'
import Category from '../category'
import Card from '../components/card'
import { food_items } from '../food'
import { dataContext } from '../context/context';
import { RxCross2 } from "react-icons/rx";
import Card2 from '../components/card2'
import { useSelector } from 'react-redux'
import { toast } from 'react-toastify'

function Home() {
  let { cate, setCate, input, showcart, setShowcart } = useContext(dataContext)

  function filterr(category) {
    if (category === "ALL") {
      setCate(food_items)
    } else {
      let newlist = food_items.filter((item) => (item.food_category === category))
      setCate(newlist)
    }
  }
    let items=useSelector(state=>state.cart)
  
    let subtotal=items.reduce((total,item)=>total+item.qty*item.price,0)
    let deliveryfee=20;
    let taxes=subtotal*0.5/100;
    let total=Math.floor(subtotal+deliveryfee+taxes);

  return (
    <div className='w-full  bg-[#3e3e42] min-h-screen  '>
      <Navbar />
      {!input ?
        <div className='flex flex-wrap justify-center items-center gap-5 w-[100%]'>
          {Category.map((item) => {
            return <div className='w-[130px] h-[150px] bg-white flex flex-col items-start gap-5 p-5 
         justify-start text-[20px] font-semibold text-gray-600 rounded-lg shadow-ld hover:bg-green-200
         cursor-pointer transition-all duration-200' onClick={() => filterr(item.name)}>

              {item.icon}
              {item.name}
            </div>
          })}

        </div> : null}

      <div className='w-full flex flex-wrap gap-5 px-5 justify-center items-center pt-8 pb-8 '>
       {cate.length>1?cate.map((item) => (
          <Card name={item.food_name} image={item.food_image}
            price={item.price} type={item.food_type} id={item.id} />
        )) : <div className='text-center text-2xl text-green-500 font-semibold pt-5'> No Dish Found</div>}
        
      </div>

      <div className={`w-[100vw] md:w-[40vw] h-[100%] fixed top-0 right-0 bg-[#3e3e42] p-6 transition-all duration-500 flex flex-col overflow-auto  ${showcart ? "translate-x-0" : "translate-x-full"}`}>
        <header className='w-[100%] flex justify-between items-center'>
          <span className='text-green-400 text-[20px] font-semibold'>Orderd</span>
          <RxCross2 className='w-[30px] h-[30px] text-red-400 text-[20px] font-semibold cursor-pointer hover:text-red-600'onClick={()=>{setShowcart(false)}} />
        </header>
        {items.length>0?  <>
        
        <div className='w-full mt-9 flex flex-col gap-8'>
          {items.map((items)=>(
              <Card2 name={items.name} price={items.price} image={items.image} id={items.id} qty={items.qty}/>
          ))}
        </div> 
          <div className='w-full border-t-2 border-b-2 border-gray-400 mt-7 flex flex-col gap-2 p-8 '>
                <div className='flex justify-between items-center'>
                  <span className='text-lg text-white font-semibold'>Subtotal</span>
                  <span className=' text-lg text-green-400 font-bold'>{subtotal}/-</span>
                </div>
                  <div className='flex justify-between items-center'>
                  <span className='text-lg text-white font-semibold'>Delivery Fees</span>
                  <span className=' text-lg text-green-400 font-bold'>{deliveryfee}/-</span>
                </div>
                  <div className='flex justify-between items-center'>
                  <span className='text-lg text-white font-semibold'>Texes</span>
                  <span className=' text-lg text-green-400 font-bold'>{taxes}/-</span>
                </div>
          </div>
          
           <div className='flex justify-between items-center p-9'>
                  <span className='text-2xl text-white font-semibold'>Total</span>
                  <span className=' text-2xl text-green-400 font-bold'>{total}/-</span>
                </div>

                <button className='w-[80%] bg-green-400 p-3 rounded-lg text-white hover:bg-green-500 transition-all gap-5 ml-8 ' onClick={()=>{
                  toast.success("Order placed.....!")
                }}>Place order</button>
          </>:
          <div className='text-center text-2xl text-green-500 font-semibold pt-5'> 
          Empty Cart...
          </div>
          }
      
      </div>
   </div>
  )
}

export default Home
