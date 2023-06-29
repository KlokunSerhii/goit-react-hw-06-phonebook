import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './initialStateModal';
const sliceModal = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModal(state) {
      state.isOpen = true;
    },
    closeModal(state) {
      state.isOpen = false;
    },
  },
});

export const { closeModal, openModal } = sliceModal.actions;
export default sliceModal.reducer;
