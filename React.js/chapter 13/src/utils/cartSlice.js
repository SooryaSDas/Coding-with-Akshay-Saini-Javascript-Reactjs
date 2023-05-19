import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
   name : "cart",
   initialState : {
    items : []
   },
   reducers : {
    addItem : (state, action) =>{
        state.items.push(action.payload)
    },
    removeItem : (state, action) =>{
        state.items.pop()
    },
    clearCart : (state)=>{
        state.items = []
    } 
   }
})

export const {addItem, removeItem, clearCart} = cartSlice.actions;

export default cartSlice.reducer;


/*
*
*create store
*   - configurestore() - RTK
*
*
*Provide my store to app
*   <Provider store = {store}> - import from react-redux
*
*
*Slice
* RTK - createslice({
    name : "",
    initialstate : 
        reducers : {
            addItem : (state, action) =>{state= action.payload}
        }
})
*
*export const {additem, removeitem} = cartslice.actions;
*export default cartslice.reducer; == > the list of reducers
*
*put the slice into store
    {
        reducer : {
            cart : cartslice,
            user : userslice
        }
    }
*/