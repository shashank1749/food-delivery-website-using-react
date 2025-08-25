import React, { createContext, useState } from 'react'
import { food_items } from '../food'
export const dataContext=createContext()

function Context({children}) {
    let [cate,setCate]=useState(food_items)
    let [input,setInput]=useState("")
    let [showcart,setShowcart]=useState(false)
    let data={
        input,
        setInput,
        cate,setCate,
        showcart,
        setShowcart
    }
  return (
    <div>
        <dataContext.Provider value={data} >
      {children}
      </dataContext.Provider>
    </div>
  )
}

export default Context
