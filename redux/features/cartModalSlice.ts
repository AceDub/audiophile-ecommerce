import { createSlice } from '@reduxjs/toolkit';

interface CartModalState {
  isOpen: boolean;
}

const initialState: CartModalState = {
  isOpen: false,
};

export const cartModalSlice = createSlice({
  name: 'cartModal',
  initialState,
  reducers: {
    toggleCartModal: (state) => {
      state.isOpen = !state.isOpen;
    },
  },
});

export const { toggleCartModal } = cartModalSlice.actions;
export default cartModalSlice.reducer;
