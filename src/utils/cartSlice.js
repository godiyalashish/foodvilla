import { createSlice } from "@reduxjs/toolkit";

const getId = (items, id) =>{
    const idx = items.findIndex(item => {
        item.id === id;
    })
    return idx;
}

const cartSlice = createSlice({
    name:'cart',
    initialState:{
        items:[],
        count:0
    },
    reducers:{
        addItem: (state, action) => {
            const obj = state.items.find(item=> item.id === action.payload.id);
            obj?obj.count++:state.items.push(action.payload)
            state.count++;
        },
        removeItem : () => {
            state.items.pop();
        },
        clearCart: () =>{
            state.items=[]
        }
    }
});

export const {addItem, removeItem, clearCart} = cartSlice.actions;
export default cartSlice.reducer;