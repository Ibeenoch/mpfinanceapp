import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

interface authState {
  value: number;
  showmodal: boolean;
  selectionmodal: boolean;
  processPhoto: boolean;
  imageUrl: string;
  activeTabs: 'home' | 'card' | 'saving' | 'salary' | 'main',
  mainModalActive: boolean;
  skeletonHome: boolean;
  skeletonCard: boolean;
  skeletonSaving: boolean;
}

const initialState: authState = {
  value: 0,
  showmodal: false,
  selectionmodal: false,
  imageUrl: '',
  activeTabs: 'home',
  processPhoto: false,
  mainModalActive: false,
  skeletonHome: false,
  skeletonCard: false,
  skeletonSaving: false,
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
    setMainModalActive: (state, action: PayloadAction<boolean>) => {
      state.mainModalActive = action.payload;
    },
    setActiveTab: (state, action: PayloadAction<'home' | 'card' | 'saving' | 'salary' | 'main'>) => {
      state.activeTabs = action.payload;
    },
    saveImageCaptured: (state, action: PayloadAction<string>) => {
      state.imageUrl = action.payload;
    },
    setProcessPhoto: (state, action: PayloadAction<boolean>) => {
      state.processPhoto = action.payload;
    },
    setSkeletonHome: (state, action: PayloadAction<boolean>) => {
      state.skeletonHome = action.payload;
    },
    setSkeletonCard: (state, action: PayloadAction<boolean>) => {
      state.skeletonCard = action.payload;
    },
    setSkeletonSaving: (state, action: PayloadAction<boolean>) => {
      state.skeletonSaving = action.payload;
    },
  },
});

export const selectUser = (state: RootState) => state.auth;

export const { increment, decrement, setValue, shouldShowModal, saveImageCaptured, setMainModalActive, setSkeletonCard, setSkeletonHome, setSkeletonSaving, setProcessPhoto, setSelectionModal, setActiveTab } = authSlice.actions;
export default authSlice.reducer;
