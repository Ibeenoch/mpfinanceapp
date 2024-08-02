
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
  user: any;
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
  nationalityFlag: string;
  id: string;
  address: any;
  image: string;
  pep: string;
  income: any;
  isEditNationationality: boolean;
  isEditAddress: boolean;
  isEditIncome: boolean;
}

const initialState: authState = {
  value: 0,
  showmodal: false,
  selectionmodal: false,
  imageUrl: '',
  user: {},
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
  nationalityFlag: '',
  id: '',
  address: {},
  image: '',
  pep: '',
  income: {},
  isEditNationationality: false,
  isEditAddress: false,
  isEditIncome: false,
};

export const login = createAsyncThunk('/user/signin', async(phone: any) => {
  try {
    const res = await api.login(phone);
    return res;
} catch (error) {
    console.log(error)
}
})

export const signUp = createAsyncThunk('/user/signup', async(phone: any) => {
  try {
    const res = await api.signUp(phone);
    return res;
} catch (error) {
    console.log(error)
}
})

export const sendPhoneSms = createAsyncThunk('/user/sendsmsphone', async(phone: any) => {
  try {
    const res = await api.sendPhoneVerification(phone);
    return res;
} catch (error) {
    console.log(error)
}
})

export const verifyPhoneNum = createAsyncThunk('/user/verifyphone', async(phone: any) => {
  try {
    const res = await api.SmsVerification(phone);
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
    setNationalityFlag: (state, action: PayloadAction<string>) => {
      state.nationalityFlag = action.payload;
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
    setEditNationality: (state, action: PayloadAction<boolean>) => {
      state.isEditNationationality = action.payload;
    },
    setEditAddress: (state, action: PayloadAction<boolean>) => {
      state.isEditAddress = action.payload;
    },
    setEditIncome: (state, action: PayloadAction<boolean>) => {
      state.isEditIncome = action.payload;
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
      .addCase(sendPhoneSms.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(sendPhoneSms.fulfilled, (state, action) => {
        state.status = "success";
        console.log(action.payload)
      })
      .addCase(sendPhoneSms.rejected, (state, action) => {
        state.status = "error";
      })
      .addCase(signUp.pending, (state, action) => {
        state.status = "loading";
        state.user = action.payload;
      })
      .addCase(signUp.fulfilled, (state, action) => {
        state.status = "success";
        console.log(action.payload)
      })
      .addCase(signUp.rejected, (state, action) => {
        state.status = "error";
      })
      .addCase(login.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(login.fulfilled, (state, action) => {
        state.status = "success";
        state.user = action.payload;
      })
      .addCase(login.rejected, (state, action) => {
        state.status = "error";
      })
  }
  
});

export const selectUser = (state: RootState) => state.auth;

export const { increment, decrement, setValue, shouldShowModal, setNationalityFlag, setEditAddress, setEditIncome, setEditNationality, setEmailAddress, setPasscode, setPep, setPhoneNum, setNationality, setId, setIncome, setAddress, setImage, saveImageCaptured, setMainModalActive, setSkeletonCard, setSkeletonHome, setSkeletonSaving, setProcessPhoto, setSelectionModal, setActiveTab } = authSlice.actions;
export default authSlice.reducer;
