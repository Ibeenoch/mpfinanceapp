import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

interface authState {
  value: number;
  showmodal: boolean;
  imageUrl: string;
}

const initialState: authState = {
  value: 0,
  showmodal: false,
  imageUrl: ''
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
    saveImageCaptured: (state, action: PayloadAction<string>) => {
      state.imageUrl = action.payload;
    },
  },
});

export const selectUser = (state: RootState) => state.auth;

export const { increment, decrement, setValue, shouldShowModal, saveImageCaptured } = authSlice.actions;
export default authSlice.reducer;
