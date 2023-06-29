import { BsFillPersonDashFill, BsPersonCircle } from 'react-icons/bs';
import PropTypes from 'prop-types';
import { removeContacts } from 'redux/contacts/sliceContacts';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';

import { Button, Li, Ul } from './ContactList.styled';
import { toastOptions } from '../../options/toastOptions';

const ContactList = () => {
  const { filter } = useSelector(state => state.filter);
  const { contacts } = useSelector(state => state.contacts);

  const dispatch = useDispatch();

  const normalizedFilter = filter.toLowerCase();
  const filterContact = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );

  const deleteContacts = id => {
    dispatch(removeContacts(id));
    toast.error('Сontact deleted!', toastOptions);
  };
  return (
    <Ul>
      {filterContact.map(({ id, name, number }) => (
        <Li key={id}>
          <BsPersonCircle />
          {name} : {number}
          <Button
            onClick={() => deleteContacts(id)}
            aria-label="Delete contact"
          >
            <BsFillPersonDashFill />
          </Button>
        </Li>
      ))}
    </Ul>
  );
};
ContactList.prototype = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      number: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ),
};
export default ContactList;
