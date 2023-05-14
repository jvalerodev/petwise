import { configureStore } from '@reduxjs/toolkit';
import {
  userReducer,
  petsReducer,
  ownersReducer,
  appointmentsReducer
} from './reducer';

const store = configureStore({
  reducer: {
    user: userReducer,
    pets: petsReducer,
    owners: ownersReducer,
    appointments: appointmentsReducer
  }
});

export default store;
