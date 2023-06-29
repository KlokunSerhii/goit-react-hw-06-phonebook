import { createSlice, nanoid } from '@reduxjs/toolkit';
import { initialState } from './initialState';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContacts: {
      reducer(state, { payload }) {
        console.log(payload);
        state.contacts.push(payload);
      },
      prepare({ name, number }) {
        return {
          payload: {
            id: nanoid(),
            name,
            number,
          },
        };
      },
    },
    removeContacts: (state, { payload }) => {
      state.contacts = state.contacts.filter(state => state.id !== payload);
    },
  },
});
export const { addContacts, removeContacts } = contactsSlice.actions;
export default contactsSlice.reducer;
