import { combineReducers } from 'redux';
import contactsSlice from './contacts/slice'


export const rootReducer = combineReducers({
    contacts: contactsSlice,
  });