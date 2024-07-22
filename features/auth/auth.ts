import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface authState {
  value: number;
  showmodal: boolean;
}

const initialState: authState = {
  value: 0,
  showmodal: true,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    setValue: (state, action: PayloadAction<number>) => {
      state.value = action.payload;
    },
    shouldShowModal: (state, action: PayloadAction<boolean>) => {
      state.showmodal = action.payload;
    },
  },
});

export const { increment, decrement, setValue, shouldShowModal } = authSlice.actions;
export default authSlice.reducer;
