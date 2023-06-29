import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { BsFillPersonPlusFill } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';

import 'react-toastify/dist/ReactToastify.css';
import ContactList from './ContactList';
import Modal from 'components/Modal/Modal';
import Filter from './Filter';
import { Div, TitleList, Button, DivFlex } from './App.styled';
import { toastOptions } from '../options/toastOptions';
import { removeContacts, addContacts } from 'redux/contacts/sliceContacts';
import { changeFilter } from 'redux/filters/sliceFilters';

const App = () => {
  const [showModal, setShowModal] = useState(false);

  const { filter } = useSelector(state => state.filter);
  const { contacts } = useSelector(state => state.contacts);
  const dispatch = useDispatch();

  const toggleModal = () => {
    setShowModal(!showModal);
  };
  const handleSubmit = ({ name, number }) => {
    const find = contacts.find(
      element => element.name.toLowerCase() === name.toLowerCase()
    );
    if (!find) {
      dispatch(addContacts({ name, number }));
      return;
    }
    toast.error(' Contact already in contacts.', toastOptions);
  };

  const handlerFilter = e => {
    dispatch(changeFilter(e.currentTarget.value));
  };

  const visibleFilters = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const deleteContacts = id => {
    dispatch(removeContacts(id));
    toast.error('Сontact deleted!', toastOptions);
  };

  return (
    <Div>
      <TitleList>Contacts</TitleList>
      <DivFlex>
        <Button type="submit" aria-label="add contact" onClick={toggleModal}>
          <BsFillPersonPlusFill />
        </Button>
        <Filter onChange={handlerFilter} value={filter} />
      </DivFlex>
      {showModal && <Modal onClose={toggleModal} onSubmit={handleSubmit} />}

      <ContactList contacts={visibleFilters()} onDelete={deleteContacts} />
      <ToastContainer />
    </Div>
  );
};

export default App;
