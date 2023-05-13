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

    emptyOwners: (state) => {
      state.owners = [];
    }
  }
});

export const { getAllOwners, emptyOwners } = owernsSlice.actions;

export default owernsSlice.reducer;
