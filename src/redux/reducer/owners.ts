import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { OwnersState, GetAllOwnersAction } from '@/types/states';

const initialState: OwnersState = {
  owners: []
};

const owernsSlice = createSlice({
  name: 'owners',
  initialState,
  reducers: {
    getAllOwners: (state, action: PayloadAction<GetAllOwnersAction>) => {
      state.owners = action.payload.owners;
    },

    updateOwner: (state, action) => {
      const { owner: ownerToUpdate } = action.payload;
      const index = state.owners.findIndex(
        (owner) => owner.id === ownerToUpdate.id
      );

      if (index === -1) return;
      state.owners[index] = ownerToUpdate;
    },

    emptyOwners: (state) => {
      state.owners = [];
    }
  }
});

export const { getAllOwners, updateOwner, emptyOwners } = owernsSlice.actions;

export default owernsSlice.reducer;
