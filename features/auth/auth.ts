import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

interface authState {
  value: number;
  showmodal: boolean;
  selectionmodal: boolean;
  imageUrl: string;
  activeTabs: 'home' | 'card' | 'savings' | 'salary'
}

const initialState: authState = {
  value: 0,
  showmodal: false,
  selectionmodal: false,
  imageUrl: '',
  activeTabs: 'home',
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
    setSelectionModal: (state, action: PayloadAction<boolean>) => {
      state.selectionmodal = action.payload;
    },
    setActiveTab: (state, action: PayloadAction<'home' | 'card' | 'savings' | 'salary'>) => {
      state.activeTabs = action.payload;
    },
    saveImageCaptured: (state, action: PayloadAction<string>) => {
      state.imageUrl = action.payload;
    },
  },
});

export const selectUser = (state: RootState) => state.auth;

export const { increment, decrement, setValue, shouldShowModal, saveImageCaptured, setSelectionModal, setActiveTab } = authSlice.actions;
export default authSlice.reducer;
