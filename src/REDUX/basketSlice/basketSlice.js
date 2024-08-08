import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

const initialState = {
  items: JSON.parse(localStorage.getItem('basket')) || [],
  count: JSON.parse(localStorage.getItem('count')) || 0
  
};


export const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    calculateTotals: (state) => {
      let count = 0;
      state.items.forEach(item => {
        count += item.quantity || 1;
      });
      return { count };
    },
    addToBasket: (state, action) => {
      const item = action.payload;
      const existingItem = state.items.find(existingItem => existingItem.id === item.id);
      if (existingItem) {
        existingItem.quantity = (existingItem.quantity || 1) + 1;
      } else {
        state.items.push({ ...item, quantity: 1 });
      }
      const totals = basketSlice.caseReducers.calculateTotals(state);
      state.count = totals.count;
      localStorage.setItem('basket', JSON.stringify(state.items));
      localStorage.setItem('count', JSON.stringify(state.count));
      toast.success("Added to basket");
    },
    removeFromBasket: (state, action) => {
      const id = action.payload;
      state.items = state.items.filter(item => item.id !== id);
      const totals = basketSlice.caseReducers.calculateTotals(state);
      state.count = totals.count;
      localStorage.setItem('basket', JSON.stringify(state.items));
      localStorage.setItem('count', JSON.stringify(state.count));
    },
    increaseQuantity: (state, action) => {
      const id = action.payload;
      const item = state.items.find(item => item.id === id);
      if (item) {
        item.quantity = (item.quantity || 1) + 1;
        const totals = basketSlice.caseReducers.calculateTotals(state);
        state.count = totals.count;
        localStorage.setItem('basket', JSON.stringify(state.items));
        localStorage.setItem('count', JSON.stringify(state.count));
      }
    },
    decreaseQuantity: (state, action) => {
      const id = action.payload;
      const item = state.items.find(item => item.id === id);
      if (item) {
        if (item.quantity > 1) {
          item.quantity -= 1;
        } else {
          state.items = state.items.filter(item => item.id !== id);
        }
        const totals = basketSlice.caseReducers.calculateTotals(state);
        state.count = totals.count;
        localStorage.setItem('basket', JSON.stringify(state.items));
        localStorage.setItem('count', JSON.stringify(state.count));
      }
    }
  }
});

export const { addToBasket, removeFromBasket, increaseQuantity, decreaseQuantity } = basketSlice.actions;

export default basketSlice.reducer;
