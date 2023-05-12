import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { PetsState, AddPetAction, GetAllPetsAction } from '@/types/types';

const initialState: PetsState = {
  pets: []
};

const petsSlice = createSlice({
  name: 'pets',
  initialState,
  reducers: {
    addPet: (state, action: PayloadAction<AddPetAction>) => {
      state.pets = [...state.pets, action.payload.pet];
    },

    getAllPets: (state, action: PayloadAction<GetAllPetsAction>) => {
      state.pets = action.payload.pets;
    }
  }
});

export const { addPet, getAllPets } = petsSlice.actions;

export default petsSlice.reducer;
