import { combineReducers } from 'redux';
import contactsSlice from './contacts/sliceContacts';
import sliceFilters from './filters/sliceFilters';
import sliceModal from './modal/sliceModal';

export const rootReducer = combineReducers({
  contacts: contactsSlice,
  filter: sliceFilters,
  modal: sliceModal,
});
