import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type {
  ReportsState,
  SetAllReportsAction,
  AddReportAction,
  UpdateReportAction,
  DeleteReportAction
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
    },

    emptyReports: (state) => {
      state.reports = [];
    },

    updateReport: (state, action: PayloadAction<UpdateReportAction>) => {
      const { report: reportToUpdate } = action.payload;
      const index = state.reports.findIndex(
        (report) => (report.id = reportToUpdate.id)
      );

      if (index === -1) return;
      state.reports[index] = reportToUpdate;
    },

    deleteReport: (state, action: PayloadAction<DeleteReportAction>) => {
      const { id } = action.payload;
      const index = state.reports.findIndex((report) => report.id === id);

      if (index === -1) return;
      state.reports.splice(index, 1);
    }
  }
});

export const {
  setAllReports,
  addReport,
  emptyReports,
  updateReport,
  deleteReport
} = reportsSlice.actions;

export default reportsSlice.reducer;
