import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { VaultData } from 'Types/PersonalDataType';

const initialState: VaultData[] = [];

const vaultDataSlice = createSlice({
  name: 'vaultData',
  initialState,
  reducers: {
    addVaultData: (state, action: PayloadAction<VaultData>) => {
      state.push(action.payload);
    },
    removeVaultData: (state, action: PayloadAction<readonly string[]>) => {
      const arrayOfIdToRemove = action.payload;
      return state.filter((data) => !arrayOfIdToRemove.includes(data.id));
    },
  },
});

export const { addVaultData, removeVaultData } = vaultDataSlice.actions;

export default vaultDataSlice.reducer;
