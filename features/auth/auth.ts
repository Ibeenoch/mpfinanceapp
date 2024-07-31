
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';
import * as api from './authService'

interface Address {
  house: string;
  street: string;
  stateLga: string;
  selectedState: string;
}

interface Income {
  selectedIncome: string;
  selectedOccupation: string;
  selectedValue: string;
}

interface Info {
  email: string;
  phone: string;
  passcode: string;
  nationality: string;
  id: string;
  address: any;
  image: string;
  pep: string;
  income: any;
}

interface authState {
  value: number;
  showmodal: boolean;
  selectionmodal: boolean;
  processPhoto: boolean;
  imageUrl: string;
  activeTabs: 'home' | 'card' | 'saving' | 'salary' | 'main',
  status: 'idle' | 'loading' | 'success' | 'error',
  mainModalActive: boolean;
  skeletonHome: boolean;
  skeletonCard: boolean;
  skeletonSaving: boolean;
  email: string;
  phone: string;
  passcode: string;
  nationality: string;
  id: string;
  address: any;
  image: string;
  pep: string;
  income: any;
}

const initialState: authState = {
  value: 0,
  showmodal: false,
  selectionmodal: false,
  imageUrl: '',
  activeTabs: 'home',
  status: 'idle',
  processPhoto: false,
  mainModalActive: false,
  skeletonHome: false,
  skeletonCard: false,
  skeletonSaving: false,
  email: '',
  phone: '',
  passcode: '',
  nationality: '',
  id: '',
  address: {},
  image: '',
  pep: '',
  income: {}
};

export const verifyPhoneNum = createAsyncThunk('/user/verifyphone', async(phone: any) => {
  try {
    const res = await api.sendPhoneVerification(phone);
    return res;
} catch (error) {
    console.log(error)
}
})

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
    setEmailAddress: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
    setPhoneNum: (state, action: PayloadAction<string>) => {
      state.phone = action.payload;
    },
    setPasscode: (state, action: PayloadAction<string>) => {
      state.passcode = action.payload;
    },
    setNationality: (state, action: PayloadAction<string>) => {
      state.nationality = action.payload;
    },
    setId: (state, action: PayloadAction<string>) => {
      state.id = action.payload;
    },
    setAddress: (state, action: PayloadAction<any>) => {
      state.address = action.payload;
    },
    setImage: (state, action: PayloadAction<string>) => {
      state.image = action.payload;
    },
    setPep: (state, action: PayloadAction<string>) => {
      state.pep = action.payload;
    },
    setIncome: (state, action: PayloadAction<any>) => {
      state.income = action.payload;
    },
  
  },

  extraReducers(builder) {
    builder
      .addCase(verifyPhoneNum.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(verifyPhoneNum.fulfilled, (state, action) => {
        state.status = "success";
        console.log(action.payload)
      })
      .addCase(verifyPhoneNum.rejected, (state, action) => {
        state.status = "error";
      })
  }
  
});

export const selectUser = (state: RootState) => state.auth;

export const { increment, decrement, setValue, shouldShowModal, setEmailAddress, setPasscode, setPep, setPhoneNum, setNationality, setId, setIncome, setAddress, setImage, saveImageCaptured, setMainModalActive, setSkeletonCard, setSkeletonHome, setSkeletonSaving, setProcessPhoto, setSelectionModal, setActiveTab } = authSlice.actions;
export default authSlice.reducer;
