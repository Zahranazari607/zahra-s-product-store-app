import { createSlice } from '@reduxjs/toolkit';

const loadCartFromStorage = () => {
  const savedCart = localStorage.getItem('zahra_cart');
  return savedCart ? JSON.parse(savedCart) : { items: [], totalQuantity: 0, totalPrice: 0 };
};

const cartSlice = createSlice({
  name: 'cart',
  initialState: loadCartFromStorage(),
  reducers: {
    addToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      state.totalQuantity++;
      state.totalPrice += newItem.price;

      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          title: newItem.title,
          price: newItem.price,
          quantity: 1,
          image: newItem.image,
        });
      } else {
        existingItem.quantity++;
      }
      localStorage.setItem('zahra_cart', JSON.stringify(state));
    },
    removeFromCart(state, action) {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      if (!existingItem) return;

      state.totalQuantity--;
      state.totalPrice -= existingItem.price;

      if (existingItem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== id);
      } else {
        existingItem.quantity--;
      }
      localStorage.setItem('zahra_cart', JSON.stringify(state));
    },
    clearCart(state) {
      state.items = [];
      state.totalQuantity = 0;
      state.totalPrice = 0;
      localStorage.removeItem('zahra_cart');
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;