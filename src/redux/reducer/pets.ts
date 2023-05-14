import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type {
  PetsState,
  AddPetAction,
  GetAllPetsAction,
  UpdatePetAction,
  DeletePetAction
} from '@/types/types';

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
    },

    updatePet: (state, action: PayloadAction<UpdatePetAction>) => {
      const { pet: petToUpdate } = action.payload;
      const index = state.pets.findIndex((pet) => pet.id === petToUpdate.id);

      if (index === -1) return;
      state.pets[index] = petToUpdate;
    },

    deletePet: (state, action: PayloadAction<DeletePetAction>) => {
      const { id } = action.payload;
      const index = state.pets.findIndex((pet) => pet.id === id);

      if (index === -1) return;
      state.pets.splice(index, 1);
    },

    emptyPets: (state) => {
      state.pets = [];
    }
  }
});

export const { addPet, getAllPets, updatePet, deletePet, emptyPets } =
  petsSlice.actions;

export default petsSlice.reducer;
