import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type {
  AppointmentState,
  SetAllAppointmentsAction
} from '@/types/appointments';

const initialState: AppointmentState = {
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
    }
  }
});

export const { setAllAppointments } = appointmentsSlice.actions;

export default appointmentsSlice.reducer;
