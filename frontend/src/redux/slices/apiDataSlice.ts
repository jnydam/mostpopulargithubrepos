import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RepoEntryData } from '../../models/RepoEntryData';
import {
  CountStatusResponseEntry,
  UpdateStatusReponseEntry,
} from '../../models/RepoEntryApiResponse';

interface ApiDataSliceDataManagement {
  javascriptRepoList: RepoEntryData[];
  pythonRepoList: RepoEntryData[];
  javaRepoList: RepoEntryData[];
  cPlusPlusRepoList: RepoEntryData[];
  countStatusResponseEntryList: CountStatusResponseEntry[];
  updateStatusResponseEntryList: UpdateStatusReponseEntry[];
}

const initialState: ApiDataSliceDataManagement = {
  javascriptRepoList: [],
  pythonRepoList: [],
  javaRepoList: [],
  cPlusPlusRepoList: [],
  countStatusResponseEntryList: [],
  updateStatusResponseEntryList: [],
};

const apiDataSlice = createSlice({
  name: 'apiDateSlice',
  initialState: initialState,
  reducers: {
    setCountStatusResponseEntryList: (
      state,
      action: PayloadAction<CountStatusResponseEntry[]>
    ) => {
      state.countStatusResponseEntryList = action.payload;
    },
    setUpdateStatusResponseEntryList: (
      state,
      action: PayloadAction<UpdateStatusReponseEntry[]>
    ) => {
      state.updateStatusResponseEntryList = action.payload;
    },
    setJavaScriptRepoList: (state, action: PayloadAction<RepoEntryData[]>) => {
      state.javascriptRepoList = action.payload;
    },
    setPythonRepoList: (state, action: PayloadAction<RepoEntryData[]>) => {
      state.pythonRepoList = action.payload;
    },
    setJavaRepoList: (state, action: PayloadAction<RepoEntryData[]>) => {
      state.javaRepoList = action.payload;
    },
    setCPlusPlusRepoList: (state, action: PayloadAction<RepoEntryData[]>) => {
      state.cPlusPlusRepoList = action.payload;
    },
  },
});

export const exportedActionObject = {
  actions: apiDataSlice.actions,
  reducer: apiDataSlice.reducer,
};

export default apiDataSlice.reducer;
