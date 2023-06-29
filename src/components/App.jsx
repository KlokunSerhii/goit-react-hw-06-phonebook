import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { BsFillPersonPlusFill } from 'react-icons/bs';
import 'react-toastify/dist/ReactToastify.css';
import ContactList from './ContactList';
import Modal from 'components/Modal/Modal';
import Filter from './Filter';
import { Div, TitleList, Button, DivFlex } from './App.styled';
import { toastOptions } from '../options/toastOptions';
import { useDispatch, useSelector } from 'react-redux';
import { removeContacts, addContacts } from 'redux/contacts/slice';
const App = () => {
  const [filter, setFilter] = useState('');
  const [showModal, setShowModal] = useState(false);

  const { contacts } = useSelector((state) => state.contacts);
  const dispatch = useDispatch();

  const toggleModal = () => {
    setShowModal(!showModal);
  };
  const handleSubmit = ({ name, number }) => {
    const find = contacts.find(
      element => element.name.toLowerCase() === name.toLowerCase()
    );
    if (!find) {
      toast.success('Contact added', toastOptions);
      dispatch(addContacts({ name, number }))
      return;
    }
    toast.error(' Contact already in contacts.', toastOptions);
  };

  const changeFilter = e => {
    setFilter(e.currentTarget.value);
  };

  const visibleFilters = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const deleteContacts = id => {
    dispatch(removeContacts(id))
    toast.error('Сontact deleted!', toastOptions);
  };

  return (
    <Div>
      <TitleList>Contacts</TitleList>
      <DivFlex>
        <Button type="submit" aria-label="add contact" onClick={toggleModal}>
          <BsFillPersonPlusFill />
        </Button>
        <Filter onChange={changeFilter} value={filter} />
      </DivFlex>
      {showModal && <Modal onClose={toggleModal} onSubmit={handleSubmit} />}

      <ContactList contacts={visibleFilters()} onDelete={deleteContacts} />
      <ToastContainer />
    </Div>
  );
};

export default App;
