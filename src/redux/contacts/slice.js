import { createSlice, nanoid } from "@reduxjs/toolkit";



const initialState = {
  contacts: [],
};

const contactsSlice = createSlice({
    name: "contacts",
    initialState,
    reducers: {
        addContacts:{ 
            reducer(state, { payload }){
                console.log(payload)
                state.contacts.push(payload)
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
            console.log(payload)
            console.log(state)
            state.contacts = state.contacts.filter(state => state.id !== payload)
      },
    },
  });
  
  export const { addContacts, removeContacts} =
  contactsSlice.actions;
    
  export default contactsSlice.reducer;