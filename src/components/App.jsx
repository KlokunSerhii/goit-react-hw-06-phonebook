import { useState } from 'react';
import { nanoid } from 'nanoid';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';
import { Title, Div, TitleList } from './App.styled';
import { useLocalStorage } from '../huks/useLocalStorage';
import { toastOptions } from '../options/toastOptions';

const App = () => {
  const [filter, setFilter] = useState('');
  const [contacts, setContacts] = useLocalStorage('contact', []);

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
      <Title>Phonebook</Title>
      <ContactForm onSubmit={handleSubmit} />
      <TitleList>Contacts</TitleList>
      <Filter onChange={changeFilter} value={filter} />
      <ContactList contacts={visibleFilters()} onDelete={deleteContacts} />
      <ToastContainer />
    </Div>
  );
};

export default App;
