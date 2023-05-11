import { configureStore } from '@reduxjs/toolkit';
import { userReducer, petsReducer } from './reducer';

const store = configureStore({
  reducer: { user: userReducer, pets: petsReducer }
});

export default store;
