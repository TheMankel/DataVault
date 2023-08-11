import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { VaultData } from 'Types/PersonalDataType';
import manageLocalStorage from 'Helpers/manageLocalStorage';
// import MockPersonalData from 'Mock/MockPersonalData';

const initialState: VaultData[] = manageLocalStorage.loadFromLocalStorage(
  'vaultData',
  [],
);

const vaultDataSlice = createSlice({
  name: 'vaultData',
  initialState,
  reducers: {
    addVaultData: (state, action: PayloadAction<VaultData>) => {
      state.push(action.payload);
      manageLocalStorage.saveToLocalStorage('vaultData', state);
    },
    removeVaultData: (state, action: PayloadAction<readonly string[]>) => {
      const arrayOfIdToRemove = action.payload;
      const updatedState = state.filter(
        (data) => !arrayOfIdToRemove.includes(data.id),
      );
      manageLocalStorage.saveToLocalStorage('vaultData', updatedState);

      return updatedState;
    },
    editVaultData: (state, action: PayloadAction<VaultData>) => {
      const editedData = action.payload;
      const updatedState = state.map((data) =>
        data.id === editedData.id ? editedData : data,
      );
      manageLocalStorage.saveToLocalStorage('vaultData', updatedState);

      return updatedState;
    },
    // filterVaultData: (
    //   state,
    //   action: PayloadAction<{ id: keyof VaultData; value: string }>,
    // ) => {
    //   const filter = action.payload;
    //   return state.filter((data) => data[filter.id].includes(filter.value));
    // },
  },
});

export const { addVaultData, removeVaultData, editVaultData } =
  vaultDataSlice.actions;

export default vaultDataSlice.reducer;
