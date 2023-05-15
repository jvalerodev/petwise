import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type {
  ReportsState,
  SetAllReportsAction,
  AddReportAction
} from '@/types/types';

const initialState: ReportsState = {
  reports: []
};

const reportsSlice = createSlice({
  name: 'reports',
  initialState,
  reducers: {
    setAllReports: (state, action: PayloadAction<SetAllReportsAction>) => {
      state.reports = action.payload.reports;
    },

    addReport: (state, action: PayloadAction<AddReportAction>) => {
      state.reports = [...state.reports, action.payload.report];
    }
  }
});

export const { setAllReports, addReport } = reportsSlice.actions;

export default reportsSlice.reducer;
