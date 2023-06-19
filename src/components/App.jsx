import { useState } from 'react';
import { nanoid } from 'nanoid';
import { ToastContainer, toast } from 'react-toastify';
import { BsFillPersonPlusFill } from 'react-icons/bs';
import 'react-toastify/dist/ReactToastify.css';
import ContactList from './ContactList';
import Modal from 'components/Modal/Modal';
import Filter from './Filter';
import { Div, TitleList, Button, DivFlex } from './App.styled';
import { useLocalStorage } from '../huks/useLocalStorage';
import { toastOptions } from '../options/toastOptions';

const App = () => {
  const [filter, setFilter] = useState('');
  const [contacts, setContacts] = useLocalStorage('contact', []);
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };
  const handleSubmit = ({ name, number }) => {
    const newContacts = {
      id: nanoid(),
      name,
      number,
    };

    const find = contacts.find(
      element => element.name.toLowerCase() === name.toLowerCase()
    );
    if (!find) {
      toast.success('Contact added', toastOptions);
      setContacts(prevContacts => [newContacts, ...prevContacts]);
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
    setContacts(contacts.filter(contact => contact.id !== id));
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
