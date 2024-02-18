import { createSlice } from "@reduxjs/toolkit";

// const loadCartState = () => {
//     try {
//       const serializedState = localStorage.getItem('cartState');
//       return serializedState ? JSON.parse(serializedState) : undefined;
//     } catch (error) {
//       console.error('Error loading cart state from local storage:', error);
//       return undefined;
//     }
// }; 
// const saveCartState = (state) => {
//     try {
//       const serializedState = JSON.stringify(state);
//       localStorage.setItem('cartState', serializedState);
//     } catch (error) {
//       console.error('Error saving cart state to local storage:', error);
//     }
// };

const cartSlice = createSlice({
    name: 'cart',
    initialState:{
      items: [],
      total: 0,
    },
    // initialState: loadCartState() || {
    //     items: [],
    //     total: 0,
    // },
    reducers: {
        add(state, action) {
            const product = state.items.find(item => item.id === action.payload.id);
            if(product){
                product.quantity += 1;
                state.total += action.payload.price;
            }else{
                state.items.push(action.payload);
                state.total += action.payload.price;
                action.payload.quantity=1;
            }
            // saveCartState(state);
        },
        remove(state, action) {
            const { id, price } = action.payload;
            state.items = state.items.filter(item => item.id !== id);
            state.total -= price;
            // saveCartState(state);
        },
        countIncre(state, action) {
            const item = state.items.find(item => item.id === action.payload);
            if (item) {
                item.quantity += 1;
                state.total += item.price;
            }else{
                
            }
            // saveCartState(state);
        },
        countDec(state, action) {
            const item = state.items.find(item => item.id === action.payload);
            if (item && item.quantity>1) {
                item.quantity -= 1;
                state.total -= item.price;
            }
            // saveCartState(state);
        },
    }
})

export const { add, remove, countDec, countIncre } = cartSlice.actions;
export default cartSlice.reducer;