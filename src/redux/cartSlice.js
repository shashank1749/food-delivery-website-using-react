import { createSlice } from "@reduxjs/toolkit";

const cartSlice=createSlice({
    name:"cart",
    initialState:[],
    reducers:{
        AddItems:(state,action)=>{
           let existItem= state.find((item)=>item.id===action.payload.id)
           if(existItem){
           return state.map((item)=>(item.id===action.payload.id?{...item,qty:item.qty+1}:item))
           }
           else{
                 state.push(action.payload)
           }

           
        },
        RemoveItem:(state,action)=>{
            return state.filter((item)=>item.id!==action.payload)
        }, 
        incrimentQty:(state,action)=>{
          return state.map((item)=>(item.id===action.payload?{...item,qty:item.qty+1}:item))

        },
        decrimentQty:(state,action)=>{
          return state.map((item)=>(item.id===action.payload?{...item,qty:item.qty-1}:item))

        }

    }
})

export const {AddItems,RemoveItem,incrimentQty,decrimentQty}=cartSlice.actions
export default cartSlice.reducer