import { configureStore } from '@reduxjs/toolkit';
import { userReducer, petsReducer, ownersReducer } from './reducer';

const store = configureStore({
  reducer: { user: userReducer, pets: petsReducer, owners: ownersReducer }
});

export default store;
