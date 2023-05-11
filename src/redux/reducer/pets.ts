import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { PetsState, AddPetAction } from '@/types/types';

const initialState: PetsState = {
  pets: []
};

const petsSlice = createSlice({
  name: 'pets',
  initialState,
  reducers: {
    addPet: (state, action: PayloadAction<AddPetAction>) => {
      console.log(action);
      state.pets = [...state.pets, action.payload.pet];
    }
  }
});

export const { addPet } = petsSlice.actions;

export default petsSlice.reducer;
