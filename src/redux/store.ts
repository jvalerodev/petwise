import { configureStore } from '@reduxjs/toolkit';
import {
  userReducer,
  petsReducer,
  ownersReducer,
  appointmentsReducer,
  reportsReducer
} from './reducer';

const store = configureStore({
  reducer: {
    user: userReducer,
    pets: petsReducer,
    owners: ownersReducer,
    appointments: appointmentsReducer,
    reports: reportsReducer
  }
});

export default store;
