import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type {
  AppointmentsState,
  SetAllAppointmentsAction
} from '@/types/types';

const initialState: AppointmentsState = {
  today: [],
  future: []
};

const appointmentsSlice = createSlice({
  name: 'appointments',
  initialState,
  reducers: {
    setAllAppointments: (
      state,
      action: PayloadAction<SetAllAppointmentsAction>
    ) => {
      state.today = action.payload.today;
      state.future = action.payload.future;
    },

    emptyAppointments: (state) => {
      state.today = [];
      state.future = [];
    }
  }
});

export const { setAllAppointments, emptyAppointments } =
  appointmentsSlice.actions;

export default appointmentsSlice.reducer;
