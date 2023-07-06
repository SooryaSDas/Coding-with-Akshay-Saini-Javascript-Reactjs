import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name : "cart",
    initialState : {
        items : {},
        totalItemCount : 0
    },
    reducers : {
        addItem : (state, action)=>{
            const item = state.items[action.payload.id];
            const quantity = 
                item && item.hasOwnProperty("quantity") 
                    ? state.items[action.payload.id]?.quantity + 1 
                    : 1;
            state.items[action.payload.id] = {...action.payload, quantity};
            state.totalItemCount = state.totalItemCount + 1;
        },
        removeItem : (state, action)=>{
            const item = state.items[action.payload];
            if(!item) return;
            if(item.quantity > 1){
                item.quantity -= 1;
                state.totalItemCount --;
            }else{
                state.totalItemCount --;
                delete state.items[action.payload];
            }
        },
        clearCart: (state) => {
        state.items = {};
        state.totalItemCount = 0;
        },
    }
});

export const {addItem, removeItem, clearCart} = cartSlice.actions;
export default cartSlice.reducer;