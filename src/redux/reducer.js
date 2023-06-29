import { combineReducers } from 'redux';
import contactsSlice from './contacts/sliceContacts';
import sliceFilters from './filters/sliceFilters';

export const rootReducer = combineReducers({
  contacts: contactsSlice,
  filter: sliceFilters,
});
