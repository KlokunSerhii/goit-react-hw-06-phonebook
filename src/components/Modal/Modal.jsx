import { Formik, ErrorMessage } from 'formik';
import { BsFillPersonPlusFill } from 'react-icons/bs';
import { useEffect } from 'react';
import { toast } from 'react-toastify';
import { createPortal } from 'react-dom';
import { useDispatch, useSelector } from 'react-redux';

import { SignupSchema } from '../../options/validForm';
import {
  Label,
  Forma,
  Input,
  Button,
  Overlay,
  ModalDiv,
  Title,
} from './Modal.styled';
import { addContacts } from 'redux/contacts/sliceContacts';
import { toastOptions } from '../../options/toastOptions';
import { closeModal } from 'redux/modal/sliceModal';

const modalRood = document.querySelector('#modal-root');

function Modal() {
  const name = '';
  const number = '';
  const { contacts } = useSelector(state => state.contacts);
  const dispatch = useDispatch();

  const handleSubmit = ({ name, number }) => {
    const find = contacts.find(
      element => element.name.toLowerCase() === name.toLowerCase()
    );
    if (!find) {
      dispatch(addContacts({ name, number }));
      dispatch(closeModal());
      toast.success(`Contact ${name} added`, toastOptions);
      return;
    }
    toast.error(`${name} already in contacts.`, toastOptions);
  };

  useEffect(() => {
    const handlerEscapeClick = e => {
      if (e.code === 'Escape') {
        dispatch(closeModal());
      }
    };

    window.addEventListener('keydown', handlerEscapeClick);

    return window.removeEventListener('keydown', handlerEscapeClick);
  }, [dispatch]);

  const handlerBackdropClick = e => {
    if (e.target === e.currentTarget || e.code === 'Escape') {
      dispatch(closeModal());
    }
  };

  return createPortal(
    <Overlay onClick={handlerBackdropClick}>
      <ModalDiv>
        <Title>Phonebook</Title>

        <Formik
          initialValues={{ name, number }}
          validationSchema={SignupSchema}
          onSubmit={handleSubmit}
        >
          <Forma>
            <Label>
              <Input type="text" name="name" placeholder="Name" />
            </Label>
            <ErrorMessage name="name" />
            <Label>
              <Input type="tel" name="number" placeholder="Number" />
            </Label>
            <ErrorMessage name="number" />
            <Button type="submit" aria-label="add contact">
              <BsFillPersonPlusFill />
            </Button>
          </Forma>
        </Formik>
      </ModalDiv>
    </Overlay>,
    modalRood
  );
}

export default Modal;
