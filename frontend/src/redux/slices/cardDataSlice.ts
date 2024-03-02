import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RepoEntryData } from '../../models/RepoEntryData';

interface CardDataManagement {
  firstJavaScriptCardData: RepoEntryData[];
  secondJavaCardData: RepoEntryData[];
  thirdCPlusPlusCardData: RepoEntryData[];
  fourthPythonCardData: RepoEntryData[];
}

const initialState: CardDataManagement = {
  firstJavaScriptCardData: [],
  fourthPythonCardData: [],
  secondJavaCardData: [],
  thirdCPlusPlusCardData: [],
};

const counterSlice = createSlice({
  name: 'cardDataSlice',
  initialState: initialState,
  reducers: {
    setFirstJavaScriptCardData: (
      state,
      action: PayloadAction<RepoEntryData[]>
    ) => {
      state.firstJavaScriptCardData = action.payload;
    },
    setSecondJavaCardData: (state, action: PayloadAction<RepoEntryData[]>) => {
      state.firstJavaScriptCardData = action.payload;
    },
    setThirdCPlusPlusCardData: (
      state,
      action: PayloadAction<RepoEntryData[]>
    ) => {
      state.firstJavaScriptCardData = action.payload;
    },
    setFourthPythonCardData: (
      state,
      action: PayloadAction<RepoEntryData[]>
    ) => {
      state.firstJavaScriptCardData = action.payload;
    },
  },
});

export const exportedActionObject = {
  actions: counterSlice.actions,
  reducer: counterSlice.reducer,
};

export default counterSlice.reducer;
